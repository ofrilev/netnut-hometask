import { stepsFetchedData } from "@/app/fetch/types";
import { initialStepState, StepState } from "../types";

export const getFirstState = (fetchedStepsData: stepsFetchedData): StepState => {
  try {
    const selections = localStorage.getItem("user-selections");
    if (selections) {
      const parsedSelections = JSON.parse(selections);
      return {
        ...initialStepState,  // Spread the default values
        ...parsedSelections,  // Override with the selections from localStorage
      };
    }
    initialStepState.AddOns.fields = fetchedStepsData.addons.map(addon => {return{id: addon.add_on_id, selected: false}})
    return initialStepState;
  } catch (err) {
    console.error(err)
    return initialStepState;
  }
};
