import React from "react";
import Contact from "@/screens/Contact";

export default function contact(props) {
  const {
    showNavbar,
    onShowNavbar,
    showColor,
    setShowColor,
    onResetShowNavbar,
    onChangeColor,
  } = props;
  return (
    <>
      <Contact
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
      />
    </>
  );
}
