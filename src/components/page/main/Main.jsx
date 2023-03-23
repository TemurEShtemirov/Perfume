import "./Main.css";
import CardStore from "../card/CardStore";
import TruckImg from "../../img/TruckImg.png";
import BoxImg from "../../img/BoxImg.png";
import PaymentSecure from "../../img/PaymentSecure.png";
import Support from "../../img/Support.png";
import Ad1 from "../../img/Ad.png";
import Ad2 from "../../img/Ad2.png";
import Ad3 from "../../img/Ad3.png";
import Line from "../../img/Line.png";
import Ad4 from "../../img/Ad4.png";
import Ad5 from "../../img/Ad5.png";
import Ad6 from "../../img/Ad6.png";
import LogoPerfume from "../../img/LogoPerfume.png";
import LogoPerfume2 from "../../img/LogoPerfume2.png";
import LogoPerfume3 from "../../img/LogoPerfume3.png";
import LogoPerfume4 from "../../img/LogoPerfume4.png";
import LogoPerfume5 from "../../img/LogoPerfume5.png";
import LogoPerfume6 from "../../img/LogoPerfume6.png";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Main = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main>
      <section>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://aromacode.ru/wa-data/public/blog/img/parfyumernaya-voda-i-tualetnaya-voda-raznica5.png"
                className="d-block w-100"
                alt="Image perfume"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://parfumlux54.ru/assets/images/news/parfjumerija-zhenskaja-novinki_12.jpg"
                className="d-block w-100"
                alt="ImgPerfume"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://avatars.mds.yandex.net/get-altay/1881734/2a00000169b5a32959c858e8e0cf17034fe9/XXL"
                className="d-block w-100"
                alt="ImgPefume"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="section2">
        <div className="row DivRow ad">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 RowCol">
            <img src={TruckImg} alt={TruckImg} />
            <p className="FreeShipping">Free Shipping</p>
            <p className="FreeShippingDesc">On all orders over $75.00</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 RowCol">
            <img src={BoxImg} alt={BoxImg} />
            <p className="FreeReturns">Free Returns</p>
            <p className="FreeReturnsDesc">Returns are free within 9 days</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 RowCol">
            <img src={PaymentSecure} alt={PaymentSecure} />
            <p className="PaymentSecure">100% Payment Secure</p>
            <p className="PaymentSecureDesc">Your payment are safe with us.</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3 RowCol">
            <img src={Support} alt={Support} />
            <p className="Support">Support 24/7 </p>
            <p className="SupportDesc">Contact us 24 hours a day</p>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img className="ad" src={Ad1} alt={Ad1} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <img className="ad" src={Ad2} alt={Ad2} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <img className="ad" src={Ad3} alt={Ad3} />
          </div>
        </div>
      </section>
      <section className="section4">
        <h1 className="text-center OurProducts">Our products</h1>
        <img className="Line" src={Line} alt={Line} />
        <p className="text-center OurProductsDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, culpa?
        </p>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="new products" {...a11yProps(0)} />
              <Tab label="onsale" {...a11yProps(1)} />
              <Tab label="upcoming products" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <CardStore />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div>
              <CardStore />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div>
              <CardStore />
            </div>
          </TabPanel>
        </Box>
      </section>
      <section className="section5">
        <div className="row">
          <div className="col-sm-12 col-12 col-lg-3 col-xl-3 col-xxl-3">
            <img className="ad" src={Ad4} alt={Ad4} />
          </div>
          <div className="col-sm-12 col-12 col-lg-3 col-xl-3 col-xxl-3">
            <img className="ad" src={Ad5} alt={Ad5} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img className="ad" src={Ad6} alt={Ad6} />
          </div>
        </div>
      </section>
      <section className="section6">
        <h1 className="h1Card2">New Arrival products</h1>
        <img className="Line" src={Line} alt={Line} />
        <p className="pCard2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          repellat.
        </p>
        <div>
          <CardStore />
        </div>
      </section>
      <section className="section7">
        <h1 className="h1Card3">from our Latest Blogs</h1>
        <img className="Line" src={Line} alt={Line} />
        <p className="pcard3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div>
          <CardStore />
        </div>
      </section>
      <section className="section8">
        <a
          className="cardLogo cardLogo1"
          href="https://www.sephora.com/"
          target={"_blank"}
        >
          <img className="ad" src={LogoPerfume} alt={LogoPerfume} />
        </a>
        <a
          className="cardLogo"
          href="https://www.sephora.com/"
          target={"_blank"}
        >
          <img className="ad" src={LogoPerfume2} alt={LogoPerfume2} />
        </a>
        <a
          className="cardLogo"
          href="https://www.sephora.com/"
          target={"_blank"}
        >
          <img className="ad" src={LogoPerfume3} alt={LogoPerfume3} />
        </a>
        <a
          className="cardLogo"
          href="https://www.sephora.com/"
          target={"_blank"}
        >
          <img className="ad" src={LogoPerfume4} alt={LogoPerfume4} />
        </a>
        <a
          className="cardLogo"
          href="https://www.sephora.com/"
          target={"_blank"}
        >
          <img className="ad" src={LogoPerfume5} alt={LogoPerfume5} />
        </a>
        <a
          className="cardLogo"
          href="https://www.sephora.com/"
          target={"_blank"}
        >
          <img src={LogoPerfume6} alt={LogoPerfume6} />
        </a>
      </section>
    </main>
  );
};

export default Main;
