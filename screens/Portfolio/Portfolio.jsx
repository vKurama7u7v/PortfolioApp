import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/apollo/gql/projects.gql";

import BasicLayout from "@/layouts/BasicLayout";
import Loading from "@/components/Loading";
import Error from "next/error";
import BaseLayout from "@/layouts/BaseLayout";

export default function Portfolio(props) {
  const {
    showNavbar,
    onShowNavbar,
    showColor,
    setShowColor,
    onResetShowNavbar,
    onChangeColor,
    nPorPagina,
    route,
    details,
    Categories,
  } = props;

  const { data: dataProjects, loading, error } = useQuery(GET_PROJECTS);

  if (loading) return <Loading />;
  if (error) return <Error statusCode={500} />;
  // if (!dataProjects.portfolio.data) return <Error statusCode={404} />;
  const { portfolios } = dataProjects;
  const { data } = portfolios;

  return (
    <>
      <BasicLayout
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
        title={"Aurelio MB - Portafolio"}
      >
        <BaseLayout
          showNavbar={showNavbar}
          onShowNavbar={onShowNavbar}
          showColor={showColor}
          setShowColor={setShowColor}
          onResetShowNavbar={onResetShowNavbar}
          onChangeColor={onChangeColor}
          nPorPagina={nPorPagina}
          route={route}
          details={details}
          data={data}
          Categories={Categories}
        />
      </BasicLayout>
    </>
  );
}
