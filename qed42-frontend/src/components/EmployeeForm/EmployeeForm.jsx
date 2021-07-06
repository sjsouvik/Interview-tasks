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
    setName("");
    setEmail("");
    setPhone("");
    setProject("");

    const data = JSON.parse(localStorage?.getItem("data")) || {
      users: [],
      projects: [],
    };
    const updatedData = {
      ...data,
      users: [...data.users, { name, email, phone, project }],
    };
    localStorage?.setItem("data", JSON.stringify(updatedData));
  };

  const projectSelectHandler = (e) => {
    if (e.target.value !== "Select Project") {
      return setProject(e.target.value);
    }

    setProject("");
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
        value={project}
        onChange={projectSelectHandler}
      >
        <option>Select Project</option>
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
