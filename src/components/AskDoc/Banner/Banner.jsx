import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Breadcrumb,
    Image,
    Button,
    Card,
} from 'react-bootstrap';
import bannerimage from '../../../assets/img/bannerimg/insurance.png';
import play from '../../../assets/img/icons/playbutton.png';

class Banner extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${bannerimage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                }}>
                <Col lg={12}>
                    <br />
                    <Breadcrumb
                        stylexx={{
                            backgroundColor: 'white',
                            color: '#636363',
                        }}>
                        <Breadcrumb.Item href="/">
                            {' '}
                            <span style={{ color: '#636363' }}>Home</span>{' '}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href="/askdoc">
                            {' '}
                            <span style={{ color: '#043f7c' }}>
                                Ask A Doc
                            </span>{' '}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>

                <Col lg={12}>
                    <Row>
                        <Col md={9}>
                            <br />
                            <br />
                            <br />
                            <h4
                                style={{
                                    fontWeight: '500px',
                                    fontSize: '35px',
                                }}>
                                {' '}
                                <b>Welcome To Ask A Doc</b>{' '}
                            </h4>
                            <br />
                            <p style={{ textAlign: 'justify' }}>
                                The health services industry is one of the most
                                sophisticated, globally integrated, <br /> and
                                highly regulated industries. MoFo understands
                                how to help our clients navigate this <br />{' '}
                                complex marketplace and how the ever-changing
                                regulatory reform landscape <br /> will impact
                                their businesses.
                            </p>
                            <br />
                            <Button
                                href="#"
                                size="lg"
                                style={{
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                }}
                                variant="danger">
                                Read More
                            </Button>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                        <Col md={3}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <img src={play} alt="" />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Banner;
