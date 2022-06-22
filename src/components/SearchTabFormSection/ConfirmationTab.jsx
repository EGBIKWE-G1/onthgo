import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import slider2 from "../../assets/img/slider/2.jpg";
import slider3 from "../../assets/img/slider/3.jpg";
import SexButtonGroup from "../SexButtonGroup/SexButtonGroups";
import FormSection from "../FormSection/FormSections";
import MultiStep from "react-multistep";
import VehicleFormSections from "../FormSection/VehicleFormSections";
// const MultiStep = import from 'react-multistep'
// import VehicleForm from '../FormSection/VehicleFormSections'
import AdditionalCover from "../FormSection/AdditionalCover";
import ConfirmationFlightDetailsCard from "./ConfirmationFlightDetailsCard";
import ConfirmationTicketDetailsCard from "./ConfirmationTicketDetailsCard";
import OutboundCard from "./OutboundCard";
import TicketCard2 from "./TicketCard2";
import ConfirmationPassengerDetailsCard from "./ConfirmationPassengerDetailsCard";
import ConfirmationFlightPremiumDetailsCard from "./ConfirmationFlightPremiumDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  handleFlightPayment,
  navigateToFlightInsurance,
  navigateToFlightPayment,
  selectedFlightOffer,
} from "./../../redux/actions/flight";
import {
  setActiveInsuranceStep,
  STEP_INSURER_DETAIL,
} from "../../redux/actions/stepper";
import { push } from "connected-react-router";
import moment from "moment";

const ConfirmationTab = () => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flight.data);

  const handleNextProceedToPayment = () => {
    const selectedFlightDetail = flightData.selectedFlightDetail;
    const selectedFlightOffer = flightData.selectedFlightOffer;
    const flightOfferDictionaries = flightData.flightOffers.dictionaries;

    // const { dob, firstName, lastName, gender, email, phoneNumber } =
    //   flightData.passenger;
    // const numOfPassengers = selectedFlightDetail.num_passengers;

    // let passengerCounter = 1;

    const travelers = flightData.passenger;
    // for (let i = 0; i < numOfPassengers; i++) {
    //   let traveller = {
    //     id: passengerCounter,
    //     dateOfBirth: moment(dob, "YYYY-M-D").format("YYYY-MM-DD"),
    //     name: {
    //       firstName,
    //       lastName,
    //     },
    //     gender,
    //     contact: {
    //       emailAddress: email,
    //       phone: [
    //         {
    //           deviceType: "MOBILE",
    //           countryCallingCode: "+234" /**to be fixed */,
    //           number: phoneNumber,
    //         },
    //       ],
    //     },
    //   };
    //   travelers = [...travelers, traveller];
    //   passengerCounter++;
    // }
    const isInstant = true;
    const formData = {
      flightDetail: selectedFlightDetail,
      selectedFlightOffer: selectedFlightOffer,
      flightOfferDictionaries,
      trackerId: selectedFlightDetail.trackerId,
      offerId: selectedFlightOffer.id,
      origin: selectedFlightDetail.origin,
      destination: selectedFlightDetail.destination,
      amount: selectedFlightOffer.price.grandTotal,
      isInstant,
      travelers,
      payment: !isInstant
        ? null
        : {
            transactionReference: "",
          },
    };
    console.log("form data", formData);
    dispatch(handleFlightPayment(formData));
    //make the call
    /**
     * Canccel trip
     *  update flight status
     */
    // dispatch(navigateToFlightPayment())
  };

  // const handlePrevious = () => {
  //   dispatch(setActiveInsuranceStep(STEP_INSURER_DETAIL))
  // }

  return (
    <div>
      <Container className="p-5">
        {/* <MultiStep /> */}
        <Col lg={12}>
          <Row>
            <Col md={12} style={{ backgroundColor: "white" }}>
              <Row>
                <Col md={6}>
                  <ConfirmationFlightDetailsCard />
                </Col>
                <Col md={6}>
                  <ConfirmationTicketDetailsCard />
                </Col>
                <Col md={6}>
                  <ConfirmationPassengerDetailsCard />
                </Col>

                <Col md={6}>
                  {/* <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br /> */}
                  <ConfirmationFlightPremiumDetailsCard />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* <Row>
          <Col md={3}>
              <Button
                onClick={handlePrevious}
                variant="secondary"
                style={{ width: '100%', marginTop: '24px' }}
                type="button"
              >
                Previous{' '}
              </Button>
            </Col>
            <Col md={9}> */}
          <Button
            onClick={handleNextProceedToPayment}
            variant="danger"
            style={{ width: "100%", marginTop: "24px" }}
            type="button"
          >
            Proceed To Payment{" "}
          </Button>
          {/* </Col>
          </Row> */}
        </Col>
      </Container>
    </div>
  );
};

export default ConfirmationTab;
