"use client";
import { useWindowSize } from "usehooks-ts";
import { SideBar } from "./components/sideBar/sideBar";
import { useStepsContext } from "./components/stepContext/stepsContext";
import { DesktopWrapper, StepWrapper } from "./components/stepWrapper";
import { useEffect, useState } from "react";
import LoaderGif from "./components/LoaderGif";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();
  const isMobile = width < 476;
  if (isMobile) {
    console.log(`mobile now`);
  }
  const {
    CurrentStep,
    Buttons,
    currentStepName,
    currentStepIndx,
    stepsData,
    firstFetch,
  } = useStepsContext();

  const renderMobileView = () => (
    <>
      <SideBar isMobile={isMobile} currentStepIndex={currentStepIndx} />
      <StepWrapper isMobile={isMobile}>
        <div className="titleWrapper">
          <div className="StepTitle">{stepsData[currentStepName].title}</div>
          <div className="StepSubTitle">
            {stepsData[currentStepName].subtitle}
          </div>
        </div>
        <CurrentStep />
      </StepWrapper>
      <Buttons isMobile={isMobile} />
    </>
  );

  const renderDesktopView = () => (
    <StepWrapper isMobile={isMobile}>
      <SideBar isMobile={isMobile} currentStepIndex={currentStepIndx} />
      <DesktopWrapper>
        <div className="uppersection">
          <div className="titleWrapper">
            <div className="StepTitle">{stepsData[currentStepName].title}</div>
            <div className="StepSubTitle">
              {stepsData[currentStepName].subtitle}
            </div>
          </div>
          <CurrentStep />
        </div>
        <Buttons isMobile={isMobile} />
      </DesktopWrapper>
    </StepWrapper>
  );
  useEffect(() => {
    const fetch = async () => {
      await firstFetch();
    };
    fetch().then(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && <LoaderGif />}
      {isMobile ? renderMobileView() : renderDesktopView()}
    </>
  );
}
