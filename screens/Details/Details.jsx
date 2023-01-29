import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "@/apollo/gql/projects.gql";

import BaseLayout from "@/layouts/BaseLayout";
import BasicLayout from "@/layouts/BasicLayout";
import Loading from "@/components/Loading";
import Error from "next/error";

export default function Details(props) {
  const {
    showNavbar,
    onShowNavbar,
    showColor,
    setShowColor,
    onResetShowNavbar,
    onChangeColor,
    nPorPagina,
    route,
    query,
    details,
    Categories,
  } = props;

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id: query.project },
  });
  if (loading) return <Loading />;
  if (error) return <Error statusCode={500} />;
  if (!data.portfolio.data) return <Error statusCode={404} />;
  const { portfolio } = data;
  const { data: result } = portfolio;

  return (
    <BasicLayout
      showNavbar={showNavbar}
      onShowNavbar={onShowNavbar}
      showColor={showColor}
      setShowColor={setShowColor}
      onResetShowNavbar={onResetShowNavbar}
      onChangeColor={onChangeColor}
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
        data={result}
        img={result.attributes.thumbnail.data.attributes.url}
        Categories={Categories}
      />
    </BasicLayout>
  );
}
