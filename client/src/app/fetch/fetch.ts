import { serverDomain } from "./configs";
import { stepsFetchedData, useSelection } from "./types";

export enum Request_status {
  succeed,
  failed,
}
const fetchData = (url: string, method?: string, data?: unknown) => {
  return fetch(`${serverDomain}${url}`, {
    method: method ?? "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const getData = async (): Promise<stepsFetchedData> => {
    const [addonsRes, plansRes] = await Promise.all([
        fetchData("addons"),
        fetchData("plans"),
    ]);
    return {
      addons: await addonsRes.json(),
      plans: await plansRes.json(),
    } as stepsFetchedData;
  };
export const postReq = async (
    url: string,
    data: useSelection
  ): Promise<{ status: Request_status; response?: Request_status }> => {
    try {
      const response = await fetchData(url, "POST", data);
  
      if (response.ok) {
        return {
          status: Request_status.succeed,
        };
      }
  
      return {
        status: Request_status.failed,
      };
    } catch (error) {
      console.error(error);
      return {
        status: Request_status.failed,
        response: undefined,
      };
    }
  };
  