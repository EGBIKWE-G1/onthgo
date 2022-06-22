import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import AboutSection from '../AboutSection/AboutSections';
import ButtonGroup from '../ButtonGroup/ButtonGroups'
import FormCardSection from '../FormCardSection/FormCardSections'
import FlightSearchTabFormSection from '../SearchTabFormSection/FlightSearchTabFormSections';
import KioskHeaderNav from '../KioskHeaderNav/KioskHeaderNav';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'
// import FormCardSection from '../FormCardSection/FormCardSections'

class FlightSearch2 extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                </Container>
                
                <FlightSearchMultiStepper />
                <br/>
                
            </div>
        );
    }
}

export default FlightSearch2;