import React, { useEffect } from "react";
import { useState } from "react";
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

import airportJSON from "../../data/airport.json";
import AutoCompleteInput from "./AutoCompleteInput";
import DepartureInput from "./DepartureInput";
import FormInput from "./FormInput";

import fromIcon from "../../assets/img/icons/from.png";
import toIcon from "../../assets/img/icons/to.png";

import passengerIcon from "../../assets/img/icons/passenger-icon.png";

import "./index.scss";
// import { flightSearchStepOne } from '../../../redux/actions/flight';
import { useDispatch } from "react-redux";
import {
  createFlightSearchRequest,
  flightSearch,
} from "../../redux/actions/flight";
import { useSelector } from "react-redux";

import AirplaneIcon from "./icons/airplane.svg";
import BusIcon from "./icons/bus.svg";
import TrainIcon from "./icons/train.svg";
import YatchIcon from "./icons/yatch.svg";

import AirplaneIconActive from "./icons/airplane-active.svg";
import BusIconActive from "./icons/bus-active.svg";
import YatchIconActive from "./icons/yatch-active.svg";
import TrainIconActive from "./icons/train-active.svg";
import { useForm } from "react-hook-form";
import PassengerInput from "./../PassengerInput/index";
import Cabin from "./Cabin";

const ICONS = [AirplaneIcon, BusIcon, TrainIcon, YatchIcon];
const ACTIVE_ICONS = [
  AirplaneIconActive,
  BusIconActive,
  TrainIconActive,
  YatchIconActive,
];

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const searching = useSelector((state) => state.flight.searching);

  const selectedFlightDetail = useSelector(
    (state) => state.flight?.data?.selectedFlightDetail
  );
  const flightOffers = useSelector((state) => state.flight?.data?.flightOffers);
  // const localSource = useSelector(
  //   (state) => state.flight.data?.selectedFlightDetail?.from,
  // )
  // const localDestination = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.to,
  // )
  // const localDepartureDate = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.departureDate,
  // )
  // const localAddReturns = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.addReturn,
  // )
  // const localNumPassengers = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.num_passengers,
  // )

  // const localAdult = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.adult,
  // )
  // const localChildren = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.children,
  // )
  // const localInfants = useSelector(
  //   (state) => state.flight.data.selectedFlightDetail?.infants,
  // )

  const [passengerInputValue, setPassengerInputValue] = useState("");

  const [sourceText, setSourceText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [sourceData, setSourceData] = useState(null);
  const [destinationData, setDestinationData] = useState(null);
  const [sources, setSources] = useState(airportJSON);
  const [destinations, setDestinations] = useState([]);

  const [localSource, setLocalSource] = useState("");
  const [localDestination, setLocalDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [addReturn, setAddReturn] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cabin, setCabin] = useState("");
  // const [passengerValue, setPassengerValue] = useState(1)
  const [adult, setAdult] = React.useState(1);
  const [childrenValue, setChildrenValue] = React.useState(0);
  const [infants, setInfants] = React.useState(0);

  // console.log(selectFilghtDetails, "selectFilghtDetails")

  const airportData = airportJSON;

  useEffect(
    () => {
      if (sourceText?.length) {
        const newFilteredDestinations = airportJSON.filter((d) => {
          if (d.name !== null)
            return (
              !d?.name.toLowerCase().indexOf(sourceText.toLowerCase()) > -1
            );
        });
        setDestinations(newFilteredDestinations);
      }
      if (selectedFlightDetail != null) {
        const {
          from,
          to,
          departureDate,
          addReturn,
          cabin,
          returnDate,
          num_passengers,
          adult,
          children,
          infants,
        } = selectedFlightDetail;
        setLocalSource(from);
        setLocalDestination(to);
        setDepartureDate(departureDate);
        setReturnDate(returnDate);
        setAddReturn(addReturn);
        setAdult(adult);
        setChildrenValue(children);
        setInfants(infants);
        setCabin(cabin);
        console.log(
          "selected file detail should not be nul",
          selectedFlightDetail
        );
      }
    },
    [sourceText, selectedFlightDetail]
    // [sourceText, localDepartureDate, localAdult, localChildren, localInfants]
  );

  const handleDestinationChange = (e) => {
    console.log("destination text", e.target.value);
    setDestinationText(e.target.value);
  };

  // let splitresult = 0;
  // const [result, setResult] = useState(0);
  // useEffect(() => {
  //   getRandon();
  // }, [result === 0])

  // console.log({ splitresult })
  // console.log({ result })

  // const getRandon = () => {
  //   if (result === 0)
  //     result = Math.random();
  //   setResult(result);
  //   splitresult = result.split('.', 3)
  //   return result;
  // }

  const onSubmit = (data) => {
    console.log("form data", data);

    let flightType = "";
    if (addReturn === "2") {
      flightType = "round-trip";
    } else {
      flightType = "one-way";
    }
    console.log(flightType, "flightType");
    let formData = {
      originText: sourceText,
      origin: sourceData?.iata,
      destinationText: destinationText,
      destination: destinationData?.iata,
      children: childrenValue,
      adult: adult,
      infants: infants,
      departureDate: departureDate,
      returnDate: returnDate || "",
      carbinType: cabin,
      flightType: flightType,
      trackerId: 78987333,
      currencyCode: "NGN",
    };
    console.log({ formData });
    // dispatch(flightSearch(formData))
    dispatch(createFlightSearchRequest(formData));
  };

  return (
    <div className="">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: "14px", height: "55px" }}
      >
        <Form.Row>
          <Col md="2">
          {/* <Col md="3"> */}
            <Form.Group>
              <AutoCompleteInput
                suggestions={sources}
                setSelectedValue={(data) => {
                  setSourceData(data);
                  setSourceText(data?.name);
                }}
                labelText="From: "
                icon={fromIcon}
                name="from"
                value={localSource}
              />
              {errors.from && (
                <span className="text-danger">This field is required</span>
              )}
            </Form.Group>
          </Col>
          <Col md="2">
          {/* <Col md="3"> */}
            <Form.Group>
              <AutoCompleteInput
                suggestions={destinations}
                setSelectedValue={(data) => {
                  setDestinationData(data);
                  setDestinationText(data?.name);
                }}
                labelText="To: "
                icon={toIcon}
                value={localDestination}
              />
            </Form.Group>
          </Col>
          <Col md="3">
          {/* <Col md="6"> */}
            <Form.Group>
              <DepartureInput
                setDepartureDateValue={setDepartureDate}
                setReturnDateValue={setReturnDate}
                departureDateValue={departureDate}
                returnDateValue={returnDate}
                setAddReturnValue={setAddReturn}
                addReturnValue={addReturn}
              />   
            </Form.Group>
          </Col>
          <Col md="4">
          {/* <Col md="4"> */}
            <Form.Group>
              <Cabin setCabinValue={setCabin} cabinValue={cabin} />
            </Form.Group>
          </Col>
          
          <Col md="2" as={`div`}>
          {/* <Col md="6" as={`div`}> */}
            <PassengerInput
              setAdult={setAdult}
              adult={adult}
              setChildrenValue={setChildrenValue}
              childrenValue={childrenValue}
              setInfants={setInfants}
              infants={infants}
              required
              // onPassengerChange={(passengerData) => { setAdult(passengerData.adult); setChildrenValue(passengerData.children); setInfants(passengerData.infants) }}
            />
          </Col>
          <Col md="2">
            <Button variant="danger" style={{ width: "100%" }} type="submit">
              {searching ? "..." : "Search"}
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default ({
  tabs,
  // handleOnTabSelect,
  validated,
  activeTab,
  setActiveTab,
  activeTabStyle,
  tabStyle,
}) => {
  const handleOnTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="search-form-container">
      <Row style={{ marginLeft: "0px" }}>
        {tabs.map((item, index) => {
          return (
            <Col
              key={index}
              sm="2"
              xs="2"
              className="tab-container"
              style={activeTab.title === item.title ? activeTabStyle : tabStyle}
            >
              <a onClick={() => handleOnTabSelect(item)}>
                <Card.Footer
                  style={{}}
                  className="d-flex justify-content-center align-item-center"
                >
                  <img
                    src={
                      activeTab.title === item.title
                        ? ACTIVE_ICONS[index]
                        : ICONS[index]
                    }
                    style={{ width: "16px", marginRight: "4px" }}
                  />{" "}
                  <h6
                    style={{
                      fontSize: "15px",
                      // textAlign: 'center',
                    }}
                  >
                    {" "}
                    {item.title}
                  </h6>
                </Card.Footer>
              </a>
            </Col>
          );
        })}
      </Row>
      {/* </Container> */}
      <div id="input-container">
        <SearchForm />
      </div>
    </div>
  );
};

