import React, { useState, useEffect } from "react";
const CarouselWithHero = ({ props }) => {
  const { items } = props;
  const [imageIndex, setImageIndex] = useState({
    minIndex: 0,
    maxIndex: 0,
    doubleClickTimeout: 700,
    clickedTimeout: null
  });
  const fullWidth =
    props.params && props.params.FullWidth ? "full-width" : "full-width";
  const display = props.params && props.params.HideThumbs ? "d-none" : "";
  useEffect(() => {
    let minIndex = imageIndex.minIndex;
    let maxIndex = items.length - 1;
    setImageIndex({
      minIndex: minIndex,
      maxIndex: maxIndex,
      doubleClickTimeout: 700,
      clickedTimeout: null
    });
  }, []);
  let outputImages = <> </>;
  let outputThumbnails = <> </>;
  if (!Array.isArray(items) || !items.length) {
    outputImages = <div></div>;
  } else {
    outputImages = Object.values(items).map((item, index) => {
      if (index === 0) {
        return (
          <div className="carousel-item active" key={index}>
            <div className="hero hero--bottom-left hero--overlay">
              <div className="hero__media">
                <img
                  src={item.source}
                  alt={item.source}
                  className="hero__image"
                />
              </div>
              <div className="hero__inner">
                <div className="hero__inner__content">
                  <div className="container">
                    <h1 className="hero__title">{item.title}</h1>
                    <p className="hero__text">{item.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="carousel-item" key={index}>
            <div className="hero hero--bottom-left hero--overlay">
              <div className="hero__media">
                <img
                  src={item.source}
                  alt={item.source}
                  className="hero__image"
                />
              </div>
              <div className="hero__inner">
                <div className="hero__inner__content">
                  <div className="container">
                    <h1 className="hero__title">{item.title}</h1>
                    <p className="hero__text">{item.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
    outputThumbnails = Object.values(items).map((item, index) => {
      if (index === 0) {
        return (
          <div
            data-target="#carousel"
            data-slide-to={index}
            className={`${
              imageIndex.minIndex === index
                ? "carousel__thumbs-item carousel__thumbs-item--active active"
                : "carousel__thumbs-item"
            }`}
            key={index}
            onClick={e => toggleClass(e, index)}
          >
            <img
              src={item.source}
              alt={item.source}
              className="carousel__thumb"
            />
            <span className="carousel__thumb-title"></span>
          </div>
        );
      } else {
        return (
          <div
            data-target="#carousel"
            data-slide-to={index}
            className={`${
              imageIndex.minIndex === index
                ? "carousel__thumbs-item carousel__thumbs-item--active active"
                : "carousel__thumbs-item"
            }`}
            key={index}
            onClick={e => toggleClass(e, index)}
          >
            <img
              src={item.source}
              alt={item.source}
              className="carousel__thumb"
            />
            <span className="carousel__thumb-title"></span>
          </div>
        );
      }
    });
  }
  function handleClickArrows(event) {
    event.preventDefault();
    let direction = event.currentTarget.getAttribute("data-slide");
    const minIndex = imageIndex.minIndex;
    const maxIndex = imageIndex.maxIndex;
    if (!imageIndex.clickedTimeout) {
      imageIndex.clickedTimeout = setTimeout(() => {
        if (direction !== "next") {
          setImageIndex({
            minIndex: minIndex - 1,
            maxIndex: maxIndex,
            doubleClickTimeout: 500,
            clickedTimeout: null
          });
        } else {
          setImageIndex({
            minIndex: minIndex + 1,
            maxIndex: maxIndex,
            doubleClickTimeout: 500,
            clickedTimeout: null
          });
        }
      }, imageIndex.doubleClickTimeout);
    }
  }
  function toggleClass(event, index) {
    event.preventDefault();
    let maxIndex = imageIndex.maxIndex;
    setImageIndex({
      minIndex: index,
      maxIndex: maxIndex,
      doubleClickTimeout: 500,
      clickedTimeout: null
    });
  }
  return (
    <div className={fullWidth}>
      <div className="carousel carousel--hero">
        <div
          id="carousel"
          className="carousel slide"
          data-interval="false"
          data-wrap="false"
        >
          <div className="carousel-inner">{outputImages}</div>
          <button
            className={`${
              imageIndex.minIndex === 0
                ? "carousel__navigation carousel__navigation--disabled "
                : "carousel__navigation carousel__navigation--previous"
            }`}
            href="#carousel"
            data-slide="prev"
            onClick={e => handleClickArrows(e)}
          ></button>
          <button
            className={`${
              imageIndex.maxIndex === imageIndex.minIndex
                ? "carousel__navigation carousel__navigation--disabled "
                : "carousel__navigation carousel__navigation--next"
            }`}
            href="#carousel"
            data-slide="next"
            onClick={e => handleClickArrows(e)}
          ></button>
        </div>
        <div>
          <div className={`container ${display}`}>
            <div className="carousel__thumbs">
              <div className="carousel__thumbs-inner">{outputThumbnails}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselWithHero;
