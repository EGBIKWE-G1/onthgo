import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Badge, Card, CardDeck, View, Stylesheet } from 'react-bootstrap';
import cardimg6 from '../../assets/img/cardimg/6.jpg'
import cardimg7 from '../../assets/img/cardimg/7.jpg'
import cardimg8 from '../../assets/img/cardimg/8.jpg'
import cardimg9 from '../../assets/img/cardimg/9.jpg'
import cardimg10 from '../../assets/img/cardimg/10.jpg'
// import slider3 from '../../assets/img/slider/3.jpg'
import clickandshop from '../../assets/img/icons/home/click-shop-w.png'
import clickandplay from '../../assets/img/icons/home/click-play-w.png'
import utilities from '../../assets/img/icons/home/utilities-w.png'
import learning from '../../assets/img/icons/home/learning-w.png'
import '../SpecialOffersSection/SpecialOffersSections.css'
import lineimg from '../../assets/img/icons/line.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LikeButton from '../LikeButton/LikeButton'

class SpecialOffersSections extends Component {
    render() {
        return (
            <div>
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    <Col lg={12}>
                        <Row>
                            <Col md='10' align='left' style={{color: '#043f7c'}}>
                                <span style={{color: '#000000'}}> <Image src={lineimg} alt=""/> &nbsp; Special Offers <Badge variant="success">Offer</Badge></span>
                            </Col>
                            <Col md='2' align='right' style={{color: '#043f7c'}}>
                                <Button style={{borderRadius: '100px', fontSize: '12px', marginTop: '-5px'}} size="sm" variant="outline-danger">View More <i class='fa fa-arrow-right'></i> </Button>{' '}
                            </Col>
                        </Row>
                        <hr/>
                        <CardDeck>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg6} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}><i align='center' class="fa fa-plane"/></span>
                                
                                <Card.Body>
                                    <Card.Title><h6>On The Go</h6></Card.Title>
                                    
                                    <br/>
                                    <Row style={{marginTop: '-17px'}}>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_takeoff</span>
                                            <p style={{fontSize: '8px'}}>Abuja</p>
                                        </Col>
                                        <Col md='6' align='center' style={{marginTop: '2px'}}>
                                            {/* <span style={{fontSize: '12px'}}>22h 30m</span> */}
                                            <hr style={{color: '#043f7c'}} className='dot'/>
                                            {/* <span style={{fontSize: '12px'}}>1 Stop - DOH</span> */}
                                        </Col>
                                        <Col md='3' align='center' style={{color: '#043f7c'}}>
                                            <span style={{fontSize: '15px'}} class="material-icons">flight_land</span>
                                            <p style={{fontSize: '8px'}}>London</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                    <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Book Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg7} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}> <img align='center' style={{width: '20px', marginTop: '-6px'}} src={clickandshop} alt=""/></span>
                                <Card.Body>
                                    <Card.Title><h6>Click &amp; Shop</h6></Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Hisense 20-Litre Microwave MOWH</p>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Buy Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg8} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}> <img align='center' style={{width: '15px', marginTop: '-6px'}} src={clickandplay} alt=""/></span>
                                <Card.Body>
                                    <Card.Title><h6>Click &amp; Play</h6></Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Real Madrid Vs Barcelona</p>
                                        <h6><b>&#8358;291,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Bet Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg9} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}> <img align='center' style={{width: '15px', marginTop: '-6px'}} src={utilities} alt=""/></span>
                                <Card.Body>
                                    <Card.Title><h6>Utilities</h6></Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>2GB Data (Valid For 30days)</p>
                                        <h6><b>&#8358;300.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Buy Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                            <Card style={{height: '-webkit-min-content', boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                <Card.Img variant="top" src={cardimg10} />
                                <LikeButton />
                                <span align='center' className='ml-autox' style={{backgroundColor: '#043f7c', marginTop: '-20px', marginLeft: '80%', padding: '10px', borderRadius: '250px', color: 'white', width: '45px'}}> <img align='center' style={{width: '20px', marginTop: '-6px'}} src={learning} alt=""/></span>
                                <Card.Body>
                                    <Card.Title><h6>Learning</h6></Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <p style={{fontSize: '13px'}}>Learn a Course</p>
                                        <h6><b>&#8358;10,000.00</b></h6>
                                    </Card.Text>
                                </Card.Body>
                                <Row>
                                    <Col sm='6' className='d-none d-lg-block'>
                                        <Card.Footer style={{textAlign: 'center', marginRight: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6' className='d-lg-none'>
                                        <Card.Footer style={{textAlign: 'center', marginRightx: '-30px'}}>
                                            <small style={{Color: 'white'}}>View Details</small>
                                        </Card.Footer>
                                    </Col>
                                    <Col sm='6'>
                                        <Card.Footer style={{textAlign: 'center', backgroundColor: '#ff5757', left: '-50px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '0px', xxborderRadius: '0px'}}>
                                            <small style={{ color: 'white' }}>Buy Now</small>
                                        </Card.Footer>
                                    </Col>
                                </Row>
                            </Card>
                        </CardDeck>
                    </Col>
                {/* </Container> */}
            </div>
        );
    }
}

export default SpecialOffersSections;