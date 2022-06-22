

import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Image from 'react-bootstrap'

import Banner1 from '../../assets/img/slider/1.jpg';
import Banner2 from '../../assets/img/slider/2.jpg';
// import slider3 from '../../assets/img/slider/3.jpg';

class FooterBannerSections extends Component {  
    render() {
        return (
            // <div className="container-fluid">
                <Col lg={12}>
                    <Row>
                        <Col md={6}>
                            <Card.Img className='d-block w-100' src={Banner1} />
                            {/* <img className="d-block w-100" src={Banner1} alt="First slide" /> */}
                        </Col>
                        <Col md={6}>
                            <img className="d-block w-100" src={Banner2} alt="First slide" />
                        </Col>
                    </Row>
                </Col>
            // </div>
        );
    }
}

export default FooterBannerSections;
