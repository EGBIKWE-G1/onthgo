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
// import bagimg from '../../assets/img/icons/bag.png'
// import Switch from 'react-switch'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import { useSelector } from 'react-redux'
import { formatMoney } from '../../utils/moneyFomat'

export default () => {
  let currencyFormatter = Intl.NumberFormat('en-US');

  const numOfPassengers = useSelector(
    (state) => state.flight.data.selectedFlightDetail?.num_passengers,
  )

  const ticketOption = useSelector(state => state.flight.data.ticketOption)

  const calculateFlightCost = (price, numOfPassengers) => {
    if (price) {
      const localPrice = price.replace(/,/g, '')
      return formatMoney.format(parseFloat(localPrice) * numOfPassengers);
    } else {
      return 0;
    }
  }

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
                  <Col md="8">
                    <span style={{ fontSizexx: '13.4px' }}>
                      Tickets ({numOfPassengers})
                    </span>
                  </Col>
                  <Col md="4">
                    <span style={{ fontSizexx: '13.4px' }}>
                      &#8358; {calculateFlightCost(ticketOption?.price, numOfPassengers)}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <span style={{ fontSizexx: '13.4px' }}>Service Fee</span>
                  </Col>
                  <Col md="4">
                    <span style={{ fontSizexx: '13.4px' }}>&#8358; 18,993</span>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md="8">
                    <p style={{ color: '#043f7c' }}>
                      {' '}
                      <b>Total (taxes included)</b>{' '}
                    </p>
                  </Col>
                  <Col md="4">
                    <h6 style={{ color: '#043f7c' }}>
                      {' '}
                      <b>&#8358;{calculateFlightCost(ticketOption?.price, numOfPassengers)}</b>{' '}
                    </h6>
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
