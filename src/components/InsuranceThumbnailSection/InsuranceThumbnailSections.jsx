import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import slider2 from '../../assets/img/slider/2.jpg'
import slider3 from '../../assets/img/slider/3.jpg'

class InsuranceThumbnailSections extends Component {
    render() {
        return (
            <div>
                
                <Container className='' style={{ maxWidth: '100%'}}>
                    <Col lg={12} style={{ marginTop: '-90px'}}>
                        <Row>
                            <Col md={6} style={{marginTop: '130px'}}>
                                {/* <p>Back </p> */}
                                <Button style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                            </Col> 
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <Card style={{xxwidth: '250px', height: '200px',}} className="text-center">
                                            <Card.Body style={{padding: '90px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <i className="fa fa-money fa-lg" style={{color: 'blue'}}></i> Life Insurance
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{xxwidth: '250px', height: '200px'}} className="text-center">
                                            <Card.Body style={{padding: '90px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <a href="motorinsurance"><i className="fa fa-bank fa-lg" style={{color: 'blue'}}></i> Motor Insurance</a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{xxwidth: '250px', height: '200px'}} className="text-center">
                                            <Card.Body style={{padding: '90px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <i className="fa fa-subway fa-lg" style={{color: 'blue'}}></i> Travel Insurance
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    
                                </Row>
                                
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default InsuranceThumbnailSections;