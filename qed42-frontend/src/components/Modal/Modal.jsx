import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      class="modal"
      style={props.show ? { display: "block" } : { display: "none" }}
    >
      <div class="modal-content">
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
