import PdfPreviewer from "./PdfPreviewer";
import { PDFDownloadLink } from "@react-pdf/renderer";

function PdfModal(props) {
  function closeModal() {
    props.closeModal(false);
  }
  return (
    <div className="flex flex-col">
      {/* Close button */}
      <button
        className="absolute right-4 bg-red-500 text-white px-2 py-1 rounded-md"
        onClick={closeModal}
      >
        Close
      </button>

      {/* Content */}
      <PdfPreviewer formRef={props.formRef} />

      {/* Download button */}
      <PDFDownloadLink
        className="bg-blue-500 self-center px-2 py-1 rounded-md"
        document={<PdfPreviewer />}
        fileName="transfer-certificate"
      >
        Download
      </PDFDownloadLink>
    </div>
  );
}

export default PdfModal;
