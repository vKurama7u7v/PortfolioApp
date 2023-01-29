import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import client from "../apollo/config";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showColor, setShowColor] = useState(0);

  const onShowNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  const onResetShowNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    }
  };

  const onChangeColor = () => {
    if (showColor === 0) {
      return "active__purple";
    } else if (showColor === 1) {
      return "active__blue";
    } else if (showColor === 2) {
      return "active__red";
    } else if (showColor === 3) {
      return "active__orange";
    } else if (showColor === 4) {
      return "active__yellow";
    }
  };

  return (
    <ApolloProvider client={client}>
      <Component
        {...pageProps}
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ApolloProvider>
  );
}
