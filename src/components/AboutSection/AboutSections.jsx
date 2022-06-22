import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';

class AboutSections extends Component {
    render() {
        return (
            <div classNamexx="p-2" style={{ backgroundColor: '#ffffff', paddingTop: '30px', paddingBottom: '30px'}}>
                {/* <Container className='p-4' style={{ maxWidth: '100%'}}> */}
                    <Col lg={12}>
                        <Row>
                            <Col md={12}>
                                <h5 style={{fontSize: '18px', fontWeight: '500px'}}>Woozeee - The No. 1 Market Place For Smart People</h5>
                                <p style={{ textAlign: 'justify' }}>
“woozeee” is a lifestyle platform that combines the power of a social media community and an ecommerce marketplace to create an experience like no other. Our social media platform offers a unique experience to fun loving and business minded individuals whilst catering to their daily activities.
 
The service offerings available to our community are categorized into the following baskets: “Money Matters”; which tend to our users’ financial needs, “On the Go”; which tends to our users’ transport needs, “Click and Shop”; to satisfy our users’ retail needs. woozeee also offers unique features such as “Click and Play” for our thrill-seeking users who love sports, games and staking money.
 
Additionally, other useful and beneficial features provided on the woozeee e-commerce platform include “Ask a Doc” which gives users’ quick access to the nearest medical professional services, “Ask a Lawyer” which gives users access to the nearest lawyers available and much more. All these are available at your fingertips.
 
We offer rewards to our customers and also ensure that they always get the best value using our three channels (e-commerce, mobile and kiosks). Our rewards include, discounted rates for certain products or outlets, flexible payment and more. The woozeee app provides a bouquet of secure and convenient payment options for all transactions made on our platform such as payments by debit card, bank transfers, POS and a wallet system.
 
Come on board the platform of the future.
 
We are about the Power of the 3 Es; Entertainment, Elegance and Excellence. It is Eazeee with woozeee.</p>
                                {/* <p style={{ textAlign: 'justify' }}>Woozeee.com is Nigeria’s number one online Shopping destination. We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include </p> */}
                            </Col>
                        </Row>
                    </Col>
                {/* </Container> */}
            </div>
        );
    }
}

export default AboutSections;
