import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import FerriesBanner from '../Ferries/FerriesBanner';

import DealsSection from '../../DealsSection/DealsSections'
import FerriesTab from './FerriesTabs';

class Ferries extends Component {
    render() {
        return (
            <div>
                {/* <Container className='' style={{ maxWidth: '100%'}}></Container> */}
                <FerriesBanner />
                <FerriesTab />
                <br/>
                <DealsSection />
                <br/>
                <DealsSection />
                {/* <FinancialThumbnailSection /> */}
            </div>
        );
    }
}

export default Ferries;
