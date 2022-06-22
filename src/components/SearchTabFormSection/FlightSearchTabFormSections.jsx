import React, { Component, useState } from 'react';
import { Jumbotron, Container, Breadcrumb, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'
import FlightSelectTab from '../SearchTabFormSection/FlightSelectTab'

// import SelectTabForm from './FlightSelectTab'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'

class FlightSearchTabFormSections extends Component {
    render() {
        return (
            <div stylexx={{display: 'flex', justifyContent: 'center'}}>
                {/* <div className='container-fluid'> */}
                <Container style={{marginTop: '-107px', maxWidth: '100%' }}>
                    <br/>
                    <Breadcrumb style={{backgroundColor: 'none! important'}} >
                        <Breadcrumb.Item href="/"> <span style={{color: '#636363'}}> Home </span> </Breadcrumb.Item>
                        <Breadcrumb.Item href="/onthego"> <span style={{color: '#636363'}}>On The Go</span> </Breadcrumb.Item>
                        <Breadcrumb.Item active href="/onthego/flighsearch"><span style={{color: '#043f7c'}}> Flight Search</span></Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
                <FlightSelectTab />
                {/* <FlightSearchMultiStepper /> */}
                
            {/* </div> */}
            </div>
        );
    }
}

export default FlightSearchTabFormSections;
