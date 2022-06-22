import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'
import SexButtonGroup from '../SexButtonGroup/SexButtonGroups'
import FormSection from '../FormSection/FormSections'
import MultiStep from 'react-multistep'
import VehicleFormSections from '../FormSection/VehicleFormSections';
// const MultiStep = import from 'react-multistep'
import ConfirmationCard from '../ConfirmationCardSection/ConfirmationCardSections'
import AdditionalCover from '../FormSection/AdditionalCover'

class ConfirmationCardSections extends Component {
    render() {
        return (
            <div>
                
                <Container className='' style={{ maxWidth: '100%'}}>
                    {/* <MultiStep /> */}
                    <Col lg={12}>
                        <Row>
                            <Col md={8}>
                                <Card>
                                    <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                                        <p style={{color: '#043f7c'}}> <b>Additional Vehicle Information</b> </p>
                                        <hr style={{color: '#043f7c'}}/>
                                        
                                        <ConfirmationCard />
                                        {/* <FormSection /> */}
                                    </div>
                                </Card>
                                <br/>
                                <Card>
                                    <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                                        <p style={{color: '#043f7c'}}> <b>Additional Cover</b> </p>
                                        <hr/>
                                        
                                        <AdditionalCover />
                                        {/* <FormSection /> */}
                                    </div>
                                </Card>
                                <br/>
                                <Button variant='danger' style={{width: '100%'}} type="submit">Go to Insurer Details </Button>
                                
                            </Col>
                            

                            <Col md={4}>
                                
                                {/* <p> <i style={{color: '#043f7c'}} className="fa fa-shield "></i> <b>Summary of your Insurance</b> </p> */}
                                <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                                    <h6 style={{fontSizexx: '14px', color: '#043f7c'}}> <b>Policy Information</b> </h6>
                                    <hr/>
                                    <p><span> <b>Cover Type:</b> Third Party </span></p>
                                    <p><span> <b>Vehicle Category:</b> Private </span></p>
                                    <p><span> <b>Vehicle Make:</b> Honda </span></p>
                                    <p><span> <b>Vehicle Model:</b> Accord </span></p>
                                </div>
                                <br/>
                                <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                                    {/* <h6 style={{fontSizexx: '14px', color: '#043f7c'}}> <b>Vehicle Details</b> </h6> */}
                                    <p><span> <b>Insurance Premium:</b> &#8358;199,145 </span></p>
                                    <br/>
                                    {/* <p><span> <b>Make:</b> Accord </span></p> */}
                                    <h5> <b>Total (tax included):</b> <span style={{color: 'red'}}>&#8358;199,145</span> </h5>
                                </div>
                                {/* <br/>
                                <div style={{ backgroundColor: '#f2f2f2', padding: '20px'}}>
                                    <h6 style={{fontSizexx: '14px', color: '#043f7c'}}> <b>Policy Type</b> </h6>
                                    <p><span> <b>Type:</b> Third Party </span></p>
                                </div>
                                <br/>
                                <div style={{ backgroundColor: '#f2f2f2', padding: '20px'}}>
                                    <h6 style={{fontSizexx: '14px', color: '#043f7c'}}> <b>Total Price</b> </h6>
                                    <hr/>
                                    <p><span> <b><i className="fa fa-percent "></i></b> Best Price Guarantee </span></p>
                                    <p><span> <b><i className="fa fa-lock "></i></b> 100% Secure Purchase </span></p>
                                    <p><span> <b><i className="fa fa-shield "></i></b> 30days Moneyback Guarantee </span></p>
                                    <hr/>
                                    <p style={{textAlign: 'center'}}><span> <b>Do you have a promo code</b> <a href="#">Click here</a> </span></p>
                                </div>
                                <br/>
                                <p style={{textAlign: 'center'}}><i className="fa fa-lock fa-lg"></i><span> Your information is safe</span></p>
                                <br/>
                                <p style={{textAlign: 'center'}}><span> <b>Do you already have an account with us? </b> <a href="#">Click here</a> </span></p> */}
                            </Col>
                        </Row>
                        
                    </Col>
                </Container>
            </div>
        );
    }
}

export default ConfirmationCardSections;