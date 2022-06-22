import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import airtime from '../../assets/img/icons/utilities/airtime.png'
import data from '../../assets/img/icons/utilities/data.png'
import cabletv from '../../assets/img/icons/utilities/cable-tv.png'
import electricity from '../../assets/img/icons/utilities/electricity.png'
import internet from '../../assets/img/icons/utilities/internet.png'

class UtilitiesThumbnailSection extends Component {
    render() {
        return (
            <div>
                
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    <Col lg={12} style={{ marginTop: '-80px'}}>
                        <Row>
                            {/* <Col md={2} style={{marginTop: '117px'}} className='mb-4'> */}
                                {/* <p>Back </p> */}
                                {/* <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button> */}
                            {/* </Col>  */}
                            {/* <Col md={10} >
                                <Row> */}
                                <Col sm={2} className='mb-4' style={{marginTop: '117px'}} className='mb-4'>
                                    <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                                </Col>
                                
                                    <Col sm={2} className='mb-4'>
                                        <Card style={{xxwidth: '250px', height: '150px',}} className="text-center">
                                            <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <img src={airtime} style={{width: '50px'}} alt=""/> &nbsp;
                                                    <a style={{textDecoration: 'none'}} href="/utilities/airtime">Airtime</a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={2} className='mb-4'>
                                        <Card style={{xxwidth: '250px', height: '150px',}} className="text-center">
                                            <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <img src={data} style={{width: '50px'}} alt=""/> &nbsp;
                                                    <a style={{textDecoration: 'none'}} href="/utilities/data">Data</a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={2} className='mb-4'>
                                        <Card style={{xxwidth: '250px', height: '150px'}} className="text-center">
                                            <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <a style={{textDecoration: 'none'}} href="/utilities/cabletv">
                                                        <img src={cabletv} style={{width: '50px'}} alt=""/> Cable TV
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={2} className='mb-4'>
                                        <Card style={{xxwidth: '250px', height: '150px'}} className="text-center">
                                            <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <a style={{textDecoration: 'none'}} href="/utilities/electricity">
                                                        <img src={electricity} style={{width: '50px'}} alt=""/> Electricity
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={2} className='mb-4'>
                                        <Card style={{xxwidth: '250px', height: '150px',}} className="text-center">
                                            <Card.Body style={{padding: '37px 0 50px 0px'}}>
                                                <Card.Title style={{fontSize: 15}}>
                                                    <a style={{textDecoration: 'none'}} href="/utilities/internet">
                                                    <img src={internet} style={{width: '50px'}} alt=""/> &nbsp;Internet
                                                    </a>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    
                                {/* </Row>
                                
                            </Col> */}
                        </Row>
                    </Col>
                {/* </Container> */}
            </div>
        );
    }
}

export default UtilitiesThumbnailSection;