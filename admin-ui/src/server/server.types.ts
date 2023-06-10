import { AxiosResponse } from "axios";
import { User } from "../components/Users/Users.types";

export type RequestType = {
  requestType: string;
  url: string;
};

export type ResponseType =
  | {
      response: AxiosResponse<User[]>;
      statusCode: number;
    }
  | {
      response: undefined;
      statusCode: number;
    };
