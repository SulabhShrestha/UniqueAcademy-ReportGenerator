import { createContext, useEffect, useRef, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [formRef, setFormRef] = useState(null);

  useEffect(() => {
    console.log("FormRef", formRef);
  }, [formRef]);

  return (
    <FormContext.Provider value={{ formRef, setFormRef }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
export { FormContext };
