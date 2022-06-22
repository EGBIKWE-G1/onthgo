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
import img from '../../assets/img/icons/home/charity.png';
import './OnTheGoTabForm.css';
import './OnTheGoTabs.css';
// import DatePicker from '../Calendar'
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// var Typeahead = require('react-bootstrap-typeahead').Typeahead; // CommonJS
import fromdata from '../DatePicker/DatePicker';
import FlightIcon from '@material-ui/icons/Flight';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import TrainIcon from '@material-ui/icons/Train';

const divStyle = {
    // color: 'white', display: 'block', padding: '.5rem 1rem', color: 'rgb(255, 255, 255);', textAlign: 'center'
};

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
        <div fluid>
            <Container
                style={{ backgroundColor: '#043f7c', paddingTop: '20px' }}
                direction="row"
                fluid>
                <Card
                    style={{ backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Body stylexx={{ marginTop: '-103px' }}>
                        <Row>
                            <Col sm="3" className="d-none d-lg-block">
                                <Card.Footer
                                    style={{
                                        textAlign: 'center',
                                        marginRight: '-30px',
                                    }}>
                                    <small style={{ Color: 'white' }}>
                                        View Details
                                    </small>
                                </Card.Footer>
                            </Col>
                            <Col sm="3" className="d-none d-lg-block">
                                <Card.Footer
                                    style={{
                                        textAlign: 'center',
                                        marginRight: '-30px',
                                    }}>
                                    <small style={{ Color: 'white' }}>
                                        View Details
                                    </small>
                                </Card.Footer>
                            </Col>
                            <Col sm="3" className="d-none d-lg-block">
                                <Card.Footer
                                    style={{
                                        textAlign: 'center',
                                        marginRight: '-30px',
                                    }}>
                                    <small style={{ Color: 'white' }}>
                                        View Details
                                    </small>
                                </Card.Footer>
                            </Col>
                            <Col sm="3" className="d-none d-lg-block">
                                <Card.Footer
                                    style={{
                                        textAlign: 'center',
                                        marginRight: '-30px',
                                    }}>
                                    <small style={{ Color: 'white' }}>
                                        View Details
                                    </small>
                                </Card.Footer>
                            </Col>
                            <Col sm="3" className="d-lg-none">
                                <Card.Footer
                                    style={{
                                        textAlign: 'center',
                                        marginRightx: '-30px',
                                    }}>
                                    <small style={{ Color: 'white' }}>
                                        View Details
                                    </small>
                                </Card.Footer>
                            </Col>
                            <Col sm="6">
                                <Card.Footer
                                    style={{
                                        textAlign: 'center',
                                        backgroundColor: '#ff5757',
                                        left: '-50px',
                                        borderBottomRightRadius: '5px',
                                        borderBottomLeftRadius: '0px',
                                        xxborderRadius: '0px',
                                    }}>
                                    <small style={{ color: 'white' }}>
                                        {' '}
                                        <b>Book Now</b>{' '}
                                    </small>
                                </Card.Footer>
                            </Col>
                        </Row>
                        <Tabs
                            style={{
                                backgroundColor: '#043f7c',
                                width: '52.4%',
                                heightx: '50px',
                                marginTop: '-81px',
                                borderBottom: '-1px',
                                borderTop: 'none',
                                borderColor: 'none',
                                marginLeft: '-1px',
                                borderTopLeftRadius: '5px',
                                borderTopRightRadiusx: '5px',
                            }}
                            defaultActiveKey="flights"
                            transition={false}
                            id="noanim-tab-example">
                            <Tab
                                style={{ divStyle }}
                                src={FlightIcon}
                                eventKey="flights"
                                title="Flight">
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                    style={{
                                        marginTop: '44px',
                                        height: '55px',
                                    }}>
                                    <Form.Row
                                        stylex={{
                                            backgroundColor: '#043f7c',
                                            width: '100%',
                                            paddingTop: '20px',
                                        }}>
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            {/* <fromdata /> */}
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                                href="onthego/flightsearch"
                                                variant="danger"
                                                style={{ width: '100%' }}
                                                type="submit">
                                                {' '}
                                                Search{' '}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Tab>
                            <Tab
                                style={{ divStyle }}
                                src={FlightIcon}
                                eventKey="buses"
                                title="Buses">
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                    style={{
                                        marginTop: '44px',
                                        height: '55px',
                                    }}>
                                    <Form.Row
                                        stylex={{
                                            backgroundColor: '#043f7c',
                                            width: '100%',
                                            paddingTop: '20px',
                                        }}>
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            {/* <fromdata /> */}
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                                href="onthego/flightsearch"
                                                variant="danger"
                                                style={{ width: '100%' }}
                                                type="submit">
                                                {' '}
                                                Search{' '}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Tab>
                            <Tab
                                style={{ divStyle }}
                                src={FlightIcon}
                                eventKey="ferries"
                                title="Ferries">
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                    style={{
                                        marginTop: '44px',
                                        height: '55px',
                                    }}>
                                    <Form.Row
                                        stylex={{
                                            backgroundColor: '#043f7c',
                                            width: '100%',
                                            paddingTop: '20px',
                                        }}>
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            {/* <fromdata /> */}
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                                href="onthego/flightsearch"
                                                variant="danger"
                                                style={{ width: '100%' }}
                                                type="submit">
                                                {' '}
                                                Search{' '}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Tab>
                            <Tab
                                style={{ divStyle }}
                                src={FlightIcon}
                                eventKey="trains"
                                title="Trains">
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                    style={{
                                        marginTop: '44px',
                                        height: '55px',
                                    }}>
                                    <Form.Row
                                        stylex={{
                                            backgroundColor: '#043f7c',
                                            width: '100%',
                                            paddingTop: '20px',
                                        }}>
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            {/* <fromdata /> */}
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                        <InputGroup
                                            className="mb-4"
                                            as={Col}
                                            md="3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i class="fa fa-map-marker"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                style={{
                                                    borderTopRightRadius: '4px',
                                                    borderBottomRightRadius:
                                                        '4px',
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
                                                href="onthego/flightsearch"
                                                variant="danger"
                                                style={{ width: '100%' }}
                                                type="submit">
                                                {' '}
                                                Search{' '}
                                            </Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

// render (<TabForm />);

export default OnTheGoTabForm;
