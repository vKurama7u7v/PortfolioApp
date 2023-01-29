import React from "react";
import { useRouter } from "next/router";
import Details from "@/screens/Details";

export default function project(props) {
  const route = useRouter();

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
      <Details
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
        query={route.query}
        nPorPagina={6}
        Categories={false}
        route={"portfolio"}
        details={true}
      />
    </>
  );
}
