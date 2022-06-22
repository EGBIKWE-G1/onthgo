import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import AirtimeCard from './AirtimeCard';

class BuyAirtimeDetailsTab extends Component {
    render() {
        return (
            <div stylexx={{ maxWidth: '100%'}}>
                
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    {/* <MultiStep /> */}
                    {/* <Col lg={12}> */}
                        <AirtimeCard />
                    {/* </Col> */}
                {/* </Container> */}
            </div>
        );
    }
}

export default BuyAirtimeDetailsTab;