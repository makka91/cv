import React from "react";
import Carousel from "./subs/carousel";
import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";

class CarouselHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: "Vem är jag?",
          index: 0,
          paragraph:
            "Mitt namn är Marcus Johansson, jag är 28 år gammal och bor i Borås. Jag har nyligen tagit examen från min treåriga utbildning som Webbredaktör på Högskolan i Borås.",
          source: a3
        },
        {
          title: "Vad kan jag?",
          index: 1,
          paragraph:
            "Under min utbildning har jag fått lära mig grundläggande webbutveckling med HTML 5, CSS3 och JavaScript. Jag har även fått lära mig MEAN full stack-utveckling med utveckling både inom databas- såsom klientsida ihop med REST-api.",
          source: a2
        },
        {
          title: "Vad kan jag mer?",
          index: 2,
          paragraph:
            "Jag har också fått lära mig tekniker för kommunikation för publicering i olika kanaler med fokus på samspel mellan bild och text. Dessa innefattar bland annat visuell kommunikation med Adobes bild-, video- och layoutbehandlingsprogram.",
          source: a1
        },
        {
          title: "Vad vill jag?",
          index: 2,
          paragraph:
            "Jag söker nu, inte bara efter en tjänst, utan också en chans att få använda och utveckla mina färdigheter och ge utlopp för min kreativitet i en trygg miljö. Jag strävar efter att utvecklas för att på så vis kunna stötta de omkring mig.",
          source: a4
        }
      ]
    };
  }
  render() {
    return (
      <>
        <div className="full-width">
          <Carousel props={this.state} />
        </div>
      </>
    );
  }
}

export default CarouselHandler;
