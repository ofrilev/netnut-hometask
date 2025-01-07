import { useStepsContext } from "@/components/stepContext/stepsContext";
import { StepName, Duration } from "@/components/stepContext/types"; // Use Duration enum
import arcadeIcon from "@/assets/svgs/icon-arcade.svg";
import advancedIcon from "@/assets/svgs/icon-advanced.svg";
import proIcon from "@/assets/svgs/icon-pro.svg";
import {
  ItemsWrapper,
  StyledItem,
  StyledToggle,
  ToggleBarWrapper,
  ToggleCircle,
} from "./StyledComponents";
import Image from "next/image";

export const Plan = () => {
  const { stepState, changeStepState, stepsData } = useStepsContext();
  const { plans, duration } = stepsData.SelectPlan;
  const fields = stepState.SelectPlan.fields;
  const { plan: selectedPlan, duration: selectedDuration } = fields;

  const isMonthly = selectedDuration === Duration.Monthly;
  const showPlans = isMonthly ? plans.slice(0, 3) : plans.slice(3, 6);

  // Handle plan and duration changes
  const handleChange = (
    plan: { value: number },
    duration?: { value: Duration }
  ) => {
    const updatedFields = {
      plan: plan.value,
      ...(duration ? { duration: duration.value } : {}),
    };

    changeStepState({
      [StepName.SelectPlan]: {
        ...stepState[StepName.SelectPlan],
        fields: {
          ...fields,
          ...updatedFields,
        },
      },
    });
  };

  const plansWithIcons = showPlans.map((plan, index) => {
    if (index === 0 || index == 3) {
      return { ...plan, icon: arcadeIcon };
    } else if (index === 1 || index == 4) {
      return { ...plan, icon: advancedIcon };
    } else {
      return { ...plan, icon: proIcon };
    }
  });

  return (
    <>
      <ItemsWrapper>
        {plansWithIcons.map((plan) => (
          <StyledItem
            key={plan.name}
            ischose={selectedPlan === plan.plan_id}
            onClick={() => handleChange({ value: plan.plan_id })}
          >
            <Image
              className="icon"
              src={plan.icon}
              alt={`${plan.plan_id} Icon`}
              width={"40"}
              height={"40"}
            />
            <div className="plan-details">
              <div className="planName">{plan.name}</div>
              <div className="planPrice">
                ${Number(plan.cost)}/{isMonthly ? "mo" : "yr"}
              </div>
              <div className="planData">{plan.details}</div>
            </div>
          </StyledItem>
        ))}
      </ItemsWrapper>

      <StyledToggle>
        <div className={`duration${isMonthly ? "-selected" : ""}`}>
          {duration[0]}
        </div>
        <ToggleBarWrapper
          istoggled={isMonthly}
          onClick={() => {
            handleChange(
              {
                value: isMonthly ? selectedPlan + 3 : selectedPlan - 3,
              },
              {
                value: isMonthly ? Duration.Yearly : Duration.Monthly, // Toggle duration between monthly and yearly
              }
            );
          }}
        >
          <ToggleCircle istoggled={isMonthly} />
        </ToggleBarWrapper>
        <div className={`duration${!isMonthly ? "-selected" : ""}`}>
          {duration[1]}
        </div>
      </StyledToggle>
    </>
  );
};
