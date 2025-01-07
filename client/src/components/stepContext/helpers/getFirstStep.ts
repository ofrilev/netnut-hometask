import { StepState } from "../types";

export const getFirstStep = (initialStepState: StepState) => {
  if(Object.values(initialStepState.YourInfo.fields).some(val => val == "")){
    return 0
  }
  if(Object.values(initialStepState.AddOns.fields).every(val => val.selected == false)){
    return 1
  }else{
    return 2
  }
}