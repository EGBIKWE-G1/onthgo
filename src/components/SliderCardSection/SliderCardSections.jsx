import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import slider5 from '../../assets/img/slider/5.jpg'
import slider6 from '../../assets/img/slider/6.jpg'

class SliderCardSections extends Component {
    render() {
        return (
            <div>
                {/* <Col md={12}> */}
                    {/* <Card xxclassName='mb-4' stylexx={{ marginBottom: '21px' }}> */}
                <Card.Img style={{height: '100%'}} className='mb-4' src={slider5} />
                        
            
                    {/* </Card> */}
                    {/* <Card xxstyle={{ width: '18rem' }}> */}
                <Card.Img style={{height: '100%'}} src={slider6} />
                    {/* </Card> */}
                {/* </Col> */}
            </div>
        );
    }
}

export default SliderCardSections;