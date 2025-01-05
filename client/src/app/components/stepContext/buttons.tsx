import React from "react";
import { NavBarButton, ButtonsWrapper } from "./StyledComponents"; // Assuming styled components are defined elsewhere

interface ButtonsProps {
  isMobile: boolean;
  goToPrevStep: () => void;
  handleNextClick: () => void;
  isLastStep: boolean;
  isSummaryStep: boolean;
  isFirstStep: boolean;
}

export const Buttons: React.FC<ButtonsProps> = ({
  isMobile,
  handleNextClick,
  goToPrevStep,
  isLastStep,
  isSummaryStep,
  isFirstStep,
}) => {
  const NextButton = () => (
    <NavBarButton
      isSummaryStep={isSummaryStep}
      disabled={isLastStep}
      className="next"
      onClick={handleNextClick}
    >
      {isSummaryStep ? `Confirm` : `Next Step`}
    </NavBarButton>
  );

  const PrevButton = () => (
    <NavBarButton
      className="back"
      disabled={isFirstStep || isLastStep}
      onClick={goToPrevStep}
    >
      Go Back
    </NavBarButton>
  );

  return (
    <ButtonsWrapper isMobile={isMobile}>
      <PrevButton />
      <NextButton />
    </ButtonsWrapper>
  );
};
