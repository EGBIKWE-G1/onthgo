import React, { Component, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
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
  Nav,
} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import InnerTabPanel from '../SearchTabFormSection/InnerTabPanel'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'
import GoogleMap from './GoogleMap'
import FlightSearchForm, { SearchForm } from '../FlightSearchForm'
import AutoCompleteInput from '../FlightSearchForm/AutoCompleteInput'

import fromIcon from '../../assets/img/icons/from.png'
import toIcon from '../../assets/img/icons/to.png'
import passengerIcon from '../../assets/img/icons/passenger-icon.png'

import airportJSON from '../../data/airport.json'
import { useSelector } from 'react-redux'
import DepartureInput from '../FlightSearchForm/DepartureInput'
import FormInput from '../FlightSearchForm/FormInput'

import './FlightSelectTab.css'
// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       backgroundColor: 'transparent',
//     },
//     backButton: {
//       marginRight: theme.spacing(1),
//     },
//     instructions: {
//       marginTop: theme.spacing(1),
//       marginBottom: theme.spacing(1),
//     },
//   }));

function FlightSelectTab() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    // <div>
    //     <Container className='p-4' as={Col} lg={12} style={{maxWidth: '100%' }}>
    <div>
      <Container
        id="flight-select-container"
        fluid
        style={{
          backgroundColor: '#043f7c',paddingBottom: "3rem",
        }}
      >
        <Card
          as={'div'}
          style={{ backgroundColor: 'transparent', border: 'none' }}
          body
        >
          <SearchForm />
        </Card>
      </Container>
      {/* <br/> */}
      <Container fluid>
        <Row>    
          <Col as={`div`} md={8}>
            <InnerTabPanel />
          </Col>
          <Col md={4} className="d-none d-lg-block">
            <GoogleMap />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FlightSelectTab
