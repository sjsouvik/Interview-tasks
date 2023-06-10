import Modal from "../Modal/Modal";

import ProjectForm from "../ProjectForm/ProjectForm";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const DataForm = ({ projects, entity, modal, openModal, dispatch }) => {
  return (
    <Modal show={modal}>
      {entity === "employee" && (
        <EmployeeForm
          projects={projects}
          openModal={openModal}
          dispatch={dispatch}
        />
      )}
      {entity === "project" && (
        <ProjectForm openModal={openModal} dispatch={dispatch} />
      )}
    </Modal>
  );
};

export default DataForm;
