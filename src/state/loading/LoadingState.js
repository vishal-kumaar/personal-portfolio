import React from "react";
import LoadingContext from "./LoadingContext";
import { useState } from "react";

export default function LoadingState({ children }) {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  };

  return (
    <LoadingContext.Provider value={{ loading, handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
