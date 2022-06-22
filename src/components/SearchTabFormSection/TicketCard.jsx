import React, { Component, useEffect } from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap'
// import bagimg from '../../assets/img/icons/bag.png'
// import Switch from 'react-switch'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import { useSelector } from 'react-redux';
import { selectedTicketOption } from './../../redux/actions/flight';

export default () => {
  let currencyFormatter = Intl.NumberFormat('en-US');

  const numOfPassengers = useSelector(
    (state) => state.flight.data.selectedFlightDetail?.num_passengers,
  )

  const selectedTicketOption = useSelector(
    (state) => state.flight.data.ticketOption,
  )
  const offer = useSelector(state => state.flight.data.selectedFlightOffer)

  const basePrice = offer.price.base;
  const grandTotal = offer.price.grandTotal;

  // const calculateFlightCost = (price, numOfPassengers) => {
  //   let localPrice = 1
  //     if(price !== null) localPrice = price.replace(/,/g,'')
  //     else localPrice = 1

  //    return currencyFormatter.format(parseFloat(localPrice) * numOfPassengers)
  // }

  useEffect(() => {
    console.log('changes has occured for ticket option', selectedTicketOption)
  }, [selectedTicketOption])

  return (
    <div>
      {selectedTicketOption && <Card>
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            border: 'none',
            boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '5px',
          }}
        >
          {/* <p style={{color: '#043f7c'}}> <b>Selected Outbound</b> </p>
                        <hr style={{color: '#043f7c'}}/> */}
          <Card
            body
            style={{
              marginLeft: '-20px',
              marginRight: '-20px',
              borderRadius: 'initial',
              border: 'none',
            }}
          >
            <Row>
              <Col md="12">
                {/* <h6 style={{color: '#043f7c'}}>Ticket (1 Adult)</h6>
                                    <br/> */}
                <Row>
                  <Col md="6">
                    <span style={{ fontSize: '16px', display: 'flex', justifyContent: 'flex-start' }}>
                      Tickets ({numOfPassengers})
                    </span>
                  </Col>
                  <Col md='1'>
                    <span>&times;</span>
                  </Col>
                  <Col md="5">
                    <span style={{ fontSizexx: '13.4px' }}>
                      &#8358; {grandTotal}
                    </span>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md="8">
                    <h5 style={{ color: '#043f7c' }}>
                      {' '}
                      <b>Total (taxes included)</b>{' '}
                    </h5>
                  </Col>
                  <Col md="4">
                    <h5 style={{ color: '#043f7c' }}>
                      {' '}
                      <b>&#8358; {grandTotal}</b>{' '}
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </Card>}
    </div>
  )
}
