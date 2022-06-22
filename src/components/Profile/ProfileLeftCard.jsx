

import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import bagimg from '../../assets/img/icons/bag.png'
// import Switch from 'react-switch'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'

class ProfileLeftCard extends Component {
    
    render() {
        return (
            <div>
                <Card>
                    <div style={{ backgroundColor: '#ffffff', padding: '20px', border: 'none', borderRadius: '50px'}}>
                        <p style={{color: '#043f7c', fontSize: '20px'}}> <b>My Profile</b> </p>
                        {/* <hr style={{color: '#043f7c'}}/> */}
                        <Card body style={{marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='12'>
                                    <h6 style={{color: '#043f7c'}}>Account Information</h6>
                                    <br/>
                                    <h6 style={{color: '#043f7c'}}>Delivery Address</h6>
                                </Col>
                            </Row>
                        </Card>
                        <hr/>
                        <p style={{color: '#043f7c', fontSize: '20px'}}> <b>My Orders</b> </p>
                        {/* <hr style={{color: '#043f7c'}}/> */}
                        <Card body style={{marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='12'>
                                    <h6 style={{color: '#043f7c'}}>Account Information</h6>
                                    <br/>
                                    <h6 style={{color: '#043f7c'}}>Delivery Address</h6>
                                </Col>
                            </Row>
                        </Card>
                        <hr/>
                        <p style={{color: '#043f7c', fontSize: '20px'}}> <b>My Wallet</b> </p>
                        {/* <hr style={{color: '#043f7c'}}/> */}
                        <Card body style={{marginLeft: '-20px', marginRight: '-20px', borderRadius: 'initial', border: 'none'}} >
                            <Row >
                                <Col md='12'>
                                    <h6 style={{color: '#043f7c'}}>Wallet</h6>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ProfileLeftCard;
