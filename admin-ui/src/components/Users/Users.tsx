import { useReducer } from "react";

import Empty from "../../assets/empty.svg";

import Loader from "../Loader/Loader";
import UsersTable from "./UsersTable/UsersTable";
import Pagination from "../Pagination/Pagination";

import { useGetData } from "../../server/useGetData";

import { userState, userReducer } from "../../reducers/userReducer";

import { User } from "./Users.types";

import "./Users.css";

const Users = () => {
  const [state, dispatch] = useReducer(userReducer, userState);

  const { users, searchText, currentPage, loading, error } = state;

  const usersPerPage = 10;
  const indexOfLastRecord = currentPage * usersPerPage;
  const indexOfFirstRecord = indexOfLastRecord - usersPerPage;

  useGetData(dispatch);

  const changePage = (pageNumber: number) =>
    dispatch({
      type: "ASSIGN_DATA",
      payload: { name: "currentPage", data: pageNumber },
    });

  const filterUsers = (allUsers: User[], text: string) => {
    const searchedText = text.toLowerCase();
    return allUsers.filter(
      ({ name, email, role }) =>
        name.toLowerCase().includes(searchedText) ||
        email.toLowerCase().includes(searchedText) ||
        role.toLowerCase().includes(searchedText)
    );
  };

  const filteredUsers = filterUsers(users, searchText);

  return (
    <div className="users">
      <input
        type="text"
        value={searchText}
        className="form-control search-input"
        placeholder="Search by name, email or role..."
        onChange={(e) =>
          dispatch({
            type: "ASSIGN_DATA",
            payload: { name: "searchText", data: e.target.value },
          })
        }
      />

      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}

      <UsersTable
        users={filteredUsers.slice(indexOfFirstRecord, indexOfLastRecord)}
        dispatch={dispatch}
      />

      {!(loading || error) && filteredUsers.length === 0 && (
        <div>
          <h3>
            No Users found{" "}
            <em>
              <q>{searchText}</q>
            </em>
          </h3>
          <img src={Empty} alt="empty list" className="empty-list" />
        </div>
      )}

      <Pagination
        totalUsers={filteredUsers.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        paginate={changePage}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Users;
