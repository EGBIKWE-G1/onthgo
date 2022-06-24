import React, { Component } from 'react';
// import { Link } from './node_modules/react-router-dom';
import {Link} from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import './Home.css';
import Slider from '../SliderSection/SliderCarouselSections'
import SliderCard from '../SliderCardSection/SliderCardSections'
import ThumbnailSection from '../ThumbnailSection/ThumbnailSections'
import DealsSection from '../DealsSection/DealsSections'
import SpecialOffersSection from '../SpecialOffersSection/SpecialOffersSections'
import FlashSalesSection from '../FlashSalesSection/FlashSalesSections'
import FooterBannerSection from '../FooterBannerSection/FooterBannerSections';
import AboutSection from '../AboutSection/AboutSections';
import PartnersSection from '../PartnersSection/PartnersSections';
import FooterSection from '../FooterSection/FooterSection'


class Home extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%', marginTop: '20px'}}>
                    {/* <Jumbotron>
                        <h2>
                            Welcome to WOOZ.NG
                        </h2>
                    </Jumbotron> */}
                </Container>
                <Col lg={12}>
                    {/* <Row>
                        <Col md={8} className='mb-4'> */}
                            <Slider />
                        {/* </Col> */}
                        {/* <Col md={4}>
                            <SliderCard />
                        </Col> */}
                    {/* </Row> */}
                </Col>
                {/* <br/> */}
                <Col lg={12}>
                    <ThumbnailSection />
                </Col>
                
                <br/>
                <br/>
                <DealsSection />
                <br/>    
                <br/>
                <SpecialOffersSection />
                <br/>
                <br/>
                <FlashSalesSection />
                <br/>
                <br/>
                <br/>
                <FooterBannerSection />
                <br/>
                <br/>
                {/* <br/> */}
                    
                
                <br/>
                <AboutSection />
                <br/>
                <Container style={{ maxWidth: '100%', marginTop: '20px'}}>
                    <PartnersSection />
                </Container>
                <br/>
                <br/>
               
                <FooterSection />
                
            </div>
        );
    }
}

export default Home;