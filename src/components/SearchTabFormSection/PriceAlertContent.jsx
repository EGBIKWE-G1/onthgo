import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image,  Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import bell from '../../assets/img/icons/bell.png'

class PriceAlertContent extends Component {
    render() {
        return (
            <div>
                <Card  body>
                    {/* <h6 style={{color: '#50c878', fontSize: '12px'}}>FASTEST</h6> */}
                    <Row >
                        <Col md='1'>
                            <Image style={{boxShadow: '0px 0px 5px 0px #ccc'}} width='30px' src={bell} alt="" roundedCircle/>
                        </Col>
                        <Col md='9'>
                            <h6>Turn on price alerts?</h6>
                            {/* <br/> */}
                            <span style={{fontSize: '13.4px'}}>Get notified when the prices change and always get a good deal!  </span>
                        </Col>
                        <Col md='2'>
                            <Form size='lg'>
                                <Form.Check type="switch" id="custom-switch" label="" />
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default PriceAlertContent;
