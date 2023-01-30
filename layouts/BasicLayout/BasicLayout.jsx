import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";

export default function BasicLayout(props) {
  const {
    children,
    showNavbar,
    onShowNavbar,
    showColor,
    setShowColor,
    onResetShowNavbar,
    onChangeColor,
    title,
    description,
  } = props;

  return (
    <>
      <Seo title={title} description={description} />
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
