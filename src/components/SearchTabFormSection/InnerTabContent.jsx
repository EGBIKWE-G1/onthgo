import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav, } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import arikairimg from '../../assets/img/icons/flightbrands/arikair.png'
import danaairimg from '../../assets/img/icons/flightbrands/danaair.png'

import ArrowDownIcon from '../../assets/img/icons/arrow-down.svg'
import ArrowFlightRightIcon from '../../assets/img/icons/flight-right.svg'

import { actionFlightSearchRequest, selectedFlightMerchant, selectedFlightOffer } from '../../redux/actions/flight'
import { setActiveFlightStep, STEP_FLIGHT_PASSENGER_DETAIL } from './../../redux/actions/stepper'
import { CalendarContainer } from 'react-datepicker'
import "./InnerTabContent.css"
import moment from 'moment'
import { formatMoney } from '../../utils/moneyFomat'
// import {formatMoney} from '../../utils/moneyFomat';
const MERCHANT_iCONS = [airpeaceimg, danaairimg, arikairimg, danaairimg]

export default () => {
  const dispatch = useDispatch()
  const flightOffers = useSelector(state => state.flight.data?.flightOffers)
  const merchants = useSelector((state) => state.merchant.merchants)
  const selectedMerchant = useSelector(state => state.flight.data?.selectedMerchant)
  console.log(flightOffers, "Flights")

  const handleSelectedFlightOffer = (offer) => {
    // dispatch(actionFlightSearchRequest())
    // setTimeout(() => {
    // dispatch(selectedFlightMerchant(merchant))
    //dispatch selected flight offer...
    dispatch(selectedFlightOffer(offer));
    dispatch(setActiveFlightStep(STEP_FLIGHT_PASSENGER_DETAIL))
    // }, 2000)
  }

  const arrowStyle = {
    container: {
      position: 'relative',

    },
    dot: {
      position: 'absolute',
      top: -2,
      width: '5px',
      height: '5px',
      background: '#FF0000',
      borderRadius: '50%'
    },
    line: {
      width: '84%',
      height: '1px',
      background: '#043F7C'
    },
    flight: {
      position: 'absolute',
      right: 0
    }
  }

  const renderArrowFlightComponent = () => (
    <div style={arrowStyle.container}>
      <div style={arrowStyle.line}>
        <div style={{ ...arrowStyle.dot, left: 'calc(100% - 90px)' }} />
        <div style={{ ...arrowStyle.dot, left: 'calc(100% - 70px)' }} />
      </div>
      <img src={ArrowFlightRightIcon} style={{ ...arrowStyle.flight, top: -7 }} />
    </div>
  )

  // console.log('selected merchant', selectedMerchant, 'bool', selectedMerchant.id )
  console.log('flight offers', flightOffers, flightOffers?.results)

  const aircrafts = flightOffers?.dictionaries?.aircraft;
  const carriers = flightOffers?.dictionaries?.carriers;
  const currencies = flightOffers?.dictionaries?.currencies;
  const locations = flightOffers?.dictionaries?.locations;

  return (
    <div>
      {flightOffers?.result?.map((offer, index) => {
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
        console.log('segments', segments, 'flight duration', flight_duration)
        return segments.map((segment, index) => (
          <Card
            key={index}
            /**${selectedMerchant?.id === merchant.id ? 'selected' : ''}*/
            className={`card-style `}
            onClick={() => handleSelectedFlightOffer(offer)}
            body
          >
            <Row>
              <Col md="4" as={`div`}>
                <h6 style={{ color: '#27D0AD', fontSize: '12px' }}>FASTEST </h6>
                <div className="d-flex mt-4 mb-4 ">
                  <Image
                    style={{
                      backgroundColor: 'white',
                      boxShadow: '0px 0px 5px 0px #ccc',
                    }}
                    width="50px"
                    src=""
                    alt=""
                    roundedCircle
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="mt-3" style={{ fontSize: '14px' }}>
                    {segment.aircraft}
                  </span>
                </div>
                <div
                  style={{
                    width: '100px',
                    background: 'rgba(63, 136, 197, 0.05)',
                    border: '0.5px solid #043F7C',
                    boxSizing: 'border-box',
                    borderRadius: '50px',
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '10px',
                      lineHeight: '13px',
                      color: '#043F7C',
                    }}
                  >
                    3 Changes
                  </span>{' '}
                  <img className="ml-1 mt-1" src={ArrowDownIcon} />{' '}
                </div>
              </Col>
              <Col md="5" style={{ alignSelf: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ alignSelf: 'center' }}>
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        color: '#000000',
                        lineHeight: '10px',
                      }}
                    >
                      {/* {merchant.source.take_off} */}{segment.departureTime}
                    </div>
                    <br />
                    <div
                      style={{
                        fontSize: '12px',
                        textAlign: 'center',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '10px',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {segment.departureIata}
                    </div>
                  </div>

                  <div
                    className="ml-2 mr-2"
                    style={{ width: '150px', justifyContent: 'center' }}
                  >
                    <div className="mb-1 text-center" style={{ fontSize: '12px', alignSelf: 'center' }}>
                      {flight_duration}
                    </div>

                    {renderArrowFlightComponent()}

                    <div className="mt-1 text-center" style={{ fontSize: '12px', alignSelf: 'center' }}>
                      {segment.numberOfStops} Stop - {segment.numberOfStops > 0 && segment.departureIata}
                    </div>
                  </div>

                  <div style={{ alignSelf: 'center' }}>
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                        lineHeight: '10px',
                        color: '#000000',
                      }}
                    >
                      {/* {merchant.destination.landing_time} */}{segment.arrivalTime}
                    </div>
                    <br />
                    <div
                      style={{
                        fontSize: '12px',
                        textAlign: 'center',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '10px',
                        color: 'rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {segment.arrivalIata}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3" style={{ alignSelf: 'center' }}>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    lineHeight: '31px',
                    textTransform: 'capitalize',
                    color: '#043F7C',
                  }}
                >
                  {formatMoney.format(grandTotal)}
                </span>
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#043F7C',
                  }}
                >
                  NGN
                </span>
              </Col>
            </Row>
          </Card>
        ))
      })}
    </div>
  )
}

