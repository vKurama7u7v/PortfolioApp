import React from "react";

export default function Banner(props) {
  const { thumbnail } = props;
  const urlIMG =
    "https://cdn.glitch.com/27131a37-2b0c-4505-85fd-e4cd33d55125%2Fastronaut-in-neon-city_3840x2160_xtrafondos.com.jpg?v=1616887588881";

  return (
    <>
      <div className="cover__img-bg">
        <img src={thumbnail ? thumbnail : urlIMG} alt="" />
      </div>
    </>
  );
}
