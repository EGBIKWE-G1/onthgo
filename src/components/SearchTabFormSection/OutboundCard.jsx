import React, { Component } from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap'

import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import CheckIcon from '../../assets/img/icons/check.svg'
import DropdownIconSVG from '../../assets/img/dropdown-icon.svg'
import { useSelector } from 'react-redux'
import moment from 'moment'


export default () => {
  const selectedFlightDetail = useSelector(
    (state) => state.flight.data.selectedFlightDetail,
  )
  const selectedFlightMerchant = useSelector(
    (state) => state.flight.data.selectedMerchant,
  )
  const flightOffers = useSelector(state => state.flight.data.flightOffers);
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
    const departureTime = moment(segment.departure.at).format("llll");
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
      <Card>
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            border: 'none',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '5px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div
              style={{ fontWeight: 'bold', fontSize: '14px', color: '#043F7C' }}
            >
              {' '}
              <span>
                <img src={CheckIcon} />
              </span>{' '}
              SELECTED OUTBOUND{' '}
            </div>
            <div style={{ cursor: 'pointer' }}>
              <img src={DropdownIconSVG} />{' '}
            </div>
          </div>
          {/* <hr style={{color: '#043f7c'}}/> */}
          <Card body style={{ border: 'none' }}>
            <Row>
              <Col md="12">
                <h6 style={{ color: '#043f7c' }}>
                  {segments[0].departureTime}
                </h6>

                <Row>
                  <Col md="6">
                    <span style={{ fontSize: '12px' }}>
                      {selectedFlightDetail?.origin}
                    </span>
                  </Col>
                  {/* <Col md='2'>
                                            <span style={{fontSize: '13.4px'}}>-</span>
                                        </Col> */}
                  <Col md="6">
                    <span style={{ fontSize: '13.4px' }}>
                      {selectedFlightDetail?.destination}
                    </span>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col md="8">
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
                    &nbsp;&nbsp;{segments[0].carrier} ~ {segments[0].aircraft}
                  </Col>
                  <Col md="4" style={{ marginTop: '11px' }}>
                    <span style={{ fontSize: '14px' }}>
                      {flight_duration} • 2 changes
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </Card>
    </div>
  )
}
