import React from "react";
import Card from "./subs/card";
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.jpg";
import angular from "../../assets/angular.png";
import adobe from "../../assets/adobe.png";
import html from "../../assets/html.png";

class CardHandler extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-between p-5">
            <div className="col-4">
              <Card
                img={a1}
                bg={`bg-danger`}
                title={`Angular`}
                text={`Angular 2+`}
                arcImage={angular}
              />
            </div>
            <div className="col-4">
              <Card
                img={a2}
                bg={`bg-primary`}
                title={`MongoDB`}
                text={`Lorem Ipsum`}
                arcImage={html}
              />
            </div>
            <div className="col-4">
              <Card
                img={a3}
                bg={`bg-dark`}
                title={`Adobe CC`}
                text={`Photoshop, Illustrator, InDesign`}
                arcImage={adobe}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardHandler;
