import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import BuyInternetFormSection from './BuyInternetFormSection';

class Internet extends Component {
    render() {
        return (
            <div>
                <Col lg={12} className='mb-4'>
                    <br/>
                    <Breadcrumb style={{backgroundColor: 'white'}}>
                        <Breadcrumb.Item href="/"> <span style={{color: '#636363'}}> Home </span> </Breadcrumb.Item>
                        <Breadcrumb.Item href="/utilities"> <span style={{color: '#636363'}}> Utilities </span> </Breadcrumb.Item>
                        <Breadcrumb.Item active href="/utilities/internet"> <span style={{color: '#043f7c'}}> Internet </span> </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <BuyInternetFormSection />
            </div> 
        );
    }
}

export default Internet;