const UsersTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            {/* <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td> */}
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
