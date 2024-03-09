import React, { useContext, useEffect, useRef } from "react";
import PdfModal from "./PdfModal";
import { FormContext } from "../provider/formProvider";
import { useState } from "react";

function TransferCert() {
  const [modal, setModal] = useState(false);

  const inputTitle = [
    {
      name: "Serial No",
      label: "Serial No",
      id: "SerialNo",
    },
    {
      name: "Admission No",
      label: "Admission No",
      id: "AdmissionNo",
    },
    {
      name: "Date of Admission",
      label: "Date of Admission",
      id: "DateOfAdmission",
    },
    {
      name: "Name of the Pupil",
      label: "Pupil's Name",
      id: "NameOfThePupil",
    },
    {
      name: "Name of the Father",
      label: "Father's Name",
      id: "NameOfTheFather",
    },
    {
      name: "Nationality",
      label: "Nationality",
      id: "Nationality",
    },
    {
      name: "Caste of the Pupil",
      label: "Pupil's Caste",
      id: "CasteOfThePupil",
    },
    {
      name: "Date of Birth of the pupil according to the school record",
      label: "Date of Birth",
      id: "DOB",
    },
    {
      name: "Class passed or failed by the student",
      label: 'Remark',
      id: "Remark",
    },
    {
      name: "Class in which student was studying",
      label: "Class",
      id: "Class",
    },
    {
      name: "Medium of Instruction",
      label: "Instruction Medium",
      id: "Language",
    },
    {
      name: "Whether qualified for promotion to a higher class",
      label: "Qualified for Promotion",
      id: "CanQualify",
    },
    {
      name: "Month up to which the fees paid by the student",
      label: "Fees Paid Upto Month",
      id: "FeesPaid",
    },
    {
      name: "General conduct of the student",
      label: "Student Behaviour",
      id: "Conduct",
    },
    {
      name: "Reason for leaving the school",
      label: "Reason for Leaving",
      id: "Reason",
    },
    {
      name: "Date of issue of Transfer Certificate",
      label: "Date of Issue",
      id: "DateOfIssue",
    },
    {
      name: "Any other remarks",
      label: "Other Remarks",
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
        {/* i row in small screen and 2 in md and above */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inputTitle.map((input) => (
            <div key={input.id}>
              <label htmlFor={`#${input.id}`}>{input.label}</label>
              <br />

              
              <input
                type="text"
                name={input.name}
                id={input.id}
                className="border rounded-lg border-gray-400 p-3 w-full mt-1"
                required
              />
            </div>
          ))}
        </div>

        {/* Submit button */}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-auto block mt-12 uppercase tracking-wider font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
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
