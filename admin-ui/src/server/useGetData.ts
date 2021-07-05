import { useEffect, Dispatch } from "react";
import serverRequests from "./serverRequests";

import { Action } from "../reducers/userReducer.types";

export const useGetData = (dispatch: Dispatch<Action>, endpoint: string) => {
  useEffect(() => {
    (async () => {
      dispatch({
        type: "ASSIGN_DATA",
        payload: { name: "loading", data: true },
      });

      const serverResponse = await serverRequests({
        requestType: "get",
        url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
      });

      const users = serverResponse.response && serverResponse.response.data;

      if (serverResponse.statusCode === 200) {
        dispatch({
          type: "ASSIGN_DATA",
          payload: { name: "users", data: users },
        });

        dispatch({
          type: "ASSIGN_DATA",
          payload: { name: "error", data: false },
        });
      } else if (serverResponse.statusCode !== 200) {
        dispatch({
          type: "ASSIGN_DATA",
          payload: { name: "error", data: true },
        });
      }

      dispatch({
        type: "ASSIGN_DATA",
        payload: { name: "loading", data: false },
      });
    })();
  }, []);
};
