import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import talktodoc from '../../../assets/img/icons/askadoc/talktodoc.png'
import hospital from '../../../assets/img/icons/askadoc/hospital.png'
import pharmacy from '../../../assets/img/icons/askadoc/pharmacy.png'
import laboratory from '../../../assets/img/icons/askadoc/laboratory.png'

class Thumbnails extends Component {
    render() {
        return (
            <div>
                <Col lg={12} style={{ marginTop: '-80px'}}>
                    <Row>
                        <Col sm={4} className='mb-4' style={{marginTop: '117px'}} className='mb-4'>
                            <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                        </Col>
                                
                        <Col sm={2} className='mb-4'>
                            <Card  className="text-center">
                                <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <img src={talktodoc} style={{width: '50px'}} alt=""/> &nbsp;
                                        <a style={{textDecoration: 'none'}} href="/askadoc/talktodoc">Talk To A Doctor</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px',}} className="text-center">
                                <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <img src={hospital} style={{width: '50px'}} alt=""/> &nbsp;
                                        <a style={{textDecoration: 'none'}} href="/askadoc/hospital">Hospital</a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px'}} className="text-center">
                                <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <a style={{textDecoration: 'none'}} href="/askadoc/pharmacy">
                                            <img src={pharmacy} style={{width: '50px'}} alt=""/> Pharmacy
                                        </a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px'}} className="text-center">
                                <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <a style={{textDecoration: 'none'}} href="/askadoc/laboratory">
                                            <img src={laboratory} style={{width: '50px'}} alt=""/> Laboratory
                                        </a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px',}} className="text-center">
                                <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <a style={{textDecoration: 'none'}} href="/utilities/internet">
                                        <img src={internet} style={{width: '50px'}} alt=""/> &nbsp;Internet
                                        </a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col> */}
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Thumbnails;