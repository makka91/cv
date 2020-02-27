import React from "react";

const Card = ({ img, bg, title, text, arcImage }) => {
  const arc = {
    position: "absolute",
    height: "78px",
    width: "75px",
    borderRadius: "45px",
    backgroundImage: `url(${arcImage})`,
    backgroundPosition: "center",
    backgroundSize: "74px 74px",
    marginTop: "-85px"
  };
  return (
    <div
      className={`card ${bg} border border-light`}
      style={{ height: "350px" }}
    >
      <img
        src={img}
        className="card-img img-fluid"
        style={{ maxWidth: "300px", minHeight: "200px" }}
      />
      <div className="card-body text-white d-flex flex-column align-items-center">
        <div style={arc}></div>
        <h5 className={`card-title text-center text-uppercase`}>{title}</h5>
        <h6 className={`card-text text-center`}>{text}</h6>
      </div>
    </div>
  );
};

export default Card;
