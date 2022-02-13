import React from "react";
import "./card.style.css";
import { AiFillEye, AiTwotoneLike, AiOutlineDownload } from "react-icons/ai";

export function Card({
  className,
  image,
  views,
  likes,
  downloads,
  photographer,
}) {
  return (
    <div className={className} id="card-wrapper">
      <img
        src={image.webformatURL}
        alt={`photograph by ${image.user}`}
        id="image"
      ></img>
      <h2>{image.user}</h2>

      <div id="info">
        <div div className="about-img">
          <p>
            <AiFillEye />
            {image.views}
          </p>
        </div>

        <div className="about-img">
          <AiTwotoneLike />
          <p>{image.likes}</p>
        </div>

        <div className="about-img">
          <AiOutlineDownload />
          <p>{image.downloads}</p>
        </div>
      </div>
    </div>
  );
}
