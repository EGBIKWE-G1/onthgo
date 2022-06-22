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
import InputGroup from 'react-bootstrap/InputGroup'
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'
import SexButtonGroup from '../SexButtonGroup/SexButtonGroups'
import FormSection from '../FormSection/FormSections'
import MultiStep from 'react-multistep'
import VehicleFormSections from '../FormSection/VehicleFormSections'
// const MultiStep = import from 'react-multistep'
// import VehicleForm from '../FormSection/VehicleFormSections'
import AdditionalCover from '../FormSection/AdditionalCover'
import PassengerCard from './PassengerCard'
import OutboundCard from './OutboundCard'
import TicketCard2 from './TicketCard2'
import { useDispatch } from 'react-redux'
import { navigateToFlightBooking, setFlightInsurerDetail } from './../../redux/actions/flight';
import { setActiveFlightStep, setActiveInsuranceStep, STEP_FLIGHT_CONFIRMATION, STEP_INSURANCE_SELECT } from '../../redux/actions/stepper'

const InsurerDetailsTab = () => {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false)
  const [insurerDetail, setInsurerDetail] = React.useState({
    dob: '1999-01-01',
  })

  const handleNextReviewDetail = () => {
    dispatch(setFlightInsurerDetail(insurerDetail))
    dispatch(navigateToFlightBooking())
    dispatch( setActiveFlightStep(STEP_FLIGHT_CONFIRMATION) )
  
  }

  const handlePrevious = () => {
    dispatch( setActiveInsuranceStep(STEP_INSURANCE_SELECT ) )
  }

  return (
    <div>
      <Container className="" style={{ maxWidth: '100%' }}>
        {/* <MultiStep /> */}
        <Col lg={12}>
          <Row>
            <Col md={8}>
              <Card>
                <PassengerCard
                  setPassengerDetail={setInsurerDetail}
                  passengerDetail={insurerDetail}
                  isInsurance={true}
                />
              </Card>
              <br />
              <InputGroup
                className="mb-3"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />{' '}
                &nbsp;&nbsp;{' '}
                <span style={{ fontSize: '14px', marginTop: '4px' }}>
                  Send me travel offers, trip reminders &amp; other updates by
                  email
                </span>
              </InputGroup>
              <br />
              <Row>
                <Col md="3">
                <Button
                onClick={handlePrevious}
                variant="secondary"
                style={{ width: '100%' }}
                type="button"
              >
                Previous{' '}
              </Button>
                </Col>
                <Col md="9">
                <Button
                onClick={handleNextReviewDetail}
                variant="danger"
                style={{ width: '100%' }}
                type="button"
              >
                Review Details{' '}
              </Button>
                </Col>
              </Row>
            </Col>

            <Col md={4}>
              <OutboundCard />
              <br />
              <TicketCard2 />
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default InsurerDetailsTab
