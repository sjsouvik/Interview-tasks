import { isAllSelected } from "../components/Users/UsersTable/UsersTable";

export const userState = {
  users: [],
  searchText: "",
  currentPage: 1,
  loading: false,
  error: false,
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "ASSIGN_DATA":
      return { ...state, [payload.name]: payload.data };

    // case "SELECT_OR_UNSELECT_ROW":
    //   return {
    //     ...state,
    //     users: state.users.map((user) =>
    //       user.id === payload.userId
    //         ? { ...user, selected: user.selected ? false : true }
    //         : user
    //     ),
    //   };

    case "SELECT_OR_UNSELECT_ALL_ROWS":
      return {
        ...state,
        users: state.users.map((user) =>
          payload.users.find((payloadUser) => payloadUser.id === user.id)
            ? {
                ...user,
                selected:
                  user.selected && isAllSelected(payload.users) ? false : true,
              }
            : user
        ),
      };

    case "READY_TO_EDIT":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.userId
            ? { ...user, readyToEdit: user.readyToEdit ? false : true }
            : user
        ),
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.userId
            ? {
                ...user,
                name: payload.name,
                email: payload.email,
                role: payload.role,
              }
            : user
        ),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload.userId),
      };

    case "DELETE_USERS":
      return {
        ...state,
        users: state.users.filter((user) => !user.selected),
      };

    default:
      break;
  }
};
