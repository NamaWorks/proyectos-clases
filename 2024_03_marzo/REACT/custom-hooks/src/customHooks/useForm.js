import { useState } from "react";

export const useForm = () => {
  const [formState, setFormState] = useState({});

  const change = (value, property) => {
    setFormState({ ...formState, [property]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return formState;
  };

  return {
    change, 
    handleSubmit
  }

};
