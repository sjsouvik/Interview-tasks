import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      className="modal"
      style={props.show ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-content">
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
