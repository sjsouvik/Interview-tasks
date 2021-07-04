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

    default:
      break;
  }
};
