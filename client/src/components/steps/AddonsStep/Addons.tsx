import { useStepsContext } from "@/components/stepContext/stepsContext";
import { Duration, StepName } from "@/components/stepContext/types";
import { ItemsWrapper, StyledItem } from "./StyledComponents";
import Checkbox from "./CheckBox";
import { ErrorField } from "../StyledComponents";

export const Addons = () => {
  const { stepState, changeStepState, stepsData } = useStepsContext();
  const { addons } = stepsData.AddOns;
  const selectedDuration = stepState.SelectPlan.fields.duration;
  const { fields, errorMsg } = stepState.AddOns;

  const handleClick = (addonId: number) => {
    const updatedFields = fields.map((field) =>
      addonId === field.id ? { ...field, selected: !field.selected } : field
    );
    changeStepState({
      [StepName.AddOns]: {
        ...stepState[StepName.AddOns],
        fields: updatedFields,
      },
    });
  };

  return (
    <>
      <ItemsWrapper>
        {addons.map((item, index) => (
          <StyledItem
            key={item.title}
            ischose={fields[index].selected}
            onClick={() => handleClick(item.add_on_id)}
          >
            <div className="leftSection">
              <Checkbox checked={fields[index].selected} />
              <div className="title-subtitle">
                <div className="addonName">{item.title}</div>
                <div className="addonData">{item.description}</div>
              </div>
            </div>
            <div className="addonPrice">
              +$
              {selectedDuration == Duration.Monthly
                ? item.monthly_price + `/mo`
                : item.yearly_price + `/yr`}
            </div>
          </StyledItem>
        ))}
        <ErrorField is_error={errorMsg != ""}>{errorMsg}</ErrorField>
      </ItemsWrapper>
    </>
  );
};
