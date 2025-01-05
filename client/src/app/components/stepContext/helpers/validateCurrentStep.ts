import { StepState, StepName,ErrorMsg  } from "../types";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateCurrentStep = (
  props:{currentStepName: StepName,
  stepState: StepState,
  changeStepState: (data: Partial<StepState>) => void}
): boolean => {
    const {stepState, changeStepState, currentStepName} = props
  let isValid = true;

  switch (currentStepName) {
    case StepName.YourInfo: {
      const { fields, errorMsgs } = stepState.YourInfo;
      const updatedErrorMsgs = { ...errorMsgs };

      // Validate name
      if (fields.name.trim() === "") {
        updatedErrorMsgs.name = ErrorMsg.emptyValue
        isValid = false;
      } else {
        updatedErrorMsgs.name = "";
      }

      // Validate email
      if (fields.email.trim() === "") {
        updatedErrorMsgs.email = ErrorMsg.emptyValue;
        isValid = false;
      } else if (!emailRegex.test(fields.email)) {
        updatedErrorMsgs.email = ErrorMsg.email;
        isValid = false;
      } else {
        updatedErrorMsgs.email = "";
      }

      // Validate phone
      if (fields.phone.trim() === "") {
        updatedErrorMsgs.phone = ErrorMsg.emptyValue;
        isValid = false;
      } else {
        updatedErrorMsgs.phone = "";
      }
      console.log("changing state")
      changeStepState({
        YourInfo: {
          ...stepState.YourInfo,
          errorMsgs: updatedErrorMsgs, 
        },
      });
      break;
    }
    case StepName.AddOns: {
      const { fields } = stepState.AddOns;
      const selection = Object.values(fields).find(field => field.selected==true)
      if(!selection){
        changeStepState({
          AddOns: {
            ...stepState.AddOns,
            errorMsg: ErrorMsg.noSelection, 
          },
        }); 
        isValid = false;
      }else{
        changeStepState({
          AddOns: {
            ...stepState.AddOns,
            errorMsg: "", 
      },});
      break;
    }
  }
    default:
      break;
  }

  return isValid;
};
