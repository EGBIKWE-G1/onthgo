import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import ElectricityCard from './ElectricityCard';

class BuyElectricityDetailsTab extends Component {
    render() {
        return (
            <div>
                
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    {/* <MultiStep /> */}
                    {/* <Col lg={12}> */}
                        <ElectricityCard />
                    {/* </Col> */}
                {/* </Container> */}
            </div>
        );
    }
}

export default BuyElectricityDetailsTab;