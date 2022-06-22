import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Thumbnails from './Thumbnails/Thumbnails'
import DealsSections from '../DealsSection/DealsSections';
import FooterSection from '../FooterSection/FooterSection'
import './AskDoc.css'

class AskDoc extends Component {
    render() {
        return (
            <div>
                <Container className='' style={{ maxWidth: '100%'}}>
                    {/* <p></p> */}
                    <Col lg={12}>
                        {/* <Breadcrumb style={{backgroundColor: 'white',}}>
                            <Breadcrumb.Item style={{color: '#636363'}} href="/"> Home </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/AskDoc"> Money Matters </Breadcrumb.Item>
                        </Breadcrumb> */}
                        {/* <p> <span style={{color: '#707070'}} >Home /</span> <b style={{color: '#636363'}}>Money Matters</b> </p> */}
                    </Col>
                </Container>
                <Banner />
                <Thumbnails />
                <br/>
                <br/>
                <DealsSections />
                <br/>
                <br/>
                <DealsSections />
                <br/>
                <br/>
                <br/>
                <br/>
                <FooterSection />
            </div>
        );
    }
}

export default AskDoc;
