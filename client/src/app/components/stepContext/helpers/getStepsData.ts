import { getData } from "@/app/fetch/fetch";

import { stepsFetchedData } from "@/app/fetch/types";

 export const fetchStepsData =  async ():Promise<stepsFetchedData>  => {
      return await getData();
  };