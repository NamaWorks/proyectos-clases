import { createContext, useState } from "react";

export const CustomContext = createContext();

const CustomProvider = ({ children }) => {
  
    const [interruptor, setInterruptor] = useState(false);

    const on = () => {
        setInterruptor(true)
    }

    const off = () => {
        setInterruptor(false);
    }

  return (
    <CustomContext.Provider value={{ interruptor, on, off }}>
      {children}
    </CustomContext.Provider>
  );
};

export default CustomProvider;
