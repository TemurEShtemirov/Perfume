import React from 'react';
import LogoFooter from "../../img/LogoFooter.png";
import "./footer.css";
import InstagramFooter from "../../img/InstagramFooter.png";
import YouTubeFooter from "../../img/YouTubeFooter.png";
import TwitterFooter from "../../img/TwitterFooter.png"
import FaceBookFooter from "../../img/FaceBookFooter.png";
import Line from "../../img/Line.png";
import CreditCard from "../../img/Cards.png"

const Footer = () => {
    return (
      <div className="row footer">
        <div className="mt-5 col">
          <img src={LogoFooter} alt={LogoFooter} />
          <p className="pFooter">
            We are a team of professional designers and developers <br /> that
            create high quality wordpress plugins, Html, React <br /> Template.
          </p>
          <a
            href="www.instagram.com"
            target={"_blank"}
            className="a1 socicalmedia mt-5"
          >
            <img src={InstagramFooter} alt={InstagramFooter} />
          </a>
          <a
            href="www.youtube.com"
            target={"_blank"}
            className="a2 socicalmedia mt-5"
          >
            <img src={YouTubeFooter} alt={YouTubeFooter} />
          </a>
          <a
            href="www.twitter.com"
            target={"_blank"}
            className="a3 socicalmedia mt-5"
          >
            <img src={TwitterFooter} alt={TwitterFooter} />
          </a>
          <a
            href="www.facebook.com"
            target={"_blank"}
            className="a4 socicalmedia mt-5"
          >
            <img src={FaceBookFooter} alt={FaceBookFooter} />
          </a>
        </div>
        <div className="mt-5 col">
          <h1 className="h11footer">Information</h1>
          <img src={Line} alt={Line} />
          <p className="aboutUs">About us</p>
          <p className="paymentFooter">payment</p>
          <p className="ContactUs">Contact us</p>
          <p className="Stores">Stores</p>
        </div>
        <div className="mt-5 col">
          <h1 className="h1Col2Footer">social Links</h1>
          <img src={Line} alt={Line} />
          <p className="pCol2Footer">New products</p>
          <p className="p1Col2Footer">Best sales</p>
          <p className="p2Col2Footer">Login</p>
          <p className="p3Col2Footer">My account</p>
        </div>
        <div className="col">
          <h1 className="h1Col3Footer">Newsletter</h1>
          <img src={Line} alt={Line} />
          <p className="pCol3Footer">
            Subcribe to the TheFace mailing list to receive update on <br />{" "}
            mnew arrivals, special offers and other discount <br /> information.
          </p>
        </div>
        <div className="dARKPpART bg-dark">
          <p className='pdarkPart'>Copyright © HasThemes. All Rights Reserved</p>
          <img className='CreditCard' src={CreditCard} alt={CreditCard} />
        </div>
      </div>
    );
};


export default Footer;