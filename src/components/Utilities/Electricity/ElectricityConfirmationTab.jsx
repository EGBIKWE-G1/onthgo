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
import ElectricityConfirmationCard from './ElectricityConfirmationCard';
import ConfirmationTicketDetailsCard from './ConfirmationTicketDetailsCard';
import OutboundCard from './OutboundCard';
import TicketCard2 from './TicketCard2';
import ConfirmationPassengerDetailsCard from './ConfirmationPassengerDetailsCard';
import ConfirmationFlightPremiumDetailsCard from './ConfirmationFlightPremiumDetailsCard';

class ElectricityConfirmationTab extends Component {
    render() {
        return (
            <div>
                
                <Container className='' style={{ maxWidth: '100%'}}>
                    {/* <MultiStep /> */}
                    <ElectricityConfirmationCard />
                    {/* <Col lg={12} style={{backgroundColor: 'white'}}>
                        
                    </Col> */}
                </Container>
            </div>
        );
    }
}

export default ElectricityConfirmationTab;