import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import TrainBanner from '../Train/TrainBanner';

import DealsSection from '../../DealsSection/DealsSections'
import TrainTab from './TrainTabs';

class Train extends Component {
    render() {
        return (
            <div>
                {/* <Container className='' style={{ maxWidth: '100%'}}></Container> */}
                <TrainBanner />
                <TrainTab />
                <br/>
                <DealsSection />
                <br/>
                <DealsSection />
                {/* <FinancialThumbnailSection /> */}
            </div>
        );
    }
}

export default Train;
