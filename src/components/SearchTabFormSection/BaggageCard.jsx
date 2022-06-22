import React from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
} from 'react-bootstrap'
import bagimg from '../../assets/img/icons/bag.png'
import Switch from 'react-switch'
// import { Input } from '@material-ui/core';
import Input from '../Input/Input'
import { CheckIcon } from '@material-ui/icons/Check';

const BaggageCard = () => {
  const [checked, setChecked] = React.useState(false)

  const handleChange = (checked) => {
    setChecked(checked)
  }

  return (
    <div>
      <Card >
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            border: 'none',
          }}
        >
          <p style={{ color: '#043F7C' }}>
            {' '}
            <b>Baggage</b>{' '}
          </p>
          <hr style={{ backgroundColor: '#043F7C' }} />
          <Card
            body
            style={{
          
              border: 'none',
            }}
          >
            <Row>
              <Col md="10">
                <span style={{ fontSize: '13.4px' }}>
                  Save <b style={{ color: '#64cdaf' }}>up to 50%</b> by adding
                  your bag(s) now, not at the airport
                </span>
              </Col>
              <Col md="1">
                <Switch
                  onChange={handleChange}
                  checked={checked} 
                  offColor="#DCDFE8" 
                  onColor="#00C89E"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </Col>
            </Row>
          </Card>
          {checked ? (
            <div>
              <Card
                body 
                
                style={{
                  backgroundColor: 'rgba(4, 63, 124, 0.05)',
                  border: 'none',
                }}
              >
                <Row>
                  <Col md="12">
                    <Image src={bagimg} alt="" />
                    <span style={{ fontSize: '13.4px' }}>
                      &nbsp;&nbsp;You are allowed{' '}
                      <b style={{ color: '#00C89E' }}>
                        1 cabin bag (56 x 45 x 25cm)
                      </b>{' '}
                    </span>
                  </Col>
                </Row>
              </Card>
              <br />
              <Container>
              <Row>
                <Col md="10">
                  <p>
                    Checked bag (15kg)
                    <br />{' '}
                    <span style={{ color: 'red', fontSize: '20px' }}>
                      <b>+ &#8358;6,500</b>{' '}
                    </span>
                  </p>
                </Col>
                <Col md="2">
                  <div style={{display: 'flex ', alignItems: 'center'}}>
                    <div style={{border: '2px solid #043f7c', borderRadius: '25px', padding: '4px', paddingLeft: '12px', paddingRight: '12px', color: '#043f7c', fontSize: '16px', fontWeight: 'bold'}}>-</div>
                    <div style={{padding: '6px', color: '#043f7c', fontSize: '18px', fontWeight: 'bold'}}>2</div>
                    <div style={{border: '2px solid #043f7c', borderRadius: '25px', padding: '4px', paddingLeft: '12px', paddingRight: '12px', color: '#043f7c', fontSize: '16px', fontWeight: 'bold'}}>+</div>
                  </div>
                </Col>
              </Row>
              </Container>
        
              {/* <p>Checked bag (15kg)<br/> <span style={{color: 'red', fontSize: '20px'}}> <Input /> </span> </p>
                                <p>Checked bag (15kg)<br/> <span style={{color: 'red', fontSize: '20px'}}><b>+ &#8358;6,500</b> </span> </p> */}
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  )
}

export default BaggageCard
