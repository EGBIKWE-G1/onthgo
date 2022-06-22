import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image,  Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import exclamationcircle from '../../assets/img/icons/exclamation-circle.png'

class Covid19Content extends Component {
    render() {
        return (
            <div>
                <Card body style={{backgroundColor: '#FFFBE6', borderColor: '#FFE58F'}}>
                    {/* <h6 style={{color: '#50c878', fontSize: '12px'}}>FASTEST</h6> */}
                    <Row >
                        <Col md='12' style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <div><Image src={exclamationcircle} alt="" /></div><div style={{fontWeight: 'bold', color: '#000', fontSize: '14px'}}>&nbsp;&nbsp;Due to the Coronavirus (COVID-19) outbreak, there are currently disruptions and cancellations to transport services. For more information, please click <a href="#">here</a></div>
                        </Col>
                    </Row>
                    
                    
                </Card>
            </div>
        );
    }
}

export default Covid19Content;
