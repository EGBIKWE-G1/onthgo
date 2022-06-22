import React, { useState, Fragment, Sonnet } from 'react'
import { Options, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav, TabContent } from 'react-bootstrap';
// import {render} from 'react-dom';
import { Tabs, Tab } from 'react-bootstrap';
import img from '../../assets/img/icons/home/charity.png'
import './OnTheGoTabForm.css'
import './MobileOnTheGoTabForm.css'
import './OnTheGoTabs.css'
// import DatePicker from '../Calendar'
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// var Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
import fromdata from '../DatePicker/DatePicker'
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import TrainIcon from '@material-ui/icons/Train';

const divStyle = {
    // color: 'white', display: 'block', padding: '.5rem 1rem', color: 'rgb(255, 255, 255);', textAlign: 'center'
}

function OnTheGoTabForm() {
    const [key, setKey] = useState('flights');

    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // handleSubmit = (e) => {
        //     e.preventDefault();
        //    this.props.history.push('/motorinsurance')
        // }

    setValidated(true);
    };

    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //       showName: true
    //     });
    //     window.location.href = "someurl/somepage?var1="+this.state.var1+"&var2="+this.state.var2 + "......";
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //    this.props.history.push('/moneymatters/insurance/motorinsurance')
    // }
  
    return (
        // <Tabs id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)} >
        <Card style={{borderRadius: '.01rem'}}>
            <Card.Body style={{marginTop: '-60px'}}>
                <Tabs style={{  backgroundColor: '#043f7c', width: '62.6%', height: '190px', marginTop: '-9px'}} defaultActiveKey="flights" transition={false} id="noanim-tab-example">
                    <Tab align='center' src={img} eventKey='flights' title={<span><FlightIcon /> </span>}>
                        <br/>
                        <br/> 
                        <Form style={{}} noValidate validated={validated} onSubmit={handleSubmit}>
                            
                            <Form.Row>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    {/* <fromdata /> */}
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="From:" required type='text' defaultValue='Murtala Mohammed Airport' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='London, England' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <Form.Group className="mb-4" as={Col} md="3" controlId="validationCustom02">
                                    
                                    <InputGroup classNamex="mb-3">
                                        <FormControl placeholder='Depature Date' />
                                        <FormControl placeholder='+ Add Return' />
                                    </InputGroup>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    <Form.Control required type="text" placeholder="Passengers" defaultValue="Mark" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button href='onthego/flightsearch' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                    <Tab eventKey='buses' title={<span><DirectionsBusIcon /> </span>}>
                        <br/>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {/* <Form eventKey='#motorinsurance' noValidate validated={validated} onSubmit={handleSubmit}> */}
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Cover Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Category</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Model</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Body Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Year of Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Period of Cover</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Estimated Value</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Button href='/moneymatters/insurance/motorinsurance' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                    <Tab eventKey='ferries' title={<span><DirectionsBoatIcon />  </span>}>
                        <br/>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Cover Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Category</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Model</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Body Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Year of Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Period of Cover</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Estimated Value</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                    {/* Trains */}
                    <Tab eventKey='trains' title={<span><TrainIcon /> </span>}>
                        <br/>
                        <br/>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="" controlId="validationCustom01">
                                    {/* <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Cover Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Category</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Model</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Body Type</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Year of Make</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Period of Cover</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    {/* <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control as="select">
                                        <option>Vehicle Estimated Value</option>
                                        <option>Abia</option>
                                        <option>Adamawa</option>
                                        <option>Akwa Ibom</option>
                                        <option>Anambra</option>
                                        <option>Bauchi</option>
                                        <option>Bayelsa</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Cross River</option>
                                    </Form.Control>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    )
}
  
// render (<TabForm />);

export default OnTheGoTabForm