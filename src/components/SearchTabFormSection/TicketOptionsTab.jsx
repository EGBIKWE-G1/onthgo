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
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'
import SexButtonGroup from '../SexButtonGroup/SexButtonGroups'
import FormSection from '../FormSection/FormSections'
import MultiStep from 'react-multistep'
import VehicleFormSections from '../FormSection/VehicleFormSections'
// const MultiStep = import from 'react-multistep'
import VehicleForm from '../FormSection/VehicleFormSections'
import AdditionalCover from '../FormSection/AdditionalCover'
import Covid19Content from './Covid19Content'
// import CardSelect from './CardSelectButton'
import CardSelectButton from './CardSelectButton'
import BaggageCard from './BaggageCard'
import OutboundCard from './OutboundCard'
import TicketCard from './TicketCard'
import { useDispatch } from 'react-redux'
import {
  setActiveFlightStep,
  STEP_FLIGHT_PASSENGER_DETAIL,
  STEP_FLIGHT_SELECT,
} from './../../redux/actions/stepper'
import { actionFlightSearchRequest } from '../../redux/actions/flight'
import { useSelector } from 'react-redux'

const ticketOptions = [
  {
    id: 1,
    title: 'First',
    price: '561,083',
  },
  {
    id: 2,
    title: 'Business',
    price: '285,940',
  },
  {
    id: 3,
    title: 'Economy',
    price: '199,145',
  },
]

const TicketOptionsTab = () => {
  const dispatch = useDispatch()
  const selectedTicket = useSelector(state => state.flight.data?.ticketOption)

  const handleNextPassengerDetail = () => {

      dispatch(setActiveFlightStep(STEP_FLIGHT_PASSENGER_DETAIL))

  }

  const handlePrevious = () => {
    dispatch(setActiveFlightStep(STEP_FLIGHT_SELECT))
  }

  return (
    <div>
      {/* <Container className='' style={{ maxWidth: '100%'}}> */}
      {/* <MultiStep /> */}
      <Col lg={12} className="pl-5 pr-5">
        <Row>
          <Col md={8}>
            <Covid19Content />
            <br />
            <CardSelectButton ticketOptions={ticketOptions} />
            <br />
            <BaggageCard />
            <br />
            <Row style={{margin: '0px', padding: '0px'}}>
              <Col md="3">
                <Button
                  variant="secondary"
                  style={{ width: '100%', backgroundColor: '#043f7c' }}
                  type="button"
                  onClick={handlePrevious}
                >
                  Previous{' '}
                </Button>
              </Col>
              <Col md="9">
                <Button
                  variant="danger"
                  style={{ width: '100%' }}
                  type="button"
                  onClick={handleNextPassengerDetail} 
                  disabled={selectedTicket == null}
                >
                  Go To Passenger Details{' '}
                </Button>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <OutboundCard />
            <br />
            <TicketCard />
          </Col>
        </Row>
      </Col>
      {/* </Container> */}
    </div>
  )
}

export default TicketOptionsTab