/**
 * <Form.Row>
                                <Form.Group as={Col} md="2" className="mr-1">
                                    <div className="d-flex justify-content-start">
                                        <div><i className="fa fa-map-marker"></i></div>
                                        <AutoCompleteInput
                                            suggestions={sources}
                                            setSelectedValue={setSourceText}
                                            labelText="From: "
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <AutoCompleteInput
                                        suggestions={destinations}
                                        setSelectedValue={setDestinationText}
                                            labelText="To: "
                                    />
                                </Form.Group>

                                <Form.Group
                                    controlid="validationCustom02"as={Col} md="3">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                <i className="fa fa-calendar"></i>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="Depature Date" type="date" />
                                        <FormControl placeholder="+ Add Return" />
                                    </InputGroup>
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <InputGroup className="mb-4" as={Col} md="2" controlid="validationCustom02">
                                    <FormControl
                                        style={{
                                            borderTopRightRadius: '4px',
                                            borderBottomRightRadius: '4px',
                                        }}
                                        id="inlineFormInputGroup"
                                        placeholder="Passengers"
                                        min="1"
                                        required
                                        type="number"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </InputGroup>

                                <Form.Group as={Col} md="2">
                                    <Button
                                        href="onthego/flightsearch"
                                        variant="danger"
                                        style={{ width: '100%' }}
                                        type="submit">
                                        {' '}
                                        Search{' '}
                                    </Button>
                                </Form.Group>
                            </Form.Row>
 */
