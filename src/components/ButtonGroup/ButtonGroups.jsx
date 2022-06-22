import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card } from 'react-bootstrap';
import './ButtonGroups.css'

class ButtonGroups extends Component {
    render() {
        return (
            <div>
                <Container className='btn-group ml-0' style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center'}}>
                    <button><b>GET NEW QUOTE</b></button>
                    <button>RETRIEVE SAVED QUOTE</button>
                    <button>RENEW POLICY</button>
                </Container>
                
            </div>
        );
    }
}

export default ButtonGroups;
