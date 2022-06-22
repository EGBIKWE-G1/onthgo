import React from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Button,
  Card,
} from 'react-bootstrap'
import axamansardimg from '../../assets/img/icons/insurance/axamansard.png'
import { useDispatch } from 'react-redux'
import { setSelectedFlightInsuranceType } from '../../redux/actions/flight'
import {
  setActiveInsuranceStep,
  STEP_INSURER_DETAIL,
} from '../../redux/actions/stepper'

const INSURANCES = [
  {
    id: 1,
    title: 'Axa Mansard Insurance',
    tag: 'CHEAPEST',
    type: 'General Protection (Business / Tourism)',
    cost: '16,990',
  },
  {
    id: 2,
    title: 'Wapic Insurance',
    tag: 'SECOND CHEAPEST',
    type: 'General Protection (Business / Tourism)',
    cost: '15,000',
  },
  {
    id: 1,
    title: 'Allianz Nigerian Insurance',
    tag: 'THIRD CHEAPEST',
    type: 'General Protection (Business / Tourism)',
    cost: '25,620',
  },
  {
    id: 1,
    title: 'Cornerstone Insurance',
    tag: 'FOURTH CHEAPEST',
    type: 'General Protection (Business / Tourism)',
    cost: '12,002',
  },
]

export default () => {
  const dispatch = useDispatch()

  const handleSelectedInsuranceType = (insurance) => {
    dispatch(setSelectedFlightInsuranceType(insurance))
    dispatch(setActiveInsuranceStep(STEP_INSURER_DETAIL))
  }

  return (
    <>
      {INSURANCES.map((insurance, index) => (
        <Card
          body
          key={index} 
          className="mb-2" 
          style={{
            cursor: 'pointer',
            background: ' #FFFFFF',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px;',
          }}
          onClick={() => handleSelectedInsuranceType(insurance)}
        >
          <Row>
            <Col md="3">
              <h6
                className="mb-2"
                style={{
                  color: '#27D0AD',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                {insurance.tag}
              </h6>
              <Image
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0px 0px 5px 0px #ccc',
                }}
                width="50px"
                src={axamansardimg}
                alt=""
                roundedCircle
              />

              <Button
                variant="primary"
                className="mt-3"
                style={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  background: 'rgba(63, 136, 197, 0.05)',
                  border: '0.5px solid #043F7C',
                  color: '#043F7C',
                  fontWeight: 'bold',
                }}
                type="submit"
              >
                {' '}
                View Coverage{' '}
              </Button>
            </Col>
            <Col md="3" style={{ marginTop: '12px', alignSelf: 'center' }}>
              <div style={{ fontSize: '14px' }}>{insurance.title}</div>
            </Col>
            <Col
              md="3"
              style={{
                marginRight: '-45px',
                color: '#043f7c',
                marginTop: '8px',
                alignSelf: 'center',
              }}
            >
              <div style={{ fontSize: '14px' }}>{insurance.type}</div>
            </Col>
            <Col
              md="3"
              style={{
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  lineHeight: '31px',
                  textTransform: 'capitalize',
                  color: '#043F7C',
                }}
              >
                {insurance.cost}
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
      ))}
    </>
  )
}
