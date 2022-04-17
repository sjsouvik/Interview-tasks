import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import axios from "axios";
import App from "../App";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const users = [
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
    name: "Aishwarya Naik",
    email: "aishwarya@geektrust.com",
    role: "admin",
  },
  {
    id: 4,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    role: "member",
  },
  {
    id: 5,
    name: "Sachin Kumar",
    email: "sachin@geektrust.com",
    role: "admin",
  },
  {
    id: 6,
    name: "Swapnil Kumar",
    email: "swapnil@gmail.com",
    role: "member",
  },
  {
    id: 7,
    name: "Krishna Naik",
    email: "krishna@geektrust.com",
    role: "admin",
  },
  {
    id: 8,
    name: "Tanay Kumar",
    email: "tanay@gmail.com",
    role: "member",
  },
  {
    id: 9,
    name: "Jaynil Kumar",
    email: "jaynil@geektrust.com",
    role: "admin",
  },
  {
    id: 10,
    name: "Naval Kumar",
    email: "naval@gmail.com",
    role: "member",
  },
  {
    id: 11,
    name: "Tushar Naik",
    email: "tushar@geektrust.com",
    role: "admin",
  },
  {
    id: 12,
    name: "Alok Kumar",
    email: "alok@gmail.com",
    role: "member",
  },
];

describe("Integration test for users component", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: users,
      status: 200,
    });
  });

  test("should render all users with pagination", async () => {
    render(<App />);

    let allUsersNames = await waitFor(() => screen.getAllByTestId("userName"));
    expect(allUsersNames).toBeDefined();

    const pages = screen.getAllByTestId("pages");

    expect(allUsersNames.length).toBe(10);
    expect(pages.length).toBe(2);

    expect(allUsersNames[0]).toHaveDisplayValue(users[0].name);
    expect(allUsersNames[1]).toHaveDisplayValue(users[1].name);
  });

  test("should edit user details, save updated details and delete user details from table on click of edit, save and delete button respectively", async () => {
    render(<App />);

    let allUsersNames = await waitFor(() => screen.getAllByTestId("userName"));
    expect(allUsersNames).toBeDefined();

    const editBtns = screen.getAllByTestId("editBtn");
    fireEvent.click(editBtns[0]);

    const saveBtns = screen.getAllByTestId("saveBtn");
    fireEvent.change(allUsersNames[0], { target: { value: "Abhijit" } });
    fireEvent.click(saveBtns[0]);
    allUsersNames = screen.getAllByTestId("userName");

    expect(allUsersNames[0]).toHaveDisplayValue("Abhijit");

    const pages = screen.getAllByTestId("pages");
    fireEvent.click(pages[1]);
    expect(screen.getAllByTestId("userName").length).toBe(2);

    const deleteUserBtns = screen.getAllByTestId("deleteUser");
    fireEvent.click(deleteUserBtns[1]);
    expect(screen.getAllByTestId("userName").length).toBe(1);
  });

  test("should go to next, previous, first and last page on click of go to next, previous, first and last button", async () => {
    render(<App />);

    const allUsersNames = await waitFor(() =>
      screen.getAllByTestId("userName")
    );
    expect(allUsersNames).toBeDefined();

    const pages = screen.getAllByTestId("pages");
    const goToPrevPageBtn = screen.getByTestId("goToPrevPageBtn");
    const goToFirstPageBtn = screen.getByTestId("goToFirstPageBtn");
    const goToNextPageBtn = screen.getByTestId("goToNextPageBtn");
    const goToLastPageBtn = screen.getByTestId("goToLastPageBtn");

    expect(pages.length).toBe(2);
    expect(screen.getAllByTestId("userName").length).toBe(10);

    fireEvent.click(pages[1]);
    expect(pages[1]).toHaveClass("active");
    expect(screen.getAllByTestId("userName").length).toBe(2);

    fireEvent.click(goToPrevPageBtn);
    expect(pages[0]).toHaveClass("active");

    fireEvent.click(goToNextPageBtn);
    expect(pages[1]).toHaveClass("active");

    fireEvent.click(goToFirstPageBtn);
    expect(pages[0]).toHaveClass("active");

    fireEvent.click(goToLastPageBtn);
    expect(pages[1]).toHaveClass("active");
  });

  test("should delete selected users from the table", async () => {
    render(<App />);

    const allUsersNames = await waitFor(() =>
      screen.getAllByTestId("userName")
    );
    expect(allUsersNames).toBeDefined();

    const deleteSelectedBtn = screen.getByTestId("deleteSelectedBtn");
    const pages = screen.getAllByTestId("pages");

    fireEvent.click(pages[1]);
    expect(screen.getAllByTestId("userName").length).toBe(2);

    const selectUserCheckBoxes = screen.getAllByTestId("selectUserCheckBox");

    fireEvent.click(selectUserCheckBoxes[0]);
    fireEvent.click(selectUserCheckBoxes[1]);
    fireEvent.click(deleteSelectedBtn);

    expect(screen.getAllByTestId("pages").length).toBe(1);
  });
});
