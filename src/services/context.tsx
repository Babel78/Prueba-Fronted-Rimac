import { useState, createContext, useContext } from 'react';

interface FormDataContext {
  data: any
  setFormValues: any
}

export const FormContext = createContext<FormDataContext>({ data: {}, setFormValues() { } });

export default function FormProvider(props: any) {
  const [data, setData] = useState({});

  const setFormValues = (values: any) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {props.children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
