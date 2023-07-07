"use client";

import React from "react";
import ModalContext from "./ModalContext";
import { useState } from "react";

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  if (typeof window !== "undefined") {
    window.onclick = (event) => {
      if (event.target.id === "project") {
        toggleModal();
      }
    };
  }
  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}
