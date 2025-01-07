"use client";
import { ItemsWrapper, StepFrame, StepItem } from "./styledComponents";

const step1 = {
  index: 1,
  title: "STEP 1",
  subTitle: "YOUR INFO",
};
const step2 = {
  index: 2,
  title: "STEP 2",
  subTitle: "SELECT PLAN",
};
const step3 = {
  index: 3,
  title: "STEP 3",
  subTitle: "ADD ON",
};
const step4 = {
  index: 4,
  title: "STEP 4",
  subTitle: "SUMMARY",
};

export const SideBar = (props: {
  isMobile: boolean;
  currentStepIndex: number;
}) => {
  const steps = [step1, step2, step3, step4];

  // Calculate display step number, keeping step 4 for both 4 and 5
  const getDisplayStepIndex = (stepIndex: number) =>
    stepIndex > 3 ? 4 : stepIndex + 1;

  return (
    <StepFrame ismobile={props.isMobile}>
      <ItemsWrapper ismobile={props.isMobile}>
        {steps.map((step) => (
          <StepItem
            chosen={step.index == getDisplayStepIndex(props.currentStepIndex)}
            ismobile={props.isMobile}
            key={step.title}
          >
            <div className="stepNumber">{step.index}</div>
            <div className="rightSide">
              <div className="stepTitle">{step.title}</div>
              <div className="stepSubtitle">{step.subTitle}</div>
            </div>
          </StepItem>
        ))}
      </ItemsWrapper>
    </StepFrame>
  );
};
