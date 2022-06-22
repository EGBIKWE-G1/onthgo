import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Breadcrumb,
    Button,
    Card,
} from 'react-bootstrap';
import bannerimage from '../../assets/img/bannerimg/insurance.png';

class InsuranceBannerSections extends Component {
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
                <Container className="p-4" style={{ maxWidth: '100%' }}>
                    {/* <Col lg={12}>
                        <p> <span style={{color: '#707070'}}> <a href="/">Home </a> /</span> <span style={{color: '#707070'}}> <a href="/moneymatters">Money Matters</a> /</span> <b style={{color: '#636363'}}> Insurance </b> </p>
                    </Col> */}
                    <Breadcrumb style={{ backgroundColor: 'none! important' }}>
                        <Breadcrumb.Item href="/">
                            {' '}
                            <span style={{ color: '#636363' }}>Home</span>{' '}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="/moneymatters">
                            {' '}
                            <span style={{ color: '#636363' }}>
                                Money Matters
                            </span>{' '}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item style={{ color: '#043f7c' }} active>
                            Insurance
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <br />
                                <br />
                                <br />
                                <h2 style={{ fontWeight: '500px' }}>
                                    Travel, Motor &amp; Life Insurance Search
                                </h2>
                                <br />

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

export default InsuranceBannerSections;
