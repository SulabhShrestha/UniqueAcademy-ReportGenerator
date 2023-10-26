import React, { useContext, useEffect, useRef } from "react";
import PdfModal from "./PdfModal";
import { FormContext } from "../provider/formProvider";
import { useState } from "react";

function TransferCert() {
  const [modal, setModal] = useState(false);

  const inputTitle = [
    {
      name: "Serial No",
      id: "SerialNo",
    },
    {
      name: "Admission No",
      id: "AdmissionNo",
    },
    {
      name: "Date of Admission",
      id: "DateOfAdmission",
    },
    {
      name: "Name of the Pupil",
      id: "NameOfThePupil",
    },
    {
      name: "Name of the Father",
      id: "NameOfTheFather",
    },
    {
      name: "Nationality",
      id: "Nationality",
    },
    {
      name: "Caste of the Pupil",
      id: "CasteOfThePupil",
    },
    {
      name: "Date of Birth of the pupil according to the school record",
      id: "DOB",
    },
    {
      name: "Class passed or failed by the student",
      id: "Remark",
    },
    {
      name: "Class in which student was studying",
      id: "Class",
    },
    {
      name: "Medium of Instruction",
      id: "Language",
    },
    {
      name: "Whether qualified for promotion to a higher class",
      id: "CanQualify",
    },
    {
      name: "Month up to which the fees paid by the student",
      id: "FeesPaid",
    },
    {
      name: "General conduct of the student",
      id: "Conduct",
    },
    {
      name: "Reason for leaving the school",
      id: "Reason",
    },
    {
      name: "Date of issue of Transfer Certificate",
      id: "DateOfIssue",
    },
    {
      name: "Any other remarks",
      id: "OtherRemarks",
    },
  ];

  const formRef = useRef(null);
  const { setFormRef } = useContext(FormContext);

  const handlePreviewClick = (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    const formFields = Array.from(formRef.current.elements);
    const shouldOpen = formFields
      .slice(0, formFields.length - 1) // Exclude the submit button
      .every((field) => {
        console.log(field.value.length);
        return field.value.trim().length > 0;
      });

    if (shouldOpen) {
      setFormRef(formRef);
      setModal(true);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <form ref={formRef} className="my-8">
        {/* Input fields */}
        <div className="input-fields  grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          {inputTitle.map((input) => (
            <div key={input.id} className="w-4/5">
              <label htmlFor={`#${input.id}`}>{input.name}:</label>
              <input
                type="text"
                name={input.name}
                id={input.id}
                className="ml-2 border-2 rounded-lg border-gray-400 px-2"
                required
              />
            </div>
          ))}
        </div>

        {/* Submit button */}
        <button
          className="bg-blue-600 text-white px-2 py-1 rounded-lg mx-auto block mt-12"
          type="submit"
          onClick={handlePreviewClick}
        >
          Preview
        </button>

        <PdfModal modal={modal} setModal={setModal} />
      </form>
    </>
  );
}

export default TransferCert;