/**
 * 
 *  <br />
      <Card body>
        <h6 style={{ color: '#50c878', fontSize: '12px' }}>FASTEST</h6>
        <Row>
          <Col md="3">
            <Image
              style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 5px 0px #ccc',
              }}
              width="50px"
              src={arikairimg}
              alt=""
              roundedCircle
            />
            &nbsp;&nbsp;<span style={{ fontSize: '14px' }}>Arik Air</span>
          </Col>
          <Col md="1" align="center">
            <span style={{ fontSize: '15px' }}>
              <b>00:30</b>
            </span>
            <br />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>LOS</span>
          </Col>
          <Col
            md="1"
            style={{ marginRight: '-45px', marginTop: '8px', color: '#043f7c' }}
          >
            <span class="material-icons">flight_takeoff</span>
          </Col>
          <Col md="3" align="center" style={{ marginTop: '-20px' }}>
            <span style={{ fontSize: '12px' }}>22h 30m</span>
            <hr style={{ color: '#043f7c' }} />
            <span style={{ fontSize: '12px' }}>1 Stop - DOH</span>
          </Col>
          <Col
            md="1"
            style={{ marginLeft: '-15px', marginTop: '8px', color: '#043f7c' }}
          >
            <span class="material-icons">flight_land</span>
          </Col>
          <Col md="2" align="center" style={{ marginLeft: '-65px' }}>
            <span>
              <b>11:50</b>
            </span>
            <br />
            <span style={{ fontSize: '12px' }}>LDN</span>
          </Col>
          <Col className="float-right" md="2">
            NGN 245,940
          </Col>
        </Row>
      </Card>
      <br />
      <Card body>
        <h6 style={{ color: '#50c878', fontSize: '12px' }}>FASTEST</h6>
        <Row>
          <Col md="3">
            <Image
              style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 5px 0px #ccc',
              }}
              width="50px"
              src={danaairimg}
              alt=""
              roundedCircle
            />
            &nbsp;&nbsp;<span style={{ fontSize: '14px' }}>Dana Air</span>
          </Col>
          <Col md="1" align="center">
            <span style={{ fontSize: '15px' }}>
              <b>00:30</b>
            </span>
            <br />
            <span style={{ fontSize: '12px', textAlign: 'center' }}>LOS</span>
          </Col>
          <Col
            md="1"
            style={{ marginRight: '-45px', marginTop: '8px', color: '#043f7c' }}
          >
            <span class="material-icons">flight_takeoff</span>
          </Col>
          <Col md="3" align="center" style={{ marginTop: '-20px' }}>
            <span style={{ fontSize: '12px' }}>22h 30m</span>
            <hr style={{ color: '#043f7c' }} />
            <span style={{ fontSize: '12px' }}>1 Stop - DOH</span>
          </Col>
          <Col
            md="1"
            style={{ marginLeft: '-15px', marginTop: '8px', color: '#043f7c' }}
          >
            <span class="material-icons">flight_land</span>
          </Col>
          <Col md="2" align="center" style={{ marginLeft: '-65px' }}>
            <span>
              <b>11:50</b>
            </span>
            <br />
            <span style={{ fontSize: '12px' }}>LDN</span>
          </Col>
          <Col className="float-right" md="2">
            NGN 245,940
          </Col>
        </Row>
      </Card>
 */
