import { useState } from "react";
import { useStepsContext } from "@/components/stepContext/stepsContext";
import { StepState, StepName } from "@/components/stepContext/types";
import {
  ErrorField,
  FieldsWrapper,
  StyledInputWrapper,
} from "../StyledComponents";

export const Info: React.FC = () => {
  const { stepState, changeStepState, stepsData } = useStepsContext();
  const { fieldNames, placeHolders } = stepsData.YourInfo;
  const { fields, errorMsgs } = stepState[
    StepName.YourInfo
  ] as StepState["YourInfo"];
  const [localFields, setLocalFields] = useState(fields);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof StepState["YourInfo"]["fields"]
  ) => {
    const value = e.target.value;
    setLocalFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof StepState["YourInfo"]["fields"]) => {
    changeStepState({
      [StepName.YourInfo]: {
        ...stepState[StepName.YourInfo],
        fields: { ...fields, [field]: localFields[field] },
      },
    });
  };

  return (
    <FieldsWrapper>
      {["name", "email", "phone"].map((field, index) => {
        const isError = errorMsgs[field as keyof typeof errorMsgs] !== "";
        return (
          <StyledInputWrapper key={field} is_error={isError}>
            <div>
              <div>{fieldNames[index]}</div>
              <ErrorField is_error={isError}>
                {errorMsgs[field as keyof typeof errorMsgs]}
              </ErrorField>
            </div>
            <input
              placeholder={placeHolders[index]}
              value={
                localFields[field as keyof StepState["YourInfo"]["fields"]]
              }
              type={field === "phone" ? "tel" : "text"}
              onChange={(e) =>
                handleFieldChange(
                  e,
                  field as keyof StepState["YourInfo"]["fields"]
                )
              }
              onBlur={() => {
                console.log("blurr");
                return handleBlur(
                  field as keyof StepState["YourInfo"]["fields"]
                );
              }}
            />
          </StyledInputWrapper>
        );
      })}
    </FieldsWrapper>
  );
};
