export const userState = {
  users: [],
  projects: [],
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "ASSIGN_DATA":
      return { ...state, [payload.name]: payload.data };

    case "ADD_EMPLOYEE":
      return { ...state, users: [...state.users, payload] };

    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, payload] };

    default:
      break;
  }
};
