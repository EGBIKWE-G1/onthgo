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
import { useSelector } from "react-redux";
import moment from "moment";
import {
  setActiveFlightStep,
  STEP_FLIGHT_PASSENGER_DETAIL,
} from "../../redux/actions/stepper";
import { useDispatch } from "react-redux";

const styles = {
  placeholderTextStyle: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "rgba(0, 0, 0, 0.35)",
  },
};

function ConfirmationPassengerDetailsCard() {
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.flight.data.passenger);

  const passengerDetail = passengers[0];
  console.log("passenger detail", passengerDetail);

  const handleClick = () => {
    dispatch(setActiveFlightStep(STEP_FLIGHT_PASSENGER_DETAIL));
  };

  return (
    <div>
      {/* <Card style={{backgroundColor: 'transparent', border: 'none'}}> */}
      <div style={{ backgroundColor: "transparent", padding: "20px" }}>
        <p style={{ color: "#043f7c" }}>
          {" "}
          <b>Passenger Details (Main)</b>
          <span
            style={{ float: "right", cursor: "pointer" }}
            onClick={handleClick}
          >
            Edit &nbsp; <i className="fa fa-pencil"></i>
          </span>
        </p>
        <hr style={{ color: "#043f7c", borderTop: "1px dashed" }} />

        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Name: </p>
          </Col>
          <Col md={6}>
            <p>
              {passengerDetail?.name?.firstName} {passengerDetail?.middleName}{" "}
              {passengerDetail?.name?.lastName}{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Dirth of Birth: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.dateOfBirth} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Title: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.gender} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Phone Number: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.contact?.phones[0]?.number} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Address: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.address1} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>City: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.city} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Postal Code: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.postalCode} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Country of Residence: </p>
          </Col>
          <Col md={6}>
            <p>{passengerDetail?.country?.name} </p>
          </Col>
        </Row>
      </div>
      {/*  */}

      {/* </Card> */}
    </div>
  );
}

export default ConfirmationPassengerDetailsCard;
