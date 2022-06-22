import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Data/node_modules/react-phone-input-2/lib/style.css'
import ConfirmationCableTvSuccessDetailsCard from './ConfirmationCableTvSuccessDetailsCard';
import ConfirmationCableTvSuccessDetailsCard2 from './ConfirmationCableTvSuccessDetailsCard2';

function CableTvSuccessDetailsCard() {

    // const [validated, setValidated] = useState(false);
    
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    // setValidated(true);
    // };
   
    return (
        // <div>
        //     <Card style={{backgroundColor: 'transparent', border: 'none'}}>
        //         <Row>
        //             <Col md={6} style={{backgroundColor: 'white'}}>
        //                 <ConfirmationCableTvSuccessDetailsCard />
        //             </Col>
        //             <Col md={6} style={{backgroundColor: 'white'}}>
        //                 <ConfirmationCableTvSuccessDetailsCard2 />
        //             </Col>
        //         </Row>
        //     </Card>
        // </div>
        <div>
            <Card  style={{backgroundColor: '#ffffff', border: 'none'}}>
                <Row>
                    <Col md={6} style={{backgroundColor: 'white'}}>
                        <ConfirmationCableTvSuccessDetailsCard />
                    </Col>
                    <Col md={6} style={{backgroundColor: 'white'}}>
                        <ConfirmationCableTvSuccessDetailsCard2 />
                    </Col>
                </Row>
                
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default CableTvSuccessDetailsCard;
