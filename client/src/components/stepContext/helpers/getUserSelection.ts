import { useSelection } from "@/api/types";
import { StepState } from "../types";

export const getUserSelection = (stepState:StepState ): useSelection => {
  const {email, name,phone } = stepState.YourInfo.fields
  const {plan} = stepState.SelectPlan.fields
  const addonIds = stepState.AddOns.fields
  .filter((item) => item.selected)
  .map((item) => item.id)
     const dataToSend: useSelection = {
        Email: email,
        Name: name,
        PhoneNumber: phone,
        PlanID: plan,
        AddOnIDs: addonIds
     }
    return dataToSend
}