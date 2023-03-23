import React from "react";
import "./home.css";
import Main from "../main/Main";
import FaceBookImage from "../../img/FaceBookNavbar.png";
import TwitterImage from "../../img/TwitterNavbar.png";
import YouTubeImage from "../../img/YouTubeNavbar.png";
import InstagramImage from "../../img/InstagramNavbar.png";
import TelephoneImage from "../../img/Telephone.png";
import Amerika from "../../img/Amerika.png";
import Footer from "../footer/Footer";
import { Container } from "reactstrap";
const Home = () => {
  return (
    <Container>
      <div className="Header">
        <div className="DarkPart bg-dark">
          <a className="IconsSocicalMediaNav" href="www.facebook">
            <img src={FaceBookImage} alt={FaceBookImage} />
          </a>
          <a className="IconsSocicalMediaNav" href="www.twitter.com">
            <img src={TwitterImage} alt={TwitterImage} />
          </a>
          <a className="IconsSocicalMediaNav" href="www.youtube.com">
            <img src={YouTubeImage} alt={YouTubeImage} />
          </a>
          <a className="IconsSocicalMediaNav" href="www.instagram.com">
            <img src={InstagramImage} alt={InstagramImage} />
          </a>

          <a href="tel:me+998(99)-543-0660" className="TelephoneIMg mb-5">
            <img src={TelephoneImage} alt={TelephoneImage} />
            +998(99)-543-0660
          </a>

          <p className="pNavbar">Setting</p>

          <p className="dolar">USD $</p>

          <a href="https://en.wikipedia.org/wiki/United_States#:~:text=The%20United%20States%20of%20America%20(U.S.A.%20or%20USA)%2C%20commonly,Islands%2C%20and%20326%20Indian%20reservations.">
            <img src={Amerika} alt={Amerika} />
            English
          </a>
        </div>


      </div>
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;
