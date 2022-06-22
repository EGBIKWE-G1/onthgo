import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card } from 'react-bootstrap';
import './SexButtonGroups.css'

class SexButtonGroups extends Component {
    render() {
        return (
            <div>
                <Container className='btn-group' style={{ maxWidth: '100%'}}>
                    <button><b>Male</b></button>
                    <button>Female</button>
                    <button>Enterprise</button>
                </Container>
                
            </div>
        );
    }
}

export default SexButtonGroups;
