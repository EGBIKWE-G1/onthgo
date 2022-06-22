import React, { Component, useState, select, Switch } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup,
  Card,
  InputGroup,
  Form,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from "../Calendar";
import ButtonToggle from "./ButtonToggle";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveInsuranceStep,
  STEP_INSURANCE_SELECT,
} from "../../redux/actions/stepper";
import { push } from "connected-react-router";
import { formatMoney } from "../../utils/moneyFomat";

const styles = {
  placeholderTextStyle: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "rgba(0, 0, 0, 0.35)",
  },
};

function ConfirmationFlightPremiumDetailsCard() {
  let currencyFormatter = Intl.NumberFormat("en-US");
  const ticketOption = useSelector((state) => state.flight.data.ticketOption);
  const serviceCharge = 5000;
  const insuranceCost = 18993;

  const dispatch = useDispatch();
  // const getSubTotal = ( price) => {
  //   let localPrice = 1
  //   if (price !== null) localPrice = price.replace(/,/g, '')
  //   else localPrice = 1

  //   return currencyFormatter.format(parseFloat(localPrice) )
  // }

  // const calculateTotal = (price, charges = 0) => {
  //   let localPrice = 1
  //   if (price !== null) localPrice = price.replace(/,/g, '')
  //   else localPrice = 1

  //   return currencyFormatter.format(parseFloat(localPrice) + charges)
  // }
  const flightOffers = useSelector((state) => state.flight.data?.flightOffers);
  const offer = useSelector((state) => state.flight.data.selectedFlightOffer);

  const aircrafts = flightOffers?.dictionaries?.aircraft;
  const carriers = flightOffers?.dictionaries?.carriers;
  const currencies = flightOffers?.dictionaries?.currencies;
  const locations = flightOffers?.dictionaries?.locations;

  const basePrice = offer.price.base;
  const grandTotal = offer.price.grandTotal;

  const handleClick = () => {
    dispatch(push("/flightinsurance"));
    dispatch(setActiveInsuranceStep(STEP_INSURANCE_SELECT));
  };

  return (
    <div>
      {/* <Card style={{backgroundColor: 'transparent', border: 'none'}}> */}
      <div style={{ backgroundColor: "transparent", padding: "20px" }}>
        <p
          style={{ color: "#043f7c", cursor: "pointer" }}
          onClick={handleClick}
        >
          {" "}
          <b>Fees</b>{" "}
          {/* <span style={{ float: 'right' }}>
            Edit &nbsp; <i className="fa fa-pencil"></i>
          </span> */}
        </p>
        <hr style={{ color: "#043f7c", borderTop: "1px dashed" }} />
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Ticket:</p>
          </Col>
          <Col md={6}>
            <p>&#8358;{formatMoney.format(grandTotal)} </p>
          </Col>
        </Row>
        {/* <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>
              Travel Insurance:
            </p>
          </Col>
          <Col md={6}>
            <p>&#8358;{currencyFormatter.format(insuranceCost)} </p>
          </Col>
        </Row> */}
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Sub Total:</p>
          </Col>
          <Col md={6}>
            <p>&#8358;{formatMoney.format(grandTotal)} </p>
          </Col>
        </Row>
        {/* <Row>
          <Col md={6}>
            <p  style={styles.placeholderTextStyle}>
              Service Charge:{' '}
            </p>
          </Col>
          <Col md={6}>
            <p>&#8358;{currencyFormatter.format(serviceCharge)} </p>
          </Col>
        </Row> */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col md={6}>
            <h4 style={{ color: "red" }}>
              {" "}
              <b>Total Amount:</b>{" "}
            </h4>
          </Col>
          <Col md={6}>
            <h4 style={{ color: "red" }}>
              &#8358;{formatMoney.format(grandTotal)}{" "}
            </h4>
          </Col>
        </Row>
      </div>
      {/*  */}

      {/* </Card> */}
    </div>
  );
}

export default ConfirmationFlightPremiumDetailsCard;
