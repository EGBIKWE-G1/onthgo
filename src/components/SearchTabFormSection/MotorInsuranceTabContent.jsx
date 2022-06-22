import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image,  Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import axamansardimg from '../../assets/img/icons/insurance/axamansard.png'
import aiicoimg from '../../assets/img/icons/insurance/aiico.png'
import leadwayimg from '../../assets/img/icons/insurance/leadway.png'

class MotorInsuranceTabContent extends Component {
    render() {
        return (
            <div>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>CHEAPEST</h6>
                    
                    <Row>
                        <Col md='3'>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={axamansardimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Axa Mansard Insurance</span>
                        </Col>
                        <Col md='3' style={{marginTop: '12px'}}>
                            <span style={{fontSize: '14px'}}>Third Party Insurance</span>
                        </Col>
                        <Col md='3' style={{marginRight: '-45px', color: '#043f7c', marginTop: '8px'}}>
                            <Button variant='primary' style={{ borderRadius: '20px', backgroundColor: '#043f7c', fontSize: '12px'}} type="submit"> View Coverage </Button>
                        </Col>
                        <Col style={{marginTop: '12px'}} classNamexx='float-right' md='3' >NGN 16,990</Col>
                    </Row>
                    
                </Card>
                <br/>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>CHEAPEST</h6>
                    
                    <Row>
                        <Col md='3'>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={aiicoimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Aiico Insurance</span>
                        </Col>
                        <Col md='3' style={{marginTop: '12px'}}>
                            <span style={{fontSize: '14px'}}>Third Party Insurance</span>
                        </Col>
                        <Col md='3' style={{marginRight: '-45px', color: '#043f7c', marginTop: '8px'}}>
                            <Button variant='primary' style={{ borderRadius: '20px', backgroundColor: '#043f7c', fontSize: '12px'}} type="submit"> View Coverage </Button>
                        </Col>
                        <Col style={{marginTop: '12px'}} classNamexx='float-right' md='3' >NGN 16,990</Col>
                    </Row>
                    
                </Card>
                <br/>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>CHEAPEST</h6>
                    
                    <Row>
                        <Col md='3'>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={leadwayimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Leadway Insurance</span>
                        </Col>
                        <Col md='3' style={{marginTop: '12px'}}>
                            <span style={{fontSize: '14px'}}>Third Party Insurance</span>
                        </Col>
                        <Col md='3' style={{marginRight: '-45px', color: '#043f7c', marginTop: '8px'}}>
                            <Button variant='primary' style={{ borderRadius: '20px', backgroundColor: '#043f7c', fontSize: '12px'}} type="submit"> View Coverage </Button>
                        </Col>
                        <Col style={{marginTop: '12px'}} classNamexx='float-right' md='3' >NGN 16,990</Col>
                    </Row>
                    
                </Card>
            </div>
        );
    }
}

export default MotorInsuranceTabContent;
