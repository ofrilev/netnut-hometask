"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  JSX,
} from "react";
import {
  steps,
  StepName,
  StepState,
  initialStepState,
  StepData,
  initialStepsData,
} from "./types";
import { Buttons } from "./buttons";
import { getFirstState } from "./helpers/getFirstState";
import { getFirstStep } from "./helpers/getFirstStep";
import { validateCurrentStep } from "./helpers/validateCurrentStep";
import { getData } from "@/app/fetch/fetch";

interface StepContextType {
  stepsData: StepData;
  firstFetch: () => Promise<void>;
  CurrentStep: React.FC;
  currentStepName: StepName;
  currentStepIndx: number;
  totalSteps: number;
  Buttons: (props: { isMobile: boolean }) => JSX.Element;
  stepState: StepState;
  changeStepState: (data: Partial<StepState>) => void;
  goToPlanStep: () => void;
}

const StepsContext = createContext<StepContextType | undefined>(undefined);

export const useStepsContext = (): StepContextType => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const StepContextProvider: FC<Props> = ({ children }) => {
  const [stepsData, setStepsData] = useState<StepData>(initialStepsData);
  const [stepState, setStepState] = useState<StepState>(initialStepState);
  const [currentStepIndx, setCurrentStepIndx] = useState<number>(0);

  const firstFetch = async () => {
    const fetchedStepsData = await getData();
    const { plans, addons } = fetchedStepsData;
    setStepsData((prev: StepData) => ({
      ...prev,
      SelectPlan: { ...prev.SelectPlan, plans },
      AddOns: { ...prev.AddOns, addons },
    }));
    const initialState = getFirstState(fetchedStepsData);
    const currentStep = getFirstStep(initialState);
    setStepState(initialState);
    setCurrentStepIndx(currentStep);
  };

  const changeStepState = (data: Partial<StepState>) =>
    setStepState((prev) => ({ ...prev, ...data }));

  const goToNextStep = () => {
    if (currentStepIndx < steps.length - 1)
      setCurrentStepIndx(currentStepIndx + 1);
  };

  const goToPrevStep = () => {
    if (currentStepIndx > 0) setCurrentStepIndx(currentStepIndx - 1);
  };

  const goToPlanStep = () => setCurrentStepIndx(1);

  const isSummaryStep = currentStepIndx === steps.length - 2;

  const handleNextClick = () => {
    if (isSummaryStep) {
      console.log("Confirming step...");
      // Add any additional logic for the summary step here
    }
    const isStepValid = validateCurrentStep({
      changeStepState,
      currentStepName: steps[currentStepIndx].name,
      stepState,
    });
    if (isStepValid) {
      goToNextStep();
    }
  };

  const contextValue: StepContextType = {
    CurrentStep: steps[currentStepIndx].component,
    currentStepName: steps[currentStepIndx].name,
    currentStepIndx,
    totalSteps: steps.length,
    Buttons: (props) => (
      <Buttons
        handleNextClick={handleNextClick}
        isMobile={props.isMobile}
        goToPrevStep={goToPrevStep}
        isLastStep={currentStepIndx === steps.length - 1}
        isSummaryStep={isSummaryStep}
        isFirstStep={currentStepIndx == 0}
      />
    ),
    stepState,
    changeStepState,
    goToPlanStep,
    firstFetch,
    stepsData,
  };
  return (
    <StepsContext.Provider value={contextValue}>
      {children}
    </StepsContext.Provider>
  );
};
