export const userState = {
  users: [],
  projects: [],
  // users: [
  //   {
  //     id: 1,
  //     name: "Souvik",
  //     email: "souvik@gmail.com",
  //     phone: "94859980089",
  //     project: "qed1"
  //   },
  //   {
  //     id: 2,
  //     name: "Aakash",
  //     email: "aakash@gmail.com",
  //     phone: "94859980090",
  //     project: "qed2"
  //   }
  // ],
  // projects: [
  //   { title: "QED1", projetKey: "q123" },
  //   { title: "QED2", projetKey: "q123" }
  // ]
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
