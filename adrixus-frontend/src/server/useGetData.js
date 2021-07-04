import { useEffect } from "react";
import serverRequests from "./serverRequests";

import { useAuth } from "../Providers/AuthProvider";

export const useGetData = (dispatch, endpoint) => {
  const { authToken } = useAuth();

  useEffect(
    () =>
      (async () => {
        dispatch({
          type: "ASSIGN_DATA",
          payload: { name: "loading", data: true },
        });

        const { response, error } = await serverRequests({
          requestType: "get",
          // url: `${process.env.REACT_APP_BACKEND}/${endpoint}`,
          url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
          // token: { headers: { authorization: `Bearer ${authToken}` } },
        });

        if (!error) {
          dispatch({
            type: "ASSIGN_DATA",
            payload: { name: "users", data: response.data },
          });

          dispatch({
            type: "ASSIGN_DATA",
            payload: { name: "error", data: false },
          });
        } else if (error) {
          dispatch({
            type: "ASSIGN_DATA",
            payload: { name: "error", data: true },
          });
        }

        dispatch({
          type: "ASSIGN_DATA",
          payload: { name: "loading", data: false },
        });
      })(),
    []
  );
};
