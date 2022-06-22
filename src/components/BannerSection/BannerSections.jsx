import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button,
    Card,
} from 'react-bootstrap';
import bannerimage from '../../assets/img/bannerimg/insurance.png';

class BannerSections extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${bannerimage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    borderBottomLeftRadius: '50% 100px',
                    borderBottomRightRadius: '180% 70px',
                    WebkitBorderBottomRightRadius: '',
                }}>
                <Container className="p-4" style={{ maxWidth: '100%' }}>
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <br />
                                <br />
                                <br />
                                <h5
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '500px',
                                    }}>
                                    Welcome To Insurance Services
                                </h5>
                                <br />
                                <p style={{ textAlign: 'justify' }}>
                                    The Insurance services industry is one of
                                    the most sophisticated, globally integrated,{' '}
                                    <br /> and highly regulated industries. MoFo
                                    understands how to help our clients navigate
                                    this <br /> complex marketplace and how the
                                    ever-changing regulatory reform landscape{' '}
                                    <br /> will impact their businesses.
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
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default BannerSections;
