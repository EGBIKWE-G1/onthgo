import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Nav,
  Container,
  Modal,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
  Image,
  Breadcrumb,
  Button,
  Card,
} from "react-bootstrap";
import bannerimage from "../../assets/video/flightvid.mp4";
import busbannerimage from "../../assets/video/bus.gif";
import ferriesbannerimage from "../../assets/video/ferries.gif";
import trainbannerimage from "../../assets/video/train.gif";

// import OnTheGoBanner from './OnTheGoBanner';
// import KioskHeaderNav from '../KioskHeaderNav/KioskHeaderNav';
// import FinancialThumbnailSection from '../FinancialThumbnailSection/FinancialThumbnailSections';
// import DealsSection from '../DealsSection/DealsSections';
import AboutSection from "../../components/AboutSection/AboutSections";
import PartnersSection from "../../components/PartnersSection/PartnersSections";
// import OnTheGoTab from '../OnTheGoTab/OnTheGoTabs';
import OnTheGoSection from "../../components/OnTheGo/OnTheGoSections";
import OnTheGoDeals from "../../components/OnTheGo/OnTheGoDeals";
// import SpecialOffersSection from '../SpecialOffersSection/SpecialOffersSections';
// import FlashSalesSection from '../FlashSalesSection/FlashSalesSections';
import OnTheGoSales from "../../components/OnTheGo/OnTheGoSales";

import FooterSection from "../../components/FooterSection/FooterSection";

import "./index.scss";


import FlightSearchForm from "../../components/FlightSearchForm";
import { useDispatch } from "react-redux";
import { loginUser, getCurrentUser } from "./../../redux/actions/auth";
import Loader from "./../../components/Loader/index";
import { resetFlightDetail } from "./../../redux/actions/flight";

export default () => {
  const tabs = [
    {
      title: "Flights",
      icon: "fa fa-plane",
      backgroundImage:
        // "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/onTheGo%2FFlight%20Video.gif?alt=media&token=518948cb-9cd1-4c05-afb3-0dc59007727d",
        // "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/onTheGo%2FFlight.gif?alt=media&token=9ad273c7-1264-41b9-ad27-1975676740a9",
        "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/onTheGo%2Fflightn.gif?alt=media&token=6f4c9d6d-7dc5-43a4-b778-ac4a34f8e5f2",
    },
    {
      title: "Buses",
      icon: "fa fa-bus",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/onTheGo%2FBus%20Video%202.gif?alt=media&token=f2d1887b-5d29-46ee-87e5-ca3545ce14b1",
    },

    {
      title: "Trains",
      icon: "fa fa-train",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/onTheGo%2FTrain.gif?alt=media&token=1523ffc7-c2cc-44da-9454-a595407df713",
    },
    {
      title: "Ferries",
      icon: "fa fa-ship",
      backgroundImage:
        "https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/onTheGo%2FFerry%20Video%20Final.gif?alt=media&token=d98c75fc-d562-440b-9c4d-40573f7f2ff8",
    },

    // {
    // 	title: 'Cruise',
    // 	icon: 'djcdfvd',
    // 	backgroundImage: cruisebannerimage,
    // },
    // {
    //     title: 'Shipping',
    //     icon: 'djcdfvd',
    //     backgroundImage: shippingbannerimage,
    // },
  ];
  const [validated, setValidated] = useState(false);

  React.useEffect(() => {
    const paramsMatch = window.location.href.match(/\?.+/);
    if (paramsMatch) {
      const params = new URLSearchParams(paramsMatch[0]);
      const authToken = params.get("token");
      if (authToken) {
        console.log("generatedToken", authToken);
        localStorage.authToken = authToken;
        dispatch(loginUser({ authToken }));
        dispatch(getCurrentUser());
      }
    }

    dispatch(resetFlightDetail());
  }, []);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const activeTabStyle = {
    backgroundColor: "#fff",
    color: "#043F7C",
  };

  const tabStyle = {
    backgroundColor: "#043F7C",
    color: "#fff",
  };

  const handleOnTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const dispatch = useDispatch();

  return (
    <div style={{}}>
      <Container
        className="p-4"
        style={{
          maxWidth: "100%",
          backgroundImage: `url(${activeTab.backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "white",
          height: "450px",
          position: "relative",
          marginBottom: "180px",
          zIndex: 1000,
        }}
      >
        <p className="ml-3">
          {" "}
          <span style={{ color: "#F7F7F7" }}>Home /</span>{" "}
          <b style={{ color: "#FFFFFF" }}>On The Go</b>{" "}
        </p>

        <Container
          style={{
            position: "absolute",
            top: "200px",
            left: "50px",
          }}
        >
          <h2
            style={{
              fontWeight: "500px",
              marginLeft: "-20px",
              fontSize: "32px",
            }}
          >
            {/* Flights, Buses, Trains &amp; Ferries - All in One Search */}
            Flight, Buses, Trucks, Ferries and Trains -- All In One Search 
          </h2>
        </Container>
        <div
          style={{
            transform: "translateY(320px)",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          <FlightSearchForm
            validated={validated}
            // handleOnTabSelect={handleOnTabSelect}
            tabs={tabs}
            tabStyle={tabStyle}
            activeTabStyle={activeTabStyle}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </Container>

      <div className="box-container onthego-section">
        <OnTheGoSection />    
      </div>

      <div className="box-container">
        <OnTheGoDeals />
      </div>

      <div className="box-container">{/* <OnTheGoSales /> */}</div>

      {/* <div className="box-container">
                <AboutSection />
            </div>

            <Container style={{ maxWidth: '100%', marginTop: '20px' }}>
                <PartnersSection />
            </Container> */}

      <FooterSection />
    </div>
  );
};
