import axios from "axios";

import { RequestType, ResponseType } from "./server.types";
import { User } from "../components/Users/Users.types";

const serverRequests = async ({
  requestType,
  url,
}: RequestType): Promise<ResponseType> => {
  switch (requestType) {
    case "get":
      try {
        const response = await axios.get<User[]>(url);
        return response.status === 200
          ? { response, statusCode: response.status }
          : { response, statusCode: 400 };
      } catch (error) {
        return { response: undefined, statusCode: error.response.status };
      }

    default:
      return { response: undefined, statusCode: 400 };
  }
};

export default serverRequests;
