import React from "react";
import Head from "next/head";

import { WEBSITE_PATH, THUMBNAIL_PATH } from "@/utils/const.utils";

export default function Seo(props) {
  const {
    title,
    description,
    keywords,
    author,
    copyright,
    thumbnail,
    website,
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <link rel="canonical" href={WEBSITE_PATH} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={website} />
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
  keywords: `
    portafolio aurelio mb,
    portafolio web aurelio mb,
    web personal aurelio
    aurelio marin bautista,
    v Kurama7u7 v, v kurama7u7 v,
    portafolio de programación,
    habilidades de programación,
    experiencia profesional,
    proyectos personales,
    lenguajes de programación,
    tecnologías,
    desarrollo web,
    aplicaciones móviles,
    bases de datos,
    programación de juegos,
    programación de software,
    certificaciones,
    colaboración en equipo,
    resolución de problemas,
    `,
  author: "Aurelio Marín Bautista",
  copyright: "Copyright © 2022 Aurelio Marín Bautista",
  thumbnail: THUMBNAIL_PATH,
  website: WEBSITE_PATH,
};
