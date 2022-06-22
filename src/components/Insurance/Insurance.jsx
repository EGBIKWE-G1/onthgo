import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Breadcrumb, Card, Nav } from 'react-bootstrap';
import InsuranceBannerSection from '../InsuranceBannerSection/InsuranceBannerSections';
import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'
import TabFormSection from '../TabFormSection/TabFormSections';
import './Insurance.css';
import DealsSections from '../DealsSection/DealsSections';
import FooterSection from '../FooterSection/FooterSection'

class Insurance extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    {/* <p></p> */}
                    
                    {/* <Col lg={12}>
                        <p> <span style={{color: '#707070'}} >Home /</span> <span style={{color: '#707070'}}>Money Matters /</span> <b>Insurance</b> </p>
                    </Col> */}
                </Container>
                <InsuranceBannerSection />

                <TabFormSection />
                <br/>

                <DealsSections />
                
                <br/>
                <DealsSections />

                <br/>
                <FooterSection />
                
                {/* <InsuranceThumbnailSection /> */}
            </div>
        );
    }
}

export default Insurance;
