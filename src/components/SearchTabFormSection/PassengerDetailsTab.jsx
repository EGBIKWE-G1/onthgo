import React, { Component, useRef } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
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
import PassengerCard from "./PassengerCard";
import OutboundCard from "./OutboundCard";
import TicketCard2 from "./TicketCard2";
import { useDispatch, useSelector } from "react-redux";
import { setFlightPassengerDetail } from "../../redux/actions/flight";
import Covid19Content from "./Covid19Content";
import {
  setActiveFlightStep,
  STEP_FLIGHT_CONFIRMATION,
  STEP_FLIGHT_SELECT,
  STEP_FLIGHT_TICKET_OPTIONS,
} from "../../redux/actions/stepper";
import TicketCard from "./TicketCard";
import { useForm } from "react-hook-form";

const PassengerDetailsTab = () => {
  const dispatch = useDispatch();
  const flightData = useSelector((state) => state.flight.data);

  const numOfAdults = flightData?.selectedFlightDetail?.adult || 1;
  const numOfChildren = flightData?.selectedFlightDetail?.children || 0;
  const numOfInfants = flightData?.selectedFlightDetail?.infants || 0;

  console.log({ numOfAdults });
  console.log({ numOfChildren });
  console.log({ numOfInfants });

  const [modalShow, setModalShow] = React.useState(false);
  const [passengerFormArray, setPassengerFormArray] = React.useState({
    adults: [],
    children: [],
    infants: [],
  });
  const [passengerDetail, setPassengerDetail] = React.useState({});
  const passengerDetailSelect = useSelector(
    (state) => state.flight.data?.passenger
  );
  const passengerId = "passenger_form";

  const [dobDay, setDobDay] = React.useState("");
  const [dobMonth, setDobMonth] = React.useState("");
  const [dobYear, setDobYear] = React.useState("");

  const countries = [
    { title: "Nigeria", callingCode: "234" },
    { title: "Ghana", callingCode: "233" },
    { title: "United Kingdom", callingCode: "47" },
  ];
  /**
   * Generating the form based on flight input
   */
  React.useEffect(() => {
    //generate adult form array
    let adultList = [];
    if (numOfAdults) {
      for (let i = 0; i < numOfAdults; i++) {
        let adultObj = {};
        console.log("adult", adultObj);
        adultList.push(adultObj);
      }
    }

    //genrate the children form array
    let childrenList = [];
    if (numOfChildren) {
      for (let i = 0; i < numOfChildren; i++) {
        let childrenObj = {};
        console.log("children", childrenObj);
        childrenList.push(childrenObj);
      }
    }
    //genrate the infants form array
    let infantList = [];
    if (numOfInfants) {
      for (let i = 0; i < numOfInfants; i++) {
        let infantObj = {};
        console.log("infants", infantObj);
        infantList.push(infantObj);
      }
    }
    setPassengerFormArray({
      adults: adultList,
      children: childrenList,
      infants: infantList,
    });
  }, [flightData]);

  React.useEffect(() => {
    if (passengerDetailSelect) {
      setPassengerDetail(passengerDetailSelect);
    }
  }, [passengerDetailSelect]);

  /**I did something crazy here...
   * submiting from a button outside the form
   * */
  const handleNextReviewJourneyDetail = () => {
    let ids = 0;
    const passengersData = [
      ...passengerFormArray.adults.map(
        (
          {
            firstName,
            lastName,
            email,
            phoneNumber,
            gender,
            dateOfBirth,
            country,
            postalCode,
            state,
            city,
            address1,
          },
          id
        ) => ({
          id: ++ids,
          dateOfBirth,
          name: {
            firstName,
            lastName,
          },
          gender,
          country,
          postalCode,
          state,
          city,
          address1,
          contact: {
            emailAddress: email,
            phones: [
              {
                deviceType: "MOBILE",
                countryCallingCode: "234",
                number: phoneNumber,
              },
            ],
          },
          travelerType: "ADULT",
          fareOptions: ["STANDARD"],
        })
      ),
      ...passengerFormArray.children.map(
        ({ firstName, lastName, gender, dateOfBirth }, id) => ({
          id: ++ids,
          dateOfBirth,
          name: {
            firstName,
            lastName,
          },
          gender,
          travelerType: "CHILD",
          fareOptions: ["STANDARD"],
        })
      ),
      ...passengerFormArray.infants.map(
        ({ firstName, lastName, gender, dateOfBirth }, id) => ({
          id: ++ids,
          dateOfBirth,
          name: {
            firstName,
            lastName,
          },
          gender,
          travelerType: "HELD_INFANT",
          associatedAdultId: 1,
          fareOptions: ["STANDARD"],
        })
      ),
    ];
    console.log("passsenger data", passengersData);

    dispatch(setFlightPassengerDetail(passengersData));
    dispatch(setActiveFlightStep(STEP_FLIGHT_CONFIRMATION));
    // setModalShow(true);
  };

  const handlePrevious = () => {
    dispatch(setActiveFlightStep(STEP_FLIGHT_SELECT));
  };

  return (
    <div>
      <Container className="" style={{ maxWidth: "100%" }}>
        {/* <MultiStep /> */}
        <Col lg={12}>
          <Row>
            <Col md={8}>
              <Covid19Content />
              <br />

              <PassengerCard
                passengerFormArray={passengerFormArray}
                setPassengerFormArray={setPassengerFormArray}
                id={passengerId}
                setPassengerDetail={setPassengerDetail}
                passengerDetail={passengerDetail}
                setModalShow={setModalShow}
                modalShow={modalShow}
                isInsurance={false}
                setDobYear={setDobYear}
                setDobMonth={setDobMonth}
                setDobDay={setDobDay}
                dobDay={dobDay}
                dobMonth={dobMonth}
                dobYear={dobYear}
                handleNextReviewJourneyDetail={handleNextReviewJourneyDetail}
                handlePrevious={handlePrevious}
              />
            </Col>

            <Col md={4}>
              <OutboundCard />
              <br />
              <TicketCard />
              {/* <TicketCard2 /> */}
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default PassengerDetailsTab;
