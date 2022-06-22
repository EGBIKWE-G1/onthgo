import React, { useState, Fragment, Sonnet } from 'react';
import {
    Options,
    Row,
    Col,
    Container,
    Image,
    Button,
    ButtonGroup,
    Card,
    InputGroup,
    Form,
    FormControl,
    FormCheck,
    Nav,
    TabContent,
} from 'react-bootstrap';
// import {render} from 'react-dom';
import { Tabs, Tab } from 'react-bootstrap';
// import img from '../../assets/img/icons/home/charity.png';
// import './BusTabForm.css';
// import './BusTabs.css';
// import DatePicker from '../Calendar'
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// var Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
// import fromdata from '../DatePicker/DatePicker';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import TrainIcon from '@material-ui/icons/Train';
// // import FlightSearchTabFormSection from '../SearchTabFormSection/FlightSearchTabFormSections';

const divStyle = {
    // color: '#ffffff', display: 'block', padding: '.5rem 1rem', color: 'rgb(255, 255, 255);', textAlign: 'center'
};

function FerriesTabForm() {
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
        <div fluid>
            <Row style={{ marginTop: '-66px' }}>
                <Col
                    sm="3"
                    className="d-none d-lg-block"
                    style={{
                        textAlign: 'center',
                        // marginRight: '-30px',
                        backgroundColor: '#ffffff',
                    }}>
                    <a href="/onthego">
                        <Card.Footer>
                            <h6 style={{ fontSize: '15px' }}> Flights</h6>
                        </Card.Footer>
                    </a>
                </Col>
                <Col
                    sm="3"
                    className="d-none d-lg-block"
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#ffffff',
                        color: '#ffffff',
                    }}>
                    <a href="/onthego/bus"><Card.Footer>
                        <h6 style={{ fontSize: '15px' }}>
                            {' '}
                            Buses{' '}
                        </h6>
                    </Card.Footer>
                    </a>
                </Col>
                <Col
                    sm="3"
                    className="d-none d-lg-block"
                    style={{
                        textAlign: 'center',
                        // marginRight: '-30px',
                        backgroundColor: '#043f7c',
                    }}>
                    <a style={{ color: '#ffffff' }} href="/onthego/ferries">
                        <Card.Footer
                            style={{
                                textAlign: 'center',
                            }}>
                            <h6 style={{ color: '#ffffff', fontSize: '15px' }}>
                                Ferries
                            </h6>
                        </Card.Footer>
                    </a>
                </Col>
                <Col
                    sm="3"
                    className="d-none d-lg-block"
                    style={{
                        textAlign: 'center',
                        // marginRight: '-30px',
                        backgroundColor: '#ffffff',
                    }}>
                    <a href="/onthego/train"><Card.Footer
                        style={{
                            textAlign: 'center',
                            // marginRight: '-30px',
                        }}>
                        <h6 stylex={{ color: '#ffffff' }}>
                            {' '}
                            Trains{' '}
                        </h6>
                    </Card.Footer>
                    </a>
                </Col>
            </Row>
            <Container
                style={{ backgroundColor: '#043f7c', paddingTop: '20px' }}
                direction="row"
                fluid>
                {/* <Row style={{ marginTop: '-66px' }}>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Flights</h6>
                    </Col>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Buses</h6>
                    </Col>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Ferries</h6>
                    </Col>
                    <Col style={{backgroundColor: '#043f7c'}}>
                        <h6 style={{ Color: '#ffffff' }}>Trains</h6>
                    </Col>
                </Row> */}
                <Card
                    style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Body>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                            stylex={{ marginTop: '14px', height: '55px' }}>
                            <Form.Row
                                stylex={{
                                    backgroundColor: '#043f7c',
                                    width: '100%',
                                    paddingTop: '20px',
                                }}>
                                <InputGroup className="mb-4" as={Col} md="3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fa fa-map-marker"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    {/* <fromdata /> */}
                                    <FormControl
                                        style={{
                                            borderTopRightRadius: '4px',
                                            borderBottomRightRadius: '4px',
                                        }}
                                        id="inlineFormInputGroup"
                                        placeholder="From:"
                                        required
                                        type="text"
                                        defaultValue="Murtala Mohammed Airport"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fa fa-map-marker"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        style={{
                                            borderTopRightRadius: '4px',
                                            borderBottomRightRadius: '4px',
                                        }}
                                        id="inlineFormInputGroup"
                                        placeholder="To:"
                                        required
                                        type="text"
                                        defaultValue="London, England"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </InputGroup>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
                                    <InputGroup>
                                        <FormControl placeholder="Depature Date" />
                                        <FormControl placeholder="+ Add Return" />
                                    </InputGroup>
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
                                    {/* <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label> */}
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Passengers"
                                        defaultValue="Mark"
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button
                                        href="flightsearch"
                                        variant="danger"
                                        style={{ width: '100%' }}
                                        type="submit">
                                        {' '}
                                        Search{' '}
                                    </Button>
                                    {/* <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button> */}
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

// render (<TabForm />);

export default FerriesTabForm;
