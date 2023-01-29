// * ===== OBTENER SECCIÓN DE LA URL ===== *
export const getUrlComponent = (url) => {
  const _split = url.split("/");
  const response = _split[1];

  return response.toString();
};

// * ===== CREAR ARRAY DE PATHNAMES ===== *
export const setPathnames = () => {
  const pathnames = [
    { pathname: "", active: false, class: "" },
    { pathname: "portfolio", active: false, class: "" },
    { pathname: "contact", active: false, class: "" },
  ];

  return pathnames;
};

// * ===== ESTABLECER ESTADOS ACTIVOS DE PATHNAMES ===== *
export const updatePathnames = (input) => {
  const pathnames = setPathnames();

  pathnames.map(function (dato) {
    if (input === dato.pathname) {
      dato.active = true;
      dato.class = "nav__link-active";
    }

    return dato;
  });

  return pathnames;
};
