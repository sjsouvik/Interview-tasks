import { useState } from "react";

const ProjectForm = ({ openModal, dispatch }) => {
  const [title, setTitle] = useState("");
  const [projectKey, setProjectKey] = useState("");

  const saveDataHandler = () => {
    openModal(false);
    dispatch({
      type: "ADD_PROJECT",
      payload: { title, projectKey },
    });

    setTitle("");
    setProjectKey("");

    const data = JSON.parse(localStorage?.getItem("data")) || {
      users: [],
      projects: [],
    };
    const updatedData = {
      ...data,
      projects: [...data.projects, { title, projectKey }],
    };
    localStorage?.setItem("data", JSON.stringify(updatedData));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Add Project</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Project Key"
        value={projectKey}
        onChange={(e) => setProjectKey(e.target.value)}
        className="form-control"
      />

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

export default ProjectForm;
