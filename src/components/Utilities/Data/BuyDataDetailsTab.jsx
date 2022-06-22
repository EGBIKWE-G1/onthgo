import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup'
import DataCard from './DataCard';

class BuyDataDetailsTab extends Component {
    render() {
        return (
            <div stylexx={{ maxWidth: '100%'}}>
                <DataCard />
            </div>
        );
    }
}

export default BuyDataDetailsTab;