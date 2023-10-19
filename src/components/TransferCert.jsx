import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import Modal from "react-modal";

function TransferCert() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        className="bg-blue-600 text-white px-2 py-1 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Preview
      </button>

      <Modal isOpen={modalIsOpen} contentLabel="Example Modal">
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
}

export default TransferCert;
