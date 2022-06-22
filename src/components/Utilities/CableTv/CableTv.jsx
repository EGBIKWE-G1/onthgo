import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Button, Card } from 'react-bootstrap';
import AboutSection from '../../AboutSection/AboutSections'
import ButtonGroup from '../../ButtonGroup/ButtonGroups'

import BuyCableTvFormSection from './BuyCableTvFormSection';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'

class CableTv extends Component {
    render() {
        return (
            <div>
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                    {/* <p></p> */}
                    <Col lg={12} className='mb-4'>
                        <br/>
                        <Breadcrumb style={{backgroundColor: 'white'}}>
                            <Breadcrumb.Item href="/"> <span style={{color: '#636363'}}> Home </span> </Breadcrumb.Item>
                            <Breadcrumb.Item href="/utilities"> <span style={{color: '#636363'}}> Utilities </span> </Breadcrumb.Item>
                            <Breadcrumb.Item active href="/utilities/CableTv"> <span style={{color: '#043f7c'}}> CableTv </span> </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                {/* </Container> */}
                {/* <br/> */}
                {/* <br/>
                <br/>
                <br/> */}
                <BuyCableTvFormSection />
            </div>
        );
    }
}

export default CableTv;