import { useState, Dispatch } from "react";

import edit from "../../../assets/editing.png";
import trash from "../../../assets/trash.png";
import save from "../../../assets/save.png";

import { User } from "../Users.types";
import { Action } from "../../../reducers/userReducer.types";

import "./UsersTable.css";

export const areAllSelected = (users: User[]) => {
  return (
    users.length > 0 &&
    users.reduce((allSelected, user) => {
      return allSelected && user.selected !== undefined && user.selected;
    }, true)
  );
};

const UsersTable = ({
  users,
  dispatch,
}: {
  users: User[];
  dispatch: Dispatch<Action>;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const editHandler = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    dispatch({
      type: "ENABLE_OR_DISABLE_TO_EDIT",
      payload: { userId: user.id },
    });
  };

  const updateHandler = (userId: number) => {
    dispatch({
      type: "ENABLE_OR_DISABLE_TO_EDIT",
      payload: { userId },
    });
    dispatch({
      type: "UPDATE_USER",
      payload: { userId, name, email, role },
    });
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th className="text-center">
            <input
              type="checkbox"
              name="selectAll"
              checked={areAllSelected(users)}
              onChange={() =>
                dispatch({
                  type: "SELECT_OR_UNSELECT_ROW",
                  payload: { users },
                })
              }
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className={user.selected ? "selected" : undefined}>
            <td className="text-center">
              <input
                type="checkbox"
                name="select"
                checked={user.selected}
                onChange={() =>
                  dispatch({
                    type: "SELECT_OR_UNSELECT_ROW",
                    payload: { users: [user] },
                  })
                }
                data-testid="selectUserCheckBox"
              />
            </td>
            <td>
              <input
                type="text"
                value={user.readyToEdit ? name : user.name}
                readOnly={!user.readyToEdit}
                className={user.readyToEdit ? "edit-input" : "input-table"}
                onChange={(e) => setName(e.target.value)}
                data-testid="userName"
              />
            </td>
            <td>
              <input
                type="text"
                value={user.readyToEdit ? email : user.email}
                readOnly={!user.readyToEdit}
                className={user.readyToEdit ? "edit-input" : "input-table"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={user.readyToEdit ? role : user.role}
                readOnly={!user.readyToEdit}
                className={user.readyToEdit ? "edit-input" : "input-table"}
                onChange={(e) => setRole(e.target.value)}
              />
            </td>

            <td>
              {user.readyToEdit ? (
                <img
                  src={save}
                  alt="save-icon"
                  className="action-icon"
                  onClick={() => updateHandler(user.id)}
                  data-testid="saveBtn"
                />
              ) : (
                <img
                  src={edit}
                  alt="edit-icon"
                  className="action-icon"
                  onClick={() => editHandler(user)}
                  data-testid="editBtn"
                />
              )}
              <img
                src={trash}
                alt="delete-icon"
                className="action-icon"
                onClick={() =>
                  dispatch({
                    type: "DELETE_USER",
                    payload: { userId: user.id },
                  })
                }
                data-testid="deleteUser"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
