import { User } from "../components/Users/Users.types";

export type InitialState = {
  users: User[];
  searchText: string;
  currentPage: number;
  loading: boolean;
  error: boolean;
};

export type Action =
  | {
      type: "ASSIGN_DATA";
      payload: {
        name: string;
        data: User[] | number | string | boolean | undefined;
      };
    }
  | { type: "SELECT_OR_UNSELECT_ALL_ROWS"; payload: { users: User[] } }
  | { type: "READY_TO_EDIT"; payload: { userId: number } }
  | {
      type: "UPDATE_USER";
      payload: { userId: number; name: string; email: string; role: string };
    }
  | { type: "DELETE_USER"; payload: { userId: number } }
  | { type: "DELETE_USERS" };
