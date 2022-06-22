import React, { Component, useState, select, Switch } from 'react'
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
} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
import ButtonToggle from './ButtonToggle'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setActiveFlightStep, STEP_FLIGHT_SELECT } from '../../redux/actions/stepper'

const styles = {
  placeholderTextStyle: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',
    color: 'rgba(0, 0, 0, 0.35)',
  },
}

function ConfirmationFlightDetailsCard() {
  const dispatch = useDispatch()
  const selectedFlightDetail = useSelector(
    (state) => state.flight.data?.selectedFlightDetail,
  )
  const ticketOption = useSelector((state) => state.flight.data.ticketOption)

  const handleClick = () => {
    dispatch(setActiveFlightStep(STEP_FLIGHT_SELECT))
  }

  const flightOffers = useSelector(state => state.flight.data?.flightOffers)
  const offer = useSelector(state => state.flight.data.selectedFlightOffer)

  const aircrafts = flightOffers?.dictionaries?.aircraft;
  const carriers = flightOffers?.dictionaries?.carriers;
  const currencies = flightOffers?.dictionaries?.currencies;
  const locations = flightOffers?.dictionaries?.locations;

  const basePrice = offer.price.base;
  const grandTotal = offer.price.grandTotal;
  const item = offer.itineraries[0]
  const flight_duration = item.duration;
  const segments = item.segments.map(segment => {
    const aircraft = aircrafts[segment.aircraft.code];
    const carrier = carriers[segment.carrierCode];
    const segmentDuration = segment.duration;
    const numberOfStops = segment.numberOfStops;
    const arrivalIata = segment.arrival.iataCode;
    const arrival = locations[segment.arrival.iataCode];
    const arrivalTime = moment(segment.arrival.at).format("HH:MM");
    const departureIata = segment.departure.iataCode;
    const departure = locations[segment.departure.iataCode];
    const departureTime = moment(segment.departure.at).format("HH:MM");
    const segmentNumber = segment.number;
    const blacklistedInEU = segment.blacklistedInEU;
    return {
      aircraft,
      carrier,
      segmentDuration,
      numberOfStops,
      arrival,
      arrivalIata,
      arrivalTime,
      departure,
      departureIata,
      departureTime,
      segmentNumber,
      blacklistedInEU,

    }
  })

  return (
    <div>
      {/* <Card style={{backgroundColor: 'transparent', border: 'none'}}> */}
      <div style={{ backgroundColor: 'transparent', padding: '20px' }}>
        <p style={{ color: '#043f7c' }}>
          {' '}
          <b>Flight Details</b>{' '}
          <span style={{ float: 'right', cursor: 'pointer' }} onClick={handleClick}>
            Edit &nbsp;
            <i className="fa fa-pencil"></i>
          </span>
        </p>
        <hr style={{ color: '#043f7c', borderTop: '1px dashed' }} />
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>Flight Type: </p>
          </Col>
          <Col md={6}>
            <p>{selectedFlightDetail?.flightType} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>
              Flying From:{' '}
            </p>
          </Col>
          <Col md={6}>
            <p>({selectedFlightDetail?.origin}){selectedFlightDetail?.originText} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>
              Flying To:{' '}
            </p>
          </Col>
          <Col md={6}>
            <p>({selectedFlightDetail?.destination}){selectedFlightDetail?.destinationText} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>
              Departure Date:{' '}
            </p>
          </Col>
          <Col md={6}>
            <p>{moment(selectedFlightDetail?.departureDate).format('ll')} </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>
              Passenger:{' '}
            </p>
          </Col>
          <Col md={6}>
            <p>
              {selectedFlightDetail?.adult} Adult,{' '}
              {selectedFlightDetail?.children} Children,{' '}
              {selectedFlightDetail?.infants} Infant{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p style={styles.placeholderTextStyle}>
              Travel Class:{' '}
            </p>
          </Col>
          <Col md={6}>
            <p>{selectedFlightDetail?.carbinType} </p>
          </Col>
        </Row>
      </div>
      {/*  */}

      {/* </Card> */}
    </div>
  )
}

export default ConfirmationFlightDetailsCard
