import { userState, userReducer } from "./userReducer";
import { Action } from "./userReducer.types";

describe("testing initializing data feature", () => {
  test("should initialize data when ASSIGN_DATA action is dispatched", () => {
    let action: Action = {
      type: "ASSIGN_DATA",
      payload: {
        name: "users",
        data: [
          {
            id: 1,
            name: "Arvind Kumar",
            email: "arvind@geektrust.com",
            role: "admin",
          },
          {
            id: 2,
            name: "Chetan Kumar",
            email: "chetan@gmail.com",
            role: "member",
          },
          {
            id: 3,
            name: "Aishwariya Naik",
            email: "aishwariya@gmail.com",
            role: "member",
          },
        ],
      },
    };

    let updatedState = userReducer(userState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
        {
          id: 3,
          name: "Aishwariya Naik",
          email: "aishwariya@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });
  });
});

describe("testing select or unselect rows feature", () => {
  test("should select or unselect if selected before when SELECT_OR_UNSELECT_ALL_ROWS action is dispatched", () => {
    const userState = {
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
        {
          id: 3,
          name: "Aishwariya Naik",
          email: "aishwariya@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    };

    let action: Action = {
      type: "SELECT_OR_UNSELECT_ALL_ROWS",
      payload: {
        users: [
          {
            id: 2,
            name: "Chetan Kumar",
            email: "chetan@gmail.com",
            role: "member",
          },
          {
            id: 3,
            name: "Aishwariya Naik",
            email: "aishwariya@gmail.com",
            role: "member",
          },
        ],
      },
    };

    const updatedState = userReducer(userState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
          selected: true,
        },
        {
          id: 3,
          name: "Aishwariya Naik",
          email: "aishwariya@gmail.com",
          role: "member",
          selected: true,
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });
  });
});

describe("testing ready to edit feature", () => {
  test("should make one record enable or disable to edit when READY_TO_EDIT action is dispatched", () => {
    const userState = {
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    };

    let action: Action = {
      type: "READY_TO_EDIT",
      payload: { userId: 1 },
    };

    let updatedState = userReducer(userState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
          readyToEdit: true,
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });

    action = {
      type: "READY_TO_EDIT",
      payload: { userId: 1 },
    };

    updatedState = userReducer(updatedState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
          readyToEdit: false,
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });
  });
});

describe("testing update user feature", () => {
  test("should update the user's details when UPDATE_USER action is dispatched", () => {
    const userState = {
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    };

    let action: Action = {
      type: "UPDATE_USER",
      payload: {
        userId: 2,
        name: "Mr. Chetan Kumar",
        email: "chetan@outlook.com",
        role: "member",
      },
    };

    const updatedState = userReducer(userState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Mr. Chetan Kumar",
          email: "chetan@outlook.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });
  });
});

describe("testing delete user feature", () => {
  test("should delete one user when DELETE_USER action is dispatched", () => {
    const userState = {
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    };

    let action: Action = {
      type: "DELETE_USER",
      payload: {
        userId: 2,
      },
    };

    const updatedState = userReducer(userState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });
  });
});

describe("testing delete selected users feature", () => {
  test("should delete selected users when DELETE_USERS action is dispatched", () => {
    const userState = {
      users: [
        {
          id: 1,
          name: "Arvind Kumar",
          email: "arvind@geektrust.com",
          role: "admin",
          selected: true,
        },
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
        {
          id: 3,
          name: "Aishwariya Naik",
          email: "aishwariya@gmail.com",
          role: "member",
          selected: true,
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    };

    let action: Action = {
      type: "DELETE_USERS",
    };

    const updatedState = userReducer(userState, action);

    expect(updatedState).toEqual({
      users: [
        {
          id: 2,
          name: "Chetan Kumar",
          email: "chetan@gmail.com",
          role: "member",
        },
      ],
      searchText: "",
      currentPage: 1,
      loading: false,
      error: false,
    });
  });
});
