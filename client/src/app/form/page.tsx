"use client";
import { SideBar } from "@/components/sideBar/sideBar";
import { useStepsContext } from "@/components/stepContext/stepsContext";
import { StepWrapper, DesktopWrapper } from "@/components/stepWrapper";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import LoaderGif from "@/components/LoaderGif";

const Form = () => {
  const { width } = useWindowSize();
  const isMobile = width < 476;
  const [loading, setLoading] = useState(true);

  const {
    CurrentStep,
    Buttons,
    currentStepName,
    currentStepIndx,
    stepsData,
    firstFetch,
  } = useStepsContext();

  useEffect(() => {
    const fetch = async () => {
      await firstFetch();
    };
    fetch().then(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <LoaderGif />}
      {isMobile ? (
        <>
          <SideBar isMobile={isMobile} currentStepIndex={currentStepIndx} />
          <StepWrapper isMobile={isMobile}>
            <div className="titleWrapper">
              <div className="StepTitle">
                {stepsData[currentStepName].title}
              </div>
              <div className="StepSubTitle">
                {stepsData[currentStepName].subtitle}
              </div>
            </div>
            <CurrentStep />
          </StepWrapper>
          <Buttons isMobile={isMobile} />
        </>
      ) : (
        <>
          <StepWrapper isMobile={isMobile}>
            <SideBar isMobile={isMobile} currentStepIndex={currentStepIndx} />
            <DesktopWrapper>
              <div className="uppersection">
                <div className="titleWrapper">
                  <div className="StepTitle">
                    {stepsData[currentStepName].title}
                  </div>
                  <div className="StepSubTitle">
                    {stepsData[currentStepName].subtitle}
                  </div>
                </div>
                <CurrentStep />
              </div>
              <Buttons isMobile={isMobile} />
            </DesktopWrapper>
          </StepWrapper>
        </>
      )}
    </>
  );
};
export default Form;
