import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { map } from "lodash";
import { getUrlComponent, updatePathnames } from "@/utils/navigation.utils";

export default function Navbar(props) {
  const { showNavbar, onShowNavbar, onResetShowNavbar, onChangeColor } = props;

  const route = useRouter();
  const setNavigation = updatePathnames(getUrlComponent(route.pathname));

  return (
    <>
      <header className={`header ${onChangeColor()}`}>
        <div className="header__logo">
          <h1>
            <Link href={"/"} onClick={onResetShowNavbar}>
              Aurelio MB
            </Link>
          </h1>
        </div>

        <nav className={showNavbar ? "nav show" : "nav"} id="nav-menu">
          <div className="nav__content bd-grid">
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link
                    href={"/"}
                    className={`nav__link link__design ${setNavigation[0].class}`}
                    onClick={onResetShowNavbar}
                  >
                    Inicio
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href={"/portfolio"}
                    className={`nav__link link__design ${setNavigation[1].class}`}
                    onClick={onResetShowNavbar}
                  >
                    Portafolio
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    href={"/contact"}
                    className={`nav__link link__design ${setNavigation[2].class}`}
                    onClick={onResetShowNavbar}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="header__toggle">
          <button onClick={onShowNavbar}>
            <i className="uil uil-bars" id="header-toggle"></i>
          </button>
        </div>
      </header>
    </>
  );
}
