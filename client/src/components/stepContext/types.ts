import { stepsFetchedData } from "@/api/types";
import { Addons } from "../steps/AddonsStep/Addons";
import { Info } from "../steps/InfoStep/Info";
import { Plan } from "../steps/planStep/Plan";
import { Summary } from "../steps/SummaryStep/Summary";
import { ThankYou } from "../steps/ThankYouStep/ThankYou";

export const ErrorMsg = {
  emptyValue: "This field is required",
  email: "The email address is not formatted correctly",
  noSelection: "no selection has been made",
};
export enum Duration {
  Monthly="Monthly", 
  Yearly="Yearly"
}

export interface StepState {
  YourInfo: {
    fields: { name: string; phone: string; email: string };
    errorMsgs: { name: string; email: string; phone: string };
  };
  SelectPlan: { fields: { plan: number; duration: Duration } };
  AddOns: {
    fields: {
      id: number,
      selected: boolean
    }[];
    errorMsg: string;
  };
}

export const initialStepState: StepState = {
  YourInfo: { fields: { name: "", phone: "", email: "" }, errorMsgs: { name: "", email: "", phone: "" } },
  SelectPlan: { fields: { plan: 1, duration: Duration.Monthly } },
  AddOns: { fields: [], errorMsg: "" },
};

export enum StepName {
  YourInfo = "YourInfo",
  SelectPlan = "SelectPlan",
  AddOns = "AddOns",
  Summary = "Summary",
  ThankYou = "ThankYou",
}

export interface StepDataBase {
  title: string;
  subtitle: string;
}
export interface StepDataYourInfo extends StepDataBase {
  fieldNames: string[];
  placeHolders: string[];
}

export interface StepDataSelectPlan extends StepDataBase {
  plans: stepsFetchedData["plans"];
  duration: Duration[];
}

export interface StepDataAddOns extends StepDataBase {
  addons: stepsFetchedData["addons"];
}

export type StepData = Record<StepName.YourInfo | StepName.SelectPlan | StepName.AddOns | StepName.Summary | StepName.ThankYou, StepDataBase> &
Record<StepName.YourInfo,StepDataYourInfo>&  
Record<StepName.SelectPlan, StepDataSelectPlan> &
  Record<StepName.AddOns, StepDataAddOns>;

export const initialStepsData: StepData = {
  [StepName.YourInfo]: {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number",
    fieldNames: ["Name", "Email Address", "Phone Number"],
    placeHolders: ["e.g. Stephen King", "e.g. stephenking@lorem.com", "e.g. +1 234 567 890"],
  },
  [StepName.SelectPlan]: {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing",
    plans: [] as stepsFetchedData["plans"],
    duration: [Duration.Monthly,Duration.Yearly] ,
  },
  [StepName.AddOns]: {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    addons: [] as stepsFetchedData["addons"],
  },
  [StepName.Summary]: {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming",
  },
  [StepName.ThankYou]: {
    title: "",
    subtitle: "",
  },
};

export interface Step {
  name: StepName;
  component: React.FC;
  index: number;
}

export const steps: Step[] = [
  { name: StepName.YourInfo, component: Info, index: 0 },
  { name: StepName.SelectPlan, component: Plan, index: 1 },
  { name: StepName.AddOns, component: Addons, index: 2 },
  { name: StepName.Summary, component: Summary, index: 3 },
  { name: StepName.ThankYou, component: ThankYou, index: 4 },
];
