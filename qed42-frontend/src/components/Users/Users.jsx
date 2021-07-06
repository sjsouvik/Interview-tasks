import { useReducer, useState } from "react";
import UsersTable from "./UsersTable/UsersTable";

import { userState, userReducer } from "../../reducers/userReducer";

import DataForm from "../DataForm/DataForm";

import "./Users.css";

const Users = () => {
  const [state, dispatch] = useReducer(userReducer, userState);
  const [showModal, setShowModal] = useState(false);
  const [entity, setEntity] = useState("");

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
