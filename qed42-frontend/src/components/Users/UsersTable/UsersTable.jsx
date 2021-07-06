import empty from "../../../assets/empty.svg";

import "./UsersTable.css";

const UsersTable = ({ users }) => {
  return (
    <div>
      {users.length === 0 && (
        <div style={{ padding: "1rem" }}>
          <h3>No Employees found</h3>
          <img src={empty} alt="empty-list" className="empty-list" />
        </div>
      )}
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
