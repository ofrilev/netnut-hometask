import { useStepsContext } from "@/app/components/stepContext/stepsContext";
import { Item, SelectionsWrapper } from "./StyledComponents";
import { Duration } from "../../stepContext/types";

export const Summary = () => {
  const { stepState, goToPlanStep, stepsData } = useStepsContext();

  const { plan: selectedPlan, duration: selectedDuration } =
    stepState.SelectPlan.fields;

  const selectedPlanDetails = stepsData.SelectPlan.plans.find(
    (plan) => plan.plan_id === selectedPlan
  );

  const selectedPlanTitle = selectedPlanDetails?.name || "Unknown Plan";
  const selectedPlanPrice = selectedPlanDetails?.cost || 0;

  const selectedAddons = stepState.AddOns.fields
    .filter((addon) => addon.selected)
    .map((addon) => {
      const addonDetails = stepsData.AddOns.addons.find(
        (data) => data.add_on_id === addon.id
      );
      return {
        title: addonDetails?.title || "Unknown Add-on",
        cost:
          selectedDuration === Duration.Monthly
            ? addonDetails?.monthly_price || 0
            : addonDetails?.yearly_price || 0,
      };
    });

  const totalCost =
    Number(selectedPlanPrice) +
    selectedAddons.reduce((acc, addon) => acc + Number(addon.cost), 0);

  return (
    <SelectionsWrapper>
      <div className="grey">
        <Item>
          <div className="plan">
            {`${selectedPlanTitle} (${selectedDuration})`}
            <div className="-change" onClick={goToPlanStep}>
              Change
            </div>
          </div>
          <div>{`$${Number(selectedPlanPrice)}`}</div>
        </Item>
        <div className="border" style={{ borderTop: "1px solid #ccc", margin: "10px 0" }} />
        {selectedAddons.map((addon, index) => (
          <Item key={index}>
            <div>{addon.title}</div>
            <div>{`$${Number(addon.cost)}`}</div>
          </Item>
        ))}
      </div>
      <Item>
        <div>{`Total (per ${selectedDuration})`}</div>
        <div className="total-number">
          {`$${totalCost} / ${
            selectedDuration === Duration.Monthly ? "mo" : "yr"
          }`}
        </div>
      </Item>
    </SelectionsWrapper>
  );
};
