import React, { useState } from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import { map, size } from "lodash";
import { setDateFormat } from "@/utils/setDate.utils";
import { WEBSITE_PATH } from "@/utils/const.utils";

import Banner from "@/components/Banner";
import FilterContent from "@/components/Filters/FilterContent";

export default function BaseLayout(props) {
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
    data,
    img,
    Categories,
  } = props;

  const [content, setContent] = useState(data);
  const [filter, setFilter] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(nPorPagina);
  const [maximo, setMaximo] = useState(size(content) / porPagina);

  const onResetData = () => {
    setFilter(false);

    // Restaurando valores para paginación
    setMaximo(size(content) / porPagina);
    setPagina(1);
  };

  const onFilterByCategory = (idCategory) => {
    setFilter({ filter: idCategory });

    const result = content.filter(
      (item) => item.attributes.categories.data.id === idCategory
    );

    // Seteando valores para paginación
    setMaximo(size(result) / porPagina);
    setPagina(1);
  };

  return (
    <>
      <main className={`main__portfolio ${onChangeColor()}`}>
        <section className="min-height">
          <section className="banner">
            <SectionBanner
              thumbnail={img ? img : null}
              route={route}
              data={data}
            />
          </section>

          <section className="projects__wrapper mx-w" id={"top"}>
            <div className="left">
              {!details ? (
                <>
                  <ListContent
                    data={data}
                    filter={filter}
                    pagina={pagina}
                    porPagina={porPagina}
                    route={route}
                  />
                </>
              ) : (
                <>
                  <Content data={data} route={route} />
                </>
              )}

              {size(content) > 0 ? (
                <>
                  <Pagination
                    pagina={pagina}
                    setPagina={setPagina}
                    maximo={maximo}
                  />
                </>
              ) : null}
            </div>
            <div className="right">
              <FilterContent
                origin={data}
                content={content}
                route={route}
                onResetData={onResetData}
                onFilterByCategory={onFilterByCategory}
                Categories={Categories}
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function SectionBanner(props) {
  const { data, thumbnail, route } = props;

  let title = null;
  let id = null;

  if (!Array.isArray(data)) {
    title = data.attributes.title;
    id = data.id;
  }

  return (
    <>
      <Banner thumbnail={thumbnail ? thumbnail : null} />

      <div className="cont__banner">
        <div className="flex-align-middle">
          <div className="content">
            <h1>{title ? title : "Mi Portafolio"}</h1>
            <div className="links">
              <Link href={"/"}>Home</Link>
              <i className="fa-solid fa-angles-right"></i>
              {title ? (
                <>
                  <Link href={`/${route}`}>Portafolio</Link>
                  <i className="fa-solid fa-angles-right"></i>
                  <Link href={`/${route}/${id}`} className="link-active">
                    {title}
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/portfolio"} className="link-active">
                    Portafolio
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Pagination(props) {
  const { pagina, setPagina, maximo } = props;

  const onNextPage = () => {
    setPagina(parseInt(pagina) + 1);
  };

  const onPreviousPage = () => {
    setPagina(parseInt(pagina) - 1);
  };

  return (
    <>
      <div className="pagination">
        {pagina === 1 || pagina < 1 ? null : (
          <Link
            href={"#top"}
            className="btn-reset prev btn"
            disabled={pagina === 1 || pagina < 1}
            onClick={onPreviousPage}
          >
            Anterior
          </Link>
        )}

        {/* <button className="reset num active" id="num">
          1
        </button>
        <button className="reset num" id="num">
          2

        </button> */}
        {pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo) ? null : (
          <Link
            href={"#top"}
            className="btn-reset next btn"
            disabled={
              pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)
            }
            onClick={onNextPage}
          >
            Siguiente
          </Link>
        )}
      </div>
    </>
  );
}

function ListContent(props) {
  const { data, filter, pagina, porPagina, route } = props;
  return (
    <>
      {size(data) === 0 ? (
        <>
          <div className="notification">
            No se encontro ningun registro en la Base de Datos 🌚
          </div>
        </>
      ) : (
        <>
          <div className="post__item-wrapper">
            {filter ? (
              <>
                {data
                  .filter(
                    (item) =>
                      item.attributes.categories.data.id === filter.filter
                  )
                  .slice(
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                  )
                  .map((item, index) => (
                    <>
                      <Post data={item} key={index} route={route} />
                    </>
                  ))}
              </>
            ) : (
              <>
                {data
                  .slice(
                    (pagina - 1) * porPagina,
                    (pagina - 1) * porPagina + porPagina
                  )
                  .map((item, index) => (
                    <>
                      <Post data={item} key={index} route={route} />
                    </>
                  ))}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

function Post(props) {
  const { data, key, route } = props;
  const post = data.attributes;
  return (
    <>
      <div className="post__item" id={key}>
        <div className="post__img">
          <img
            src={post.thumbnail.data.attributes.url}
            alt={post.thumbnail.data.attributes.hash}
            title={post.thumbnail.data.attributes.name}
            width={"100px"}
          />
        </div>
        <div className="post__content">
          <div className="content__top">
            <div className="category">
              {post.categories.data.attributes.category}
            </div>
            <div className="date">{setDateFormat(post.publishedAt)}</div>
          </div>
          <div className="title__content">
            <Link href={`/${route}/${data.id}`} className="title">
              {post.title}
            </Link>
          </div>

          <p className="description">{post.description}</p>
        </div>

        <div className="post__footer">
          <div className="footer__left">
            <Link href={`/${route}/${data.id}`} className="view-more">
              Ver Más <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
          <div className="footer__right">
            Share:
            <WhatsappShareButton
              url={`${WEBSITE_PATH}/${route}/${data.id}`}
              title={post.title}
              separator=":: "
            >
              <i class="fa-brands fa-whatsapp btn-share"></i>
            </WhatsappShareButton>
            <FacebookShareButton
              url={`${WEBSITE_PATH}/${route}/${data.id}`}
              quote={post.title}
              hashtag={"#AurelioMB"}
            >
              <i class="fa-brands fa-facebook-f btn-share"></i>
            </FacebookShareButton>
            <TwitterShareButton
              url={`${WEBSITE_PATH}/${route}/${data.id}`}
              title={post.title}
            >
              <i class="fa-brands fa-twitter btn-share"></i>
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

function Content(props) {
  const { data, route } = props;

  const content = data.attributes;
  return (
    <>
      <section className="section section__content-post">
        <div className="content-post__title">
          <h1>{content.title}</h1>
          <div className="info">
            <span className="category">
              {content.categories.data.attributes.category}
            </span>
            <div className="separator"></div>
            <span className="date">{setDateFormat(content.publishedAt)}</span>
          </div>
        </div>
        <hr />

        <HTMLContent content={content.content} />

        <Buttons
          code={content.code}
          demo={content.demo}
          data={data}
          route={route}
        />
      </section>
    </>
  );
}

function HTMLContent(props) {
  const { content } = props;
  return (
    <>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
}

function Buttons(props) {
  const { code, demo, data, route } = props;

  return (
    <>
      <div className="buttons__content">
        <div className="buttons__left">
          {demo || code ? (
            <h2 className="heading__post-section mb-1">Opciones</h2>
          ) : null}

          {demo ? (
            <a
              target={"_blank"}
              href={demo}
              className="btn-reset btn-demo"
              rel="noreferrer"
            >
              <i class="fa-solid fa-eye"></i> Visitar Página
            </a>
          ) : null}

          {code ? (
            <a
              target={"_blank"}
              href={code}
              className="btn-reset btn-code"
              rel="noreferrer"
            >
              <i class="fa-solid fa-code"></i> Ver Código
            </a>
          ) : null}
        </div>
        <div className="buttons__right">
          <h2 className="heading__post-section ">Compartir</h2>
          <WhatsappShareButton
            url={`${WEBSITE_PATH}/${route}/${data.id}`}
            title={data.attributes.title}
            separator=":: "
          >
            <button className="btn-reset btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> WhatsApp
            </button>
          </WhatsappShareButton>
          <FacebookShareButton
            url={`${WEBSITE_PATH}/${route}/${data.id}`}
            quote={data.attributes.title}
            hashtag={"#AurelioMB"}
          >
            <button className="btn-reset btn-facebook">
              <i class="fa-brands fa-facebook-f"></i> Facebook
            </button>
          </FacebookShareButton>

          <div className="ocultar">
            <br />
          </div>

          <TwitterShareButton
            url={`${WEBSITE_PATH}/${route}/${data.id}`}
            title={data.attributes.title}
          >
            <button className="btn-reset btn-twitter">
              <i class="fa-brands fa-twitter"></i> Twitter
            </button>
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
}
