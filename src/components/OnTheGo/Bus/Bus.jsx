import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import BusBanner from '../Bus/BusBanner';
import DealsSection from '../../DealsSection/DealsSections'
// import BusTab from '../BusTab/BusTabs';
import BusTab from './BusTabs';
// import BusTab from '../../../components/BusTab/BusTabs';

class Bus extends Component {
    render() {
        return (
            <div>
                {/* <Container className='' style={{ maxWidth: '100%'}}></Container> */}
                <BusBanner />
                <BusTab />
                <br/>
                <DealsSection />
                <br/>
                <DealsSection />
                {/* <FinancialThumbnailSection /> */}
            </div>
        );
    }
}

export default Bus;
