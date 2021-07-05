import { InitialState, Action } from "./userReducer.types";

import { isAllSelected } from "../components/Users/UsersTable/UsersTable";

export const userState: InitialState = {
  users: [],
  searchText: "",
  currentPage: 1,
  loading: false,
  error: false,
};

export const userReducer = (
  state: InitialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case "ASSIGN_DATA":
      return { ...state, [action.payload.name]: action.payload.data };

    case "SELECT_OR_UNSELECT_ALL_ROWS":
      return {
        ...state,
        users: state.users.map((user) =>
          action.payload.users.find((payloadUser) => payloadUser.id === user.id)
            ? {
                ...user,
                selected:
                  user.selected && isAllSelected(action.payload.users)
                    ? false
                    : true,
              }
            : user
        ),
      };

    case "READY_TO_EDIT":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? { ...user, readyToEdit: user.readyToEdit ? false : true }
            : user
        ),
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
              }
            : user
        ),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.userId),
      };

    case "DELETE_USERS":
      return {
        ...state,
        users: state.users.filter((user) => !user.selected),
      };

    default:
      return { ...state };
  }
};
