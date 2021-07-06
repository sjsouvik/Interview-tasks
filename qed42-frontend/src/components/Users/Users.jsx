import { useEffect, useReducer, useState } from "react";
import UsersTable from "./UsersTable/UsersTable";

import { userState, userReducer } from "../../reducers/userReducer";

import DataForm from "../DataForm/DataForm";

import "./Users.css";

const Users = () => {
  const [state, dispatch] = useReducer(userReducer, userState);
  const [showModal, setShowModal] = useState(false);
  const [entity, setEntity] = useState("");

  useEffect(() => {
    const { users, projects } = JSON.parse(localStorage?.getItem("data")) || {
      users: [],
      projects: [],
    };

    dispatch({ type: "ASSIGN_DATA", payload: { name: "users", data: users } });
    dispatch({
      type: "ASSIGN_DATA",
      payload: { name: "projects", data: projects },
    });
  }, []);

  const { users, projects } = state;

  return (
    <section className="users">
      <div className="btns">
        <button
          className="btn btn-primary"
          onClick={() => {
            setEntity("project");
            setShowModal(true);
          }}
        >
          Add Project
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setEntity("employee");
            setShowModal(true);
          }}
        >
          Add Employee
        </button>
      </div>
      <UsersTable users={users} />
      <DataForm
        projects={projects}
        entity={entity}
        modal={showModal}
        openModal={setShowModal}
        dispatch={dispatch}
      />
    </section>
  );
};

export default Users;
