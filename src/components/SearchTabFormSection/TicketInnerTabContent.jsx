import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image,  Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

class TicketInnerTabContent extends Component {
    render() {
        return (
            <div>
                <Card body>
                    <h6 style={{color: '#50c878', fontSize: '12px'}}>FASTEST</h6>
                    <Row>
                        <Col>
                            <Image style={{backgroundColor: 'white', boxShadow: '0px 0px 5px 0px #ccc'}} width='50px' src={airpeaceimg} alt="" roundedCircle />&nbsp;&nbsp;<span style={{fontSize: '14px'}}>Air Peace Airline</span>
                        </Col>
                        {/* <Col xs='4'>Air Peace Airline</Col> */}
                        <Col>airpeace airline</Col>
                        <Col>NGN 245,940</Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default TicketInnerTabContent;
