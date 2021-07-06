import { useState } from "react";

const EmployeeForm = ({ projects, openModal, dispatch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");

  const saveDataHandler = () => {
    openModal(false);
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: { name, email, phone, project },
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Add Employee</h3>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="form-control"
      />
      <select
        name="projects"
        className="form-control"
        onChange={(e) => setProject(e.target.value)}
      >
        {projects.map((project) => (
          <option>{project.title}</option>
        ))}
      </select>

      <button
        className="btn btn-outline-primary"
        onClick={() => openModal(false)}
      >
        Dismiss
      </button>
      <button className="btn btn-primary" onClick={saveDataHandler}>
        Save
      </button>
    </div>
  );
};

export default EmployeeForm;
