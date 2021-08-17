import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CustomModal = ({
  isOpen,
  toggle,
  title,
  children,
  handlePrimaryButtonClick,
}) => {
  return (
    <span className="d-inline-block mb-2 mr-2">
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={handlePrimaryButtonClick}>
            Submit
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </span>
  );
};

export default CustomModal;
