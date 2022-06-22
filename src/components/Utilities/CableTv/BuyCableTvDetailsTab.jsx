import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import CableTvCard from './CableTvCard';

class BuyCableTvDetailsTab extends Component {
    render() {
        return (
            <div stylexx={{ maxWidth: '100%'}}>
                
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    {/* <MultiStep /> */}
                    {/* <Col lg={12}> */}
                        <CableTvCard />
                    {/* </Col> */}
                {/* </Container> */}
            </div>
        );
    }
}

export default BuyCableTvDetailsTab;