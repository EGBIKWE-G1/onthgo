import React, { Component, useState, select } from "react";
import {
  Jumbotron,
  Modal,
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
import TravelInsuranceImg from "../../assets/img/icons/onthego/travelinsurance.png";
import { useDispatch, useSelector } from "react-redux";
import {
  navigateToFlightInsurance,
  navigateToFlightBooking,
} from "./../../redux/actions/flight";
import {
  setActiveFlightStep,
  setActiveInsuranceStep,
  STEP_FLIGHT_CONFIRMATION,
} from "./../../redux/actions/stepper";
import Switch from "react-switch";
import flagIcon from "../../assets/img/icons/ngn-flag.png";
import "./PassengerCard.css";
import FormTitle from "./../FormTitle/index";
import { useForm } from "react-hook-form";
import CountryJson from "./../../data/countries.json";

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const passengerStyle = {
  container: {
    background: "#FFFFFF",
    boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "40px",
  },
};

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  const handleProceedFlightInsurance = () => {
    props.setModalShow(false);
    dispatch(navigateToFlightInsurance());
    dispatch(setActiveInsuranceStep(0));
  };

  const handleProceedFlightSkip = () => {
    props.setModalShow(false);
    dispatch(setActiveFlightStep(STEP_FLIGHT_CONFIRMATION));
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-5"
    >
      <Modal.Body className="p-5">
        <br />
        <h4 style={{ color: "#043f7c" }}>
          {" "}
          <b>Buy Travel Insurance</b>{" "}
        </h4>
        <br />

        <Row>
          <Col sm={7} className="mb-2">
            {/* <img width='150px' src={TravelInsuranceImg} alt=""/> */}
            <p className="d-flex">
              <Form.Check />
              {"  "}General (Business / Tourism)
            </p>
            <p className="d-flex">
              <Form.Check />
              {"  "}Pilgrimage Protection
            </p>
            <p className="d-flex">
              <Form.Check />
              {"  "}Student Protection
            </p>
            <br />

            <Row>
              <Col md="4">
                <Button
                  variant="outline-danger"
                  onClick={handleProceedFlightSkip}
                  style={{ width: "100%" }}
                >
                  Skip
                </Button>
              </Col>
              <Col md="4">
                <Button
                  variant="danger"
                  onClick={handleProceedFlightInsurance}
                  style={{ width: "100%" }}
                >
                  {" "}
                  Proceed
                </Button>
              </Col>
            </Row>
          </Col>
          <Col sm={5} className="mb-2">
            <img width="230px" src={TravelInsuranceImg} alt="" />
          </Col>
        </Row>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
}

function PassengerCard({
  id,
  setPassengerDetail,
  passengerDetail,
  modalShow,
  setModalShow,
  isInsurance,

  setDobDay,
  setDobMonth,
  setDobYear,
  dobDay,
  dobMonth,
  dobYear,
  handleNextReviewJourneyDetail,
  handlePrevious,
  passengerId,
  passengerFormArray,
  setPassengerFormArray,
}) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [adultDateError, setAdultDateError] = useState("");
  const [childrenDateError, setChildrenDateError] = useState("");
  const [infantDateError, setInfantDateError] = useState("");

  const [checked, setChecked] = React.useState(false);
  const [useSameInfo, setUseSameInfo] = React.useState(false);

  const passengerDetailSelect = useSelector(
    (state) => state.flight.data?.passenger
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
    setValue,
    formState,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleSwitchChange = (checked) => {
    setChecked(checked);
  };

  const handleUseSameInfoChange = (checked) => {
    setUseSameInfo(checked);
  };
  console.log({ passengerFormArray });

  React.useEffect(() => {
    if (useSameInfo) {
      setPassengerDetail(passengerDetailSelect);
      setSelectedTitle(passengerDetailSelect?.title.toLowerCase());
      // console.log(
      //   'passenger detail datepicker value',
      //   passengerDetailSelect.dob?.split('-'),
      // )
      let dobArray = passengerDetailSelect.dob?.split("-");
      // setDobDay(dobArray[2])
      // setDobMonth(dobArray[1])
      // setDobYear(dobArray[0])
      console.log("dobArray", dobArray[0]);
    } else {
      setPassengerDetail({});
      setSelectedTitle("");
    }
  }, [useSameInfo]);

  const onSubmit = (e) => {
    e.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   console.log("form validity", form.checkValidity());
    // }
    // setValidated(true);

    //
    // setModalShow(true)

    handleNextReviewJourneyDetail();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetail({ ...passengerDetail, [name]: value });
  };
  const handlePassengerFormArrayChange = (key, idx) => (evt) => {
    console.log("event", evt.target.name, evt.target.value);
    const { name, value } = evt.target;
    let selectedCountry = undefined;

    const updatedPassengerFormInput = passengerFormArray[key].map(
      (passengerInput, pidx) => {
        if (idx !== pidx) return passengerInput;
        if (name === "country") {
          selectedCountry = CountryJson[value];
          return { ...passengerInput, ["country"]: selectedCountry };
        }
        return { ...passengerInput, [name]: value };
      }
    );

    console.log("passenger", passengerFormArray);
    setPassengerFormArray({
      ...passengerFormArray,
      [key]: updatedPassengerFormInput,
    });
  };

  const getYearList = () => {
    const theDates = [];
    let from = 1970;
    let currentYear = new Date().getFullYear();

    for (let x = from; x < currentYear; x += 1) {
      theDates.push(x);
    }

    return theDates;
  };
  // console.log("CountryJson", CountryJson);

  const handleAdultDateofBirth = (e, person) => {
    const dateOfBirth = e.target.value;
    const thisYear = new Date().getFullYear();
    const userdob = dateOfBirth.split("-");
    const dob = userdob[0];
    const age = thisYear - dob;

    if (person === "adults") {
      if (age <= 18 || age > 100) {
        //18 years - 100 years
        setAdultDateError("must be older than 18yrs and below 100yrs");
        return true;
      } else {
        setAdultDateError("");
        return false;
      }
    }
    if (person === "children") {
      if (age < 2 || age > 12) {
        //3years - 12years
        setChildrenDateError("must be older than 2 years and below 12yrs");
        return true;
      } else {
        setChildrenDateError("");
        return false;
      }
    }
    if (person === "infant") {
      if (age > 2) {
        //0-2 years
        setInfantDateError("must not be older than 2 years.");
        return true;
      } else {
        setInfantDateError("");
        return false;
      }
    }
  };
  return (
    <div>
      {/* The Passenger Story begins */}
      <Card style={passengerStyle.container}>
        <p style={{ color: "#043f7c" }}>
          {" "}
          <b>Main Passenger</b>{" "}
        </p>
        <hr style={{ color: "#043f7c" }} />
        <form id={id} onSubmit={onSubmit}>
          <Form.Row>
            {/* Adult */}
            <div className="adult">
              <hr />
              {passengerFormArray.adults?.map((adult, idx) => (
                <Row key={idx}>
                  {/* <FormTitle
                      title={selectedTitle}
                      setTitle={setSelectedTitle}
                      setPassengerDetail={setPassengerDetail}
                      passengerDetail={passengerDetail}
                    /> */}

                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>
                      {" "}
                      <h6>
                        First Name <span style={{ color: "red" }}>* </span>
                        {errors?.firstName && (
                          <span className="text-danger fw-bold ">
                            {" "}
                            <p>{errors.firstName.message}</p>
                          </span>
                        )}
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      // {...register("firstName", { required: "First Name is required" })}
                      name="firstName"
                      value={adult.firstName}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Last Name <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={adult.lastName}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                      // {...register("lastName", { required: "Last Name is required" })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Middle Name <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="middleName"
                      value={adult.middleName}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                      // {...register("middleName", {
                      //   required: "Middle Name is required",
                      // })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Date of Birth{" "}
                        <span style={{ color: "red" }}>
                          *
                          {adultDateError &&
                            " (must be older than 18yrs and below 100yrs)"}
                        </span>
                      </h6>
                    </Form.Label>
                    <Row>
                      <Col md="12">
                        <Form.Control
                          required
                          type="date"
                          name="dateOfBirth"
                          value={adult.dateofBirth}
                          onChange={(e) => {
                            handlePassengerFormArrayChange("adults", idx);
                            handleAdultDateofBirth(e, "adults");
                          }}
                        />
                      </Col>
                    </Row>

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Gender <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Row>
                      <Col md="12">
                        <div class="form-group">
                          <select
                            name="gender"
                            id="gender"
                            className="form-control"
                            onChange={handlePassengerFormArrayChange(
                              "adults",
                              idx
                            )}
                          >
                            <option></option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                          </select>
                        </div>
                      </Col>
                    </Row>

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Email Address <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="email"
                      value={adult.email}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                      // {...register("email", { required: "Email is required" })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>
                      {" "}
                      <h6>
                        Phone Number <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Append>
                        <Button
                          style={{
                            borderTopLeftRadius: "3px",
                            borderBottomLeftRadius: "3px",
                            border: "0.5px solid #C6C6C6",
                          }}
                          variant="transparent"
                        >
                          {/* <i class="nigeria flag"></i> */}
                          <img src={flagIcon} /> +{adult?.country?.dial_code}
                        </Button>
                      </InputGroup.Append>
                      <Form.Control
                        required
                        type="text"
                        name="phoneNumber"
                        value={adult.phoneNumber}
                        onChange={handlePassengerFormArrayChange("adults", idx)}
                        // {...register("phoneNumber", {
                        //   required: "Phone Number is required",
                        // })}
                      />
                      <Form.Control.Feedback type="invalid">
                        {" "}
                        Enter a valid phone number.{" "}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Address 1 <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="address1"
                      value={adult?.address1}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                      // {...register("address1", {
                      //   required: "Address 1 is required",
                      // })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Address 2{" "}
                        <span style={{ color: "#043f7c" }}>(Optional)</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address2"
                      value={adult?.address2}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        City <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="city"
                      value={adult?.city}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Postal Code <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="postalCode"
                      value={adult?.postalCode}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                      // {...register("postalCode", {
                      //   required: "Poster Code is required",
                      // })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        State / Region{" "}
                        <span style={{ color: "#043f7c" }}>(Optional)</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={adult?.state}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                      // {...register("state", {
                      //   required: "State is required",
                      // })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Country of Residence{" "}
                        <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    {/* <Form.Control
                      required
                      type="text"
                      name="country"
                      value={adult?.country}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                    /> */}

                    <select
                      className="form-control"
                      name="country"
                      value={CountryJson.findIndex(
                        (c) => c.dial_code == adult?.country?.dial_code
                      )}
                      onChange={handlePassengerFormArrayChange("adults", idx)}
                    >
                      <option>Select Country</option>
                      {CountryJson.map((country, index) => (
                        <option key={index} value={index}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
              ))}
            </div>
            {/*./Adult */}
            {/* Children */}
            <div className="children">
              {passengerFormArray.children.length > 0 && <hr />}
              {passengerFormArray.children?.map((child, idx) => (
                // <div style={{ border: "1px solid black", borderRadius: "4px" }}>
                <Row key={idx}>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>
                      {" "}
                      <h6>
                        First Name <span style={{ color: "red" }}>* </span>
                        {errors?.firstName && (
                          <span className="text-danger fw-bold ">
                            {" "}
                            <p>{errors.firstName.message}</p>
                          </span>
                        )}
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      // {...register("firstName", { required: "First Name is required" })}
                      name="firstName"
                      value={child.firstName}
                      onChange={handlePassengerFormArrayChange("children", idx)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Last Name <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={child?.lastName}
                      onChange={handlePassengerFormArrayChange("children", idx)}
                      // {...register("lastName", { required: "Last Name is required" })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Middle Name <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="middleName"
                      value={child?.middleName}
                      onChange={handlePassengerFormArrayChange("children", idx)}
                      // {...register("middleName", {
                      //   required: "Middle Name is required",
                      // })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Date of Birth{" "}
                        <span style={{ color: "red" }}>
                          *{" "}
                          {childrenDateError &&
                            " (must be older than 3yrs and below 12yrs)"}
                        </span>
                      </h6>
                    </Form.Label>
                    <Row>
                      <Col md="12">
                        <Form.Control
                          required
                          type="date"
                          name="dateOfBirth"
                          value={child.dateofBirth}
                          onChange={(e) => {
                            handlePassengerFormArrayChange("children", idx);
                            handleAdultDateofBirth(e, "children");
                          }}
                        />
                      </Col>
                    </Row>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Gender <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Row>
                      <Col md="12">
                        <div class="form-group">
                          <select
                            name="gender"
                            id="gender"
                            className="form-control"
                            onChange={handlePassengerFormArrayChange(
                              "children",
                              idx
                            )}
                          >
                            <option></option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                // </div>
              ))}
            </div>
            {/*./Children */}
            {/* Infants */}
            <div className="infant">
              {passengerFormArray.infants.length > 0 && <hr />}
              {passengerFormArray.infants?.map((infant, idx) => (
                <Row key={idx}>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>
                      {" "}
                      <h6>
                        First Name <span style={{ color: "red" }}>* </span>
                        {errors?.firstName && (
                          <span className="text-danger fw-bold ">
                            {" "}
                            <p>{errors.firstName.message}</p>
                          </span>
                        )}
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      // {...register("firstName", { required: "First Name is required" })}
                      name="firstName"
                      value={infant.firstName}
                      onChange={handlePassengerFormArrayChange("infants", idx)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Last Name <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={infant.lastName}
                      onChange={handlePassengerFormArrayChange("infants", idx)}
                      // {...register("lastName", { required: "Last Name is required" })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Middle Name <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="middleName"
                      value={infant.middleName}
                      onChange={handlePassengerFormArrayChange("infants", idx)}
                      // {...register("middleName", {
                      //   required: "Middle Name is required",
                      // })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Date of Birth{" "}
                        <span style={{ color: "red" }}>
                          *{" "}
                          {infantDateError &&
                            " (must not be older than 2 years.)"}
                        </span>
                      </h6>
                    </Form.Label>
                    <Row>
                      <Col md="12">
                        <Form.Control
                          required
                          type="date"
                          name="dateOfBirth"
                          value={infant.dateofBirth}
                          onChange={(e) => {
                            handlePassengerFormArrayChange("infant", idx);
                            handleAdultDateofBirth(e, "infant");
                          }}
                        />
                      </Col>
                    </Row>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>
                      {" "}
                      <h6>
                        Gender <span style={{ color: "red" }}>*</span>
                      </h6>
                    </Form.Label>
                    <Row>
                      <Col md="12">
                        <div class="form-group">
                          <select
                            name="gender"
                            id="gender"
                            className="form-control"
                            onChange={handlePassengerFormArrayChange(
                              "infants",
                              idx
                            )}
                          >
                            <option></option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
              ))}
            </div>
            {/*./Infacts */}

            <br />
            <Row>
              <Col md="2">
                <Switch
                  onChange={handleSwitchChange}
                  checked={checked}
                  offColor="#DCDFE8"
                  onColor="#043f7c"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </Col>
              <Col md="10">
                <span style={{ fontSize: "13.4px" }}>
                  Create an account for faster booking.
                  <a
                    variant="primary"
                    onClick={() =>
                      !isInsurance
                        ? setModalShow(true)
                        : dispatch(navigateToFlightBooking())
                    }
                  >
                    {" "}
                    <b style={{ color: "red" }}>See Benefits</b>{" "}
                  </a>
                  {!isInsurance && (
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      setModalShow={setModalShow}
                    />
                  )}
                </span>
              </Col>
              <Col md="12">
                <InputGroup
                  className="mb-3 px-3"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <Form.Check aria-label="Checkbox for following text input" />{" "}
                  &nbsp;&nbsp;{" "}
                  <span style={{ fontSize: "14px", marginTop: "4px" }}>
                    Send me travel offers, trip reminders &amp; other updates by
                    email
                  </span>
                </InputGroup>
              </Col>
              <Col md="3">
                <Button
                  onClick={handlePrevious}
                  variant="secondary"
                  style={{ width: "100%", backgroundColor: "#043f7c" }}
                  type="button"
                >
                  Previous{" "}
                </Button>
              </Col>
              <Col md="9">
                <Button
                  variant="danger"
                  style={{ width: "100%" }}
                  type="submit"
                  form={passengerId}
                >
                  Review Journey Details{" "}
                </Button>
              </Col>
            </Row>
          </Form.Row>
        </form>
      </Card>
    </div>
  );
}

export default PassengerCard;
