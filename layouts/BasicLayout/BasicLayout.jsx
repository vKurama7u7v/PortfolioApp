import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function BasicLayout(props) {
  const {
    children,
    showNavbar,
    onShowNavbar,
    showColor,
    setShowColor,
    onResetShowNavbar,
    onChangeColor,
  } = props;

  return (
    <>
      <Navbar
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
      />
      {children}
    </>
  );
}
