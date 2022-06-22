import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import AboutSection from '../AboutSection/AboutSections';
import ButtonGroup from '../ButtonGroup/ButtonGroups'
import FormCardSection from '../FormCardSection/FormCardSections'
import FlightSearchTabFormSection from '../SearchTabFormSection/FlightSearchTabFormSections';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'
import FlightSearch2 from './FlightSearch2'

class FlightSearch extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    <p></p>
                    <Col lg={12}>
                        <p> <span style={{color: '#707070'}} >Home /</span> <span style={{color: '#707070'}}>Money Matters /</span> <span style={{color: '#707070'}}>Insurance /</span> <b>Motor Insurance</b>  </p>
                        <Breadcrumb className='noBackground'>
                            <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item href="/onthego"> On The Go </Breadcrumb.Item>
                            <Breadcrumb.Item active href='/onthego/flightsearch'> Flight Search </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <FlightSearchTabFormSection />
                {/* <FlightSearch2 /> */}
                {/* <br/> */}
                {/* <FormCardSection /> */}
                
                
                {/* <BannerSection />
                <InsuranceThumbnailSection /> */}
            </div>
        );
    }
}

export default FlightSearch;