import PdfPreviewer from "./PdfPreviewer";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

function PdfModal(props) {
  return (
    <div className="flex flex-col">
      <PureModal
        header="Custom heading"
        width="80vw"
        className=""
        scrollable={false}
        isOpen={props.modal}
        closeButton="close"
        onClose={() => {
          props.setModal(false);
          return true;
        }}
      >
        {/* Content */}
        <PdfPreviewer />
      </PureModal>
    </div>
  );
}
export default PdfModal;
