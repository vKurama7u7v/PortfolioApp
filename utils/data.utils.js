export const dataProyectos = () => {
  const data = [
    {
      year: 2021,
      projects: [
        {
          title: "Gamificación",
          description: "Desarrollo de un Videojuego (Tetris)",
        },
        {
          title: "NexTask",
          description:
            "Desarrollo de Aplicación Web que nos permite crear listas de tareas o de pendientes.",
        },
      ],
    },
    {
      year: 2022,
      projects: [
        {
          title: "DisCode",
          description:
            "Desarrollo de Aplicación Web hecha para enseñar programación.",
        },
        {
          title: "ISND | OpenLab",
          description:
            "Desarrollo de Sitio Web descriptivo sobre el laboratorio de Ing. en Sistemas & Negocios Dígitales",
        },
        {
          title: "Observatorio Ciudadano",
          description:
            "Desarrollo de Sitio Web encargado de gestionar y difundir reportes estadísticos de los temas que más interesan a la población de la Zona Sur de Tamaulipas.",
        },
      ],
    },
  ];

  return data;
};

export const dataSkills = () => {
  const data = [
    {
      name: "HTML",
      percentage: "90%",
    },
    {
      name: "CSS",
      percentage: "80%",
    },
    {
      name: "JavaScript",
      percentage: "70%",
    },
    {
      name: "Python",
      percentage: "60%",
    },
    {
      name: "GIT",
      percentage: "80%",
    },
    {
      name: "MongoDB",
      percentage: "70%",
    },
  ];
  return data;
};
