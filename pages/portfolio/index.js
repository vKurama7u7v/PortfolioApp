import Portfolio from "@/screens/Portfolio";
import React from "react";

export default function portfolio(props) {
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
      <Portfolio
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
        nPorPagina={6}
        Categories={true}
        route={"portfolio"}
        details={false}
      />
    </>
  );
}
