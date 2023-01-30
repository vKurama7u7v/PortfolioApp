import React, { useState, useEffect } from "react";
import { map, size } from "lodash";
import Image from "next/image";
import Link from "next/link";

import BasicLayout from "@/layouts/BasicLayout";

import { WEBSITE_PATH, CV_PATH } from "@/utils/const.utils";
import { dataProyectos, dataSkills } from "@/utils/data.utils";

import BG from "../../public/assets/img/bg-cv.png";
import PersonalInfo from "../../public/assets/img/personal-info-sep.png";
import PhotoInner from "../../public/assets/img/photo-inner.png";

export default function Profile(props) {
  const {
    showNavbar,
    onShowNavbar,
    showColor,
    setShowColor,
    onResetShowNavbar,
    onChangeColor,
  } = props;

  // const { data: dataProjects, loading, error } = useQuery(GET_PROJECTS);

  // if (loading) return <Loading />;
  // if (error) return <Error statusCode={500} />;
  // // if (!dataProjects.portfolio.data) return <Error statusCode={404} />;
  // const { portfolios } = dataProjects;

  return (
    <>
      <BasicLayout
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
      >
        <main className="l-main">
          <div className="bg">
            <Image src={BG} alt="" />
          </div>

          <div className={`resume ${onChangeColor()}`}>
            <div className="settings">
              <button
                className={
                  showColor === 0
                    ? "reset btn-change active"
                    : "reset btn-change"
                }
                id="purple"
                onClick={() => setShowColor(0)}
              ></button>
              <button
                className={
                  showColor === 1
                    ? "reset btn-change active"
                    : "reset btn-change"
                }
                id="blue"
                onClick={() => setShowColor(1)}
              ></button>
              <button
                className={
                  showColor === 2
                    ? "reset btn-change active"
                    : "reset btn-change"
                }
                id="red"
                onClick={() => setShowColor(2)}
              ></button>
              <button
                className={
                  showColor === 3
                    ? "reset btn-change active"
                    : "reset btn-change"
                }
                id="orange"
                onClick={() => setShowColor(3)}
              ></button>
              <button
                className={
                  showColor === 4
                    ? "reset btn-change active"
                    : "reset btn-change"
                }
                id="yellow"
                onClick={() => setShowColor(4)}
              ></button>
            </div>

            <div className="download">
              <a
                className="reset btn-download"
                href={CV_PATH}
                target="_blank"
                locale={false}
                download
              >
                <span>Descargar CV</span>
                <i className="bx bx-download"></i>
              </a>
            </div>
            <section className="section section__profile">
              <div className="left">
                <div className="avatar">
                  <Image src={PhotoInner} alt="" className="shadow" />
                  <div className="pfp">
                    <img
                      src={
                        "https://res.cloudinary.com/doi13m5h7/image/upload/v1674939022/portfolio/photo_Aurelio_Marin_Bautista.png"
                      }
                      alt="Aurelio Marín Bautista"
                      height="40px"
                      title="Aurelio Marín Bautista"
                    />
                  </div>
                </div>

                <div className="name">
                  <h1>
                    Aurelio
                    <br />
                    Marín
                  </h1>
                  <span>Full Stack Web Developer</span>
                </div>
              </div>

              <div className="right">
                <Image src={PersonalInfo} alt="" />
                <div className="info">
                  {/* <p>
                    <span>
                      <i className="bx bx-user"></i>Nombre
                    </span>
                    <span>Aurelio Marín Bautista</span>
                  </p> */}
                  <p>
                    <span>
                      <i className="bx bx-cake"></i>Nacimiento
                    </span>
                    <span>12 Agosto, 2001</span>
                  </p>

                  <p>
                    <span>
                      <i className="bx bx-map"></i>Ubicación
                    </span>
                    <span>Altamira, Tamaulipas</span>
                  </p>

                  <p>
                    <span>
                      <i className="bx bx-phone"></i>Teléfono
                    </span>
                    <span>+52 833 259 9772</span>
                  </p>

                  <p>
                    <span>
                      <i className="bx bx-world"></i>Idiomas
                    </span>
                    <span>Español Nativo, Inglés B1</span>
                  </p>

                  <p>
                    <span>
                      <i className="bx bx-envelope"></i>Email
                    </span>
                    <span>aurelio.marin@iest.edu.mx</span>
                  </p>
                  <p>
                    <span>
                      <i className="bx bx-globe"></i>Sitio Web
                    </span>
                    <span>
                      <a href={WEBSITE_PATH} target="_blank" rel="noreferrer">
                        aureliomarin.netlify.app
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </section>

            <div className="wrapper">
              <div className="left">
                {/* <!-- ===== ABOUT ===== --> */}
                <section className="section about">
                  <h2 className="section__heading">Sobre Mi</h2>
                  <h3>Soy Aurelio Marín Bautista</h3>
                  <p>
                    Soy un programador que adora los retos y que no se rinde
                    fácilmente.
                  </p>
                  <p>
                    Mi objetivo principal es desarrollarme profesionalmente y
                    mejorar mis habilidades, buscando las oportunidades que me
                    permitan cumplir mis metas.
                  </p>
                </section>

                {/* <!-- ===== SOCIAL ===== --> */}
                <section className="section social">
                  <h2 className="section__heading">Social</h2>
                  <ul className="socials">
                    <li>
                      <a
                        href="https://web.facebook.com/profile.php?id=100007335257831"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aureliomb/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dribbble.com/vKurama7u7v"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/vKurama7u7v"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                  </ul>
                </section>

                {/* <!-- ===== EXPERIENCIA ===== --> */}
                <div className="design__heading">
                  <h2>Proyectos</h2>
                </div>
                <section className="section experience">
                  <WrapperProyectos data={dataProyectos()} />
                </section>
              </div>
              <div className="right">
                {/* <!-- ===== SKILLS ===== --> */}
                <section className="section skills">
                  <h2 className="section__heading">Perfil de Desarrollador</h2>
                  <div className="software">
                    <div className="item">
                      <div className="item__icon">
                        <i className="devicon-react-original"></i>
                      </div>
                      <div id="item__tooltip">
                        Desarrollo de Aplicaciones Web con React ❤️
                      </div>
                      <div className="item__progress" id="intermedio">
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item__icon">
                        <i className="devicon-flutter-plain"></i>
                      </div>
                      <div id="item__tooltip">
                        Desarrollo de Aplicaciones Móviles con Flutter 📱
                      </div>
                      {/* <!-- <div className="item__name">VS Code</div> --> */}
                      <div className="item__progress" id="basico">
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item__icon">
                        <i className="devicon-django-plain"></i>
                      </div>
                      <div id="item__tooltip">
                        Creación de REST APIs con Django 👨🏽‍💻
                      </div>
                      {/* <!-- <div className="item__name">VS Code</div> --> */}
                      <div className="item__progress" id="intermedio">
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="item__icon">
                        <i className="devicon-figma-plain"></i>
                      </div>
                      <div id="item__tooltip">Diseño UI/UX con Figma 👌</div>
                      <div className="item__progress" id="avanzado">
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                        <div className="progress"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills">
                    <h2>Mis Skills</h2>
                    <SkillsBars data={dataSkills()} />
                  </div>
                </section>

                {/* <!-- ===== EDUCATION ===== --> */}
                <section className="section education">
                  <h2 className="section__heading">Educación</h2>
                  <div className="timeline-wrapper">
                    <div className="item">
                      <span className="title">2016 - 2019</span>
                      <p className="center">
                        <span>Bachillerato - CBTis 105</span>
                      </p>
                      <p>Programación</p>
                    </div>

                    <div className="item">
                      <span className="title">Actualmente</span>
                      <p className="center">
                        <span>Universidad - IEST</span>
                      </p>
                      <p>Ing. en Sistemas & Negocios Dígitales</p>
                    </div>
                  </div>
                </section>

                {/* <!-- ===== INTERESES ===== --> */}
                <section className="section intereses">
                  <h2 className="section__heading">Intereses</h2>
                  <div className="intereses">
                    <div className="item">
                      <div className="item__icon">
                        <i className="bx bxs-plane-alt"></i>
                      </div>
                      <div className="item__name">Viajar</div>
                    </div>

                    <div className="item">
                      <div className="item__icon">
                        <i className="bx bx-headphone"></i>
                      </div>
                      <div className="item__name">Música</div>
                    </div>

                    <div className="item">
                      <div className="item__icon">
                        <i className="bx bx-joystick"></i>
                      </div>
                      <div className="item__name">Videojuegos</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="footer">
              Copyright © 2022 Aurelio Marín Bautista
            </div>
          </div>
        </main>
      </BasicLayout>
    </>
  );
}

function SkillsBars(props) {
  const { data } = props;
  return (
    <>
      <div className="skills-bar">
        {data.slice(0, 3).map((item) => (
          <>
            <div className="bar">
              <div className="info">
                <span>{item.name}</span>
              </div>

              <div className="progress-line">
                <span style={{ width: item.percentage }}></span>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="skills-bar">
        {data.slice(3, 6).map((item) => (
          <>
            <div className="bar">
              <div className="info">
                <span>{item.name}</span>
              </div>

              <div className="progress-line">
                <span style={{ width: item.percentage }}></span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

function WrapperProyectos(props) {
  const { data } = props;

  return (
    <>
      <div className="timeline-wrapper">
        {map(data, (value) => (
          <>
            <div className="item">
              <span className="title">{value.year}</span>
              {map(value.projects, (item) => (
                <>
                  <p className="center">
                    <span>{item.title}</span>
                  </p>
                  <ul>
                    <li>
                      <p>{item.description}</p>
                    </li>
                  </ul>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
