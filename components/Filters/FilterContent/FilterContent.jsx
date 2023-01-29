import React, { useState } from "react";
import Link from "next/link";
import { map, size } from "lodash";

import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/apollo/gql/categories.gql";
import { GET_TAGS } from "@/apollo/gql/tags.gql";
import { GET_PROJECTS } from "@/apollo/gql/projects.gql";
import { setDateFormat } from "@/utils/setDate.utils";
import { counterPostsByCategory } from "@/utils/counters.utils";

import Error from "next/error";

export default function FilterContent(props) {
  const {
    origin,
    content,
    route,
    onResetData,
    onFilterByCategory,
    Categories,
  } = props;

  const [searchContent, setSearchContent] = useState(false);

  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useQuery(GET_CATEGORIES);

  const {
    data: dataTags,
    loading: loadingTags,
    error: errorTags,
  } = useQuery(GET_TAGS);

  const {
    data: dataPosts,
    loading: loadingPosts,
    error: errorPosts,
  } = useQuery(GET_PROJECTS);

  if (loadingCategories || loadingTags || loadingPosts) return null;
  if (errorCategories || errorTags || errorPosts)
    return <Error statusCode={500} />;

  const { categories } = dataCategories;
  const { tags } = dataTags;
  const { portfolios } = dataPosts;

  const onResetSearchContent = () => {
    setSearchContent(false);
  };

  const onSearchContent = (title) => {
    setSearchContent({ title });
  };

  const onChange = (e) => {
    if (e.target.value) setSearchContent(e.target.value.toLowerCase());
    else setSearchContent(false);
  };

  return (
    <>
      <SearchSeciton
        data={portfolios.data ? portfolios.data : null}
        searchContent={searchContent}
        route={route}
        onResetSearchContent={onResetSearchContent}
        onSearchContent={onSearchContent}
        onChange={onChange}
      />

      {Categories ? (
        <>
          <CategoriesSeciton
            data={categories.data ? categories.data : null}
            content={content}
            origin={origin}
            onResetData={onResetData}
            onFilterByCategory={onFilterByCategory}
          />
        </>
      ) : null}

      <RecentsSeciton
        data={portfolios.data ? portfolios.data : null}
        route={route}
      />

      <TagsSeciton
        data={tags.data ? tags.data : null}
        content={content}
        origin={origin}
        onResetData={onResetData}
      />
    </>
  );
}

function SearchSeciton(props) {
  const {
    data,
    searchContent,
    route,
    onResetSearchContent,
    onSearchContent,
    onChange,
  } = props;

  const setItem = (item) => {
    return (
      <>
        <Link href={`/${route}/${item.id}`}>{item.attributes.title}</Link>
      </>
    );
  };

  return (
    <>
      <section className="section post__search">
        <div
          className="form"
          onBlur={() => {
            setTimeout(() => {
              onResetSearchContent();
            }, 1000);
          }}
        >
          <div className="form__div">
            <input
              type="search"
              name="search"
              value={searchContent || ""}
              onChange={onChange}
              id=""
              placeholder="Buscar proyecto.."
              className="form__input"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          {searchContent ? (
            <>
              <div className="form__results">
                {data
                  .filter((item) =>
                    item.attributes.title.toLowerCase().includes(searchContent)
                  )
                  .map((item) => (
                    <>{setItem(item)}</>
                  ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}

function CategoriesSeciton(props) {
  const { data, origin, content, onResetData, onFilterByCategory } = props;
  return (
    <>
      <section className="section post__categories">
        <h2 className="heading__post-section">
          Categorías <span>Proyectos</span>
        </h2>
        <Link href={"#top"} className="item" onClick={() => onResetData()}>
          <span className="name">Todas</span>
          <span className="count">( {size(origin)} )</span>
        </Link>
        {size(data) === 0 ? null : (
          <>
            {map(data, (item, key) => (
              <>
                <Link
                  href={"#top"}
                  className="item"
                  onClick={() => onFilterByCategory(item.id)}
                >
                  <span className="name">{item.attributes.name}</span>
                  <span className="count">
                    ( {counterPostsByCategory(origin, item.attributes.name)} )
                  </span>
                </Link>
              </>
            ))}
          </>
        )}
      </section>
    </>
  );
}

function RecentsSeciton(props) {
  const { data, route } = props;

  const setItem = (data, index) => {
    const post = {
      id: data.id,
      thumbnail: data.attributes.thumbnail.data.attributes.url,
      title: data.attributes.title,
      date: data.attributes.publishedAt,
    };

    return (
      <>
        <Link href={`/${route}/${post.id}`} className="item" id={index}>
          <div className="recent__left">
            <div className="cont__img">
              <img src={post.thumbnail} alt="" width={"40px"} />
            </div>
          </div>
          <div className="recent__right">
            <h3>{post.title}</h3>
            <div className="date">{setDateFormat(post.date)}</div>
          </div>
        </Link>
      </>
    );
  };

  return (
    <>
      <section className="section recent__post">
        <h2 className="heading__post-section">
          Ultimos <span>Proyectos</span>
        </h2>
        {size(data) === 0
          ? null
          : map(data.slice(0, 5), (item, index) => setItem(item, index))}
      </section>
    </>
  );
}

function TagsSeciton(props) {
  const { data, origin, content, onResetData } = props;

  return (
    <>
      <section className="section post__tags">
        <h2 className="heading__post-section">
          Tags <span>Proyectos</span>
        </h2>

        <div className="tag__wrapper">
          {size(data) === 0
            ? null
            : map(data, (item) => (
                <button className="item" id={item.id}>
                  {item.attributes.name}
                </button>
              ))}
        </div>
      </section>
    </>
  );
}
