import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import InternetCard from './InternetCard';

class BuyInternetDetailsTab extends Component {
    render() {
        return (
            <div>
                <InternetCard /> 
            </div>
        );
    }
}

export default BuyInternetDetailsTab;