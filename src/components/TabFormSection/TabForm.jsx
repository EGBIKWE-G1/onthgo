import React, { useState, Sonnet } from 'react';
import {
    Col,
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
import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/img/icons/home/charity.png';
import './TabFormSections.css';
// import TravelIcon from '@material-ui/icons/Flight';
import TravelInsuranceIcon from '../../assets/img/icons/insurance/travelinsurance.png';
import LifeInsuranceIcon from '../../assets/img/icons/insurance/lifeinsurance.png';
// import MotorInsuranceIcon from '../../assets/img/icons/insurance/motorinsurance.png';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FlightIcon from '@material-ui/icons/Flight';

// function TabForm(props) {
//     const { children, value, index, ...other } = props;

//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`scrollable-prevent-tabpanel-${index}`}
//         aria-labelledby={`scrollable-prevent-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }

//   TabForm.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };

//   function a11yProps(index) {
//     return {
//       id: `scrollable-prevent-tab-${index}`,
//       'aria-controls': `scrollable-prevent-tabpanel-${index}`,
//     };
//   }

const divStyle = {
    color: 'white',
    align: 'center',
};

function TabForm() {
    const [key, setKey] = useState('motorinsurance');

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
        <Card>
            <Card.Body style={{ marginTop: '-63px' }}>
                {/* <Tabs style={{backgroundColor: '#043f7c', width: '834px', marginLeft: '-20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}} defaultActiveKey="motorinsurance" transition={false} id="noanim-tab-example"> */}
                <Tabs
                    style={{
                        backgroundColor: '#043f7c',
                        width: '52.4%',
                        heightx: '50px',
                        marginTopx: '-9px',
                        borderBottom: '-1px',
                        borderTop: 'none',
                        borderColor: 'none',
                        marginLeftx: '-20px',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                    }}
                    defaultActiveKey="motorinsurance"
                    transition={false}
                    id="noanim-tab-example">
                    {/* <Tab style={{divStyle}} icon={ <FlightIcon />} eventKey='travelinsurance' title='Travel Insurances' aria-label="flight"> */}
                    <Tab
                        style={{ divStyle }}
                        src={TravelInsuranceIcon}
                        eventKey="travelinsurance"
                        title="Travel Insurances">
                        <br />
                        <br />
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom01">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Button
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
                    <Tab eventKey="motorinsurance" title="Motor Insurance">
                        {/* <Tab eventKey='motorinsurance' title={<span><LifeInsuranceIcon /> Motor Insurance </span>}> */}
                        <br />
                        <br />
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}>
                            {/* <Form eventKey='#motorinsurance' noValidate validated={validated} onSubmit={handleSubmit}> */}
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom01">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="2">
                                    <Button
                                        href="/moneymatters/insurance/motorinsurance"
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
                    <Tab eventKey="lifeinsurance" title="Life Insurance">
                        <br />
                        <br />
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    md=""
                                    controlId="validationCustom01">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="3"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="2"
                                    controlId="validationCustom02">
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
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button
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
    );
}

// render (<TabForm />);

export default TabForm;
