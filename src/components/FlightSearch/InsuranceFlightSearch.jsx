import React, { Component } from 'react';
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
import AboutSection from '../AboutSection/AboutSections';
import ButtonGroup from '../ButtonGroup/ButtonGroups';
import FormCardSection from '../FormCardSection/FormCardSections';
import FlightSearchTabFormSection from '../SearchTabFormSection/FlightSearchTabFormSections';
// import BannerSection from '../BannerSection/BannerSections';
// import InsuranceThumbnailSection from '../InsuranceThumbnailSection/InsuranceThumbnailSections'
import InsuranceFlightSearchMultiStepper from '../MultiStepper/InsuranceFlightSearchMultiStepper';
// import FormCardSection from '../FormCardSection/FormCardSections'

class FlightSearch2 extends Component {
    render() {
        return (
            <div>
                <Container className="" style={{ maxWidth: '100%' }}>
                    <p></p>
                    <Col lg={12}>
                        {/* <p> <span style={{color: '#707070'}} >Home /</span> <span style={{color: '#707070'}}>Money Matters /</span> <span style={{color: '#707070'}}>Insurance /</span> <b>Motor Insurance</b>  </p> */}
                        <Breadcrumb className="noBackground">
                            <Breadcrumb.Item href="/">
                                {' '}
                                <span style={{ color: '#636363' }}>
                                    {' '}
                                    Home{' '}
                                </span>{' '}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="/onthego">
                                {' '}
                                <span style={{ color: '#636363' }}>
                                    {' '}
                                    On The Go{' '}
                                </span>{' '}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="/onthego/flightsearch">
                                {' '}
                                <span style={{ color: '#636363' }}>
                                    {' '}
                                    FlightSearch{' '}
                                </span>{' '}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {' '}
                                <span style={{ color: '#043f7c' }}>
                                    {' '}
                                    FlightSearch Insurance{' '}
                                </span>{' '}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Container>

                <InsuranceFlightSearchMultiStepper />
                <br />
            </div>
        );
    }
}

export default FlightSearch2;
