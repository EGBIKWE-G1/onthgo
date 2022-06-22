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
import bannerimage from '../../assets/img/bannerimg/insurance.png';
import play from '../../assets/img/icons/playbutton.png';

class BannerSectionFinancialServices extends Component {
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
                {/* <Container  style={{ maxWidth: '100%',  }}> */}
                <Col classNamexx="p-4" lg={12}>
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
                        <Breadcrumb.Item active href="/moneymatters">
                            {' '}
                            <span style={{ color: '#043f7c' }}>
                                Money Matters
                            </span>{' '}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                {/* <p> <span style={{color: '#707070'}} >Home /</span> <b style={{color: '#636363'}}>Money Matters</b> </p> */}
                {/* <Button href='#' size='lg' style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark">Back</Button> */}
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
                                <b> Welcome To Financial Services</b>{' '}
                            </h4>
                            <br />
                            <p style={{ textAlign: 'justify' }}>
                                The Financial services industry is one of the
                                most sophisticated, globally integrated, <br />{' '}
                                and highly regulated industries. MoFo
                                understands how to help our clients navigate
                                this <br /> complex marketplace and how the
                                ever-changing regulatory reform landscape <br />{' '}
                                will impact their businesses.
                            </p>
                            {/* <p style={{ textAlign: 'justify' }}>Smartshop.com is Nigeria’s number one online Shopping destination. We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include </p> */}
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

export default BannerSectionFinancialServices;
