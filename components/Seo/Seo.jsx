import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "Aurelio MB - Resumen",
  description: `
    Soy un programador que adora los retos y que no se rinde
    fácilmente.
    Mi objetivo principal es desarrollarme profesionalmente y
    mejorar mis habilidades, buscando las oportunidades que me
    permitan cumplir mis metas.
  `,
};
