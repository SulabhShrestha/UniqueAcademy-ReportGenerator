import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import ResultCertPdfPreviewer from "./ResultCertPdfPreviewer";


function ResultCert() {
  return <>

  <h1>Hello</h1>
  
  <div className="flex flex-col">
      <PureModal
        header="Custom heading"
        width="80vw"
        className=""
        scrollable={false}
        isOpen={true}
        closeButton="close"
        onClose={() => {
          
          return true;
        }}
      >
        {/* Content */}
        <ResultCertPdfPreviewer/>
      </PureModal>
    </div>
  </>;
}

export default ResultCert;
