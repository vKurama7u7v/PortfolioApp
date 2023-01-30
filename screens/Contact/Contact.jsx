import React from "react";

import Image from "next/image";

import BasicLayout from "@/layouts/BasicLayout";
import { WEBSITE_URL } from "@/utils/const.utils";

import BG from "../../public/assets/img/bg-cv.png";
import FormContact from "@/components/Forms/FormContact";

export default function Contact(props) {
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
      <BasicLayout
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        showColor={showColor}
        setShowColor={setShowColor}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
        title={"Aurelio MB - Contacto"}
      >
        <main className={`l-main main__contact ${onChangeColor()}`}>
          <div className="bg">
            <Image src={BG} alt="" />
          </div>

          <div className="card">
            <section className="section left">
              <Information />
            </section>
            <section className="section right">
              <FormContact />
            </section>
          </div>
        </main>
      </BasicLayout>
    </>
  );
}

function Information() {
  return (
    <>
      <h3>Información de Contacto</h3>
      <div className="contact-info">
        <div className="item">
          <div className="item__left">
            <i className="uil uil-phone-volume"></i>
          </div>
          <div className="item__right">
            <p className="title">Número de Teléfono</p>
            <p className="subtitle">(+52) 833 259 9772</p>
          </div>
        </div>

        <div className="item">
          <div className="item__left">
            <i className="uil uil-envelope"></i>
          </div>
          <div className="item__right">
            <p className="title">Correo Electrónico</p>
            <p className="subtitle">aurelio.marin@iest.edu.mx</p>
          </div>
        </div>

        <div className="item">
          <div className="item__left">
            <i class="uil uil-map-marker"></i>
          </div>
          <div className="item__right">
            <p className="title">Ubicación</p>
            <p className="subtitle">Altamira, Tamaulipas</p>
          </div>
        </div>

        <div className="item">
          <div className="item__left">
            <i className="uil uil-globe"></i>
          </div>
          <div className="item__right">
            <p className="title">Sitio Web</p>
            <p className="subtitle">
              <a href={WEBSITE_URL} target="_blank" rel="noreferrer">
                aureliomarin.netlify.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
