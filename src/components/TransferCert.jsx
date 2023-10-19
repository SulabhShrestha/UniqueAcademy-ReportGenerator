import React from "react";
import Modal from "react-modal";
import PdfPreviewer from "./PdfPreviewer";
import { PDFDownloadLink } from "@react-pdf/renderer";

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
        <div className="flex flex-col">
          {/* Close button */}
          <button
            className="absolute right-4 bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={closeModal}
          >
            Close
          </button>

          {/* Content */}
          <PdfPreviewer />

          {/* Download button */}
          <PDFDownloadLink
            className="bg-blue-500 self-center px-2 py-1 rounded-md"
            document={<PdfPreviewer />}
            fileName="transfer-certificate"
          >
            Download
          </PDFDownloadLink>
        </div>
      </Modal>
    </>
  );
}

export default TransferCert;
