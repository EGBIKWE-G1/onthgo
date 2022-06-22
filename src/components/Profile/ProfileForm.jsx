import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'
import SexButtonGroup from '../SexButtonGroup/SexButtonGroups'
import FormSection from '../FormSection/FormSections'
import MultiStep from 'react-multistep'
import VehicleFormSections from '../FormSection/VehicleFormSections';
// const MultiStep = import from 'react-multistep'
// import VehicleForm from '../FormSection/VehicleFormSections'
import AdditionalCover from '../FormSection/AdditionalCover'
import PassengerCard from './ProfileCard';
import OutboundCard from './ProfileLeftCard';
import TicketCard2 from './TicketCard2';

class ProfileForm extends Component {
    render() {
        return (
            <div>
                
                <Container className='' style={{ maxWidth: '100%'}}>
                    {/* <MultiStep /> */}
                    <Col lg={12}>
                        <Row>
                            <Col md={8}>
                                <Card>
                                    <PassengerCard />
                                </Card>
                                <br/>
                                <InputGroup className="mb-3" style={{backgroundColor: 'transparent', border: 'none'}}>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" /> &nbsp;&nbsp; <span style={{fontSize: '14px', marginTop: '4px'}}>Send me travel offers, trip reminders &amp; other updates by email</span>
                                </InputGroup>
                                {/* <br/>
                                <Button variant='danger' style={{width: '100%'}} type="submit">Review Journey Details </Button> */}
                                
                            </Col>
                            

                            <Col md={4}>
                                <OutboundCard/>
                                <br/>
                                <TicketCard2/>
                            </Col>
                        </Row>
                        
                    </Col>
                </Container>
            </div>
        );
    }
}

export default ProfileForm;