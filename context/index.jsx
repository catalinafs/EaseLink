import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextUse = ({ children }) => {
  const [responsive, setResponsive] = useState();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const value = { responsive, theme, setTheme };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextUse;
