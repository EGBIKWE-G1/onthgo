import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import savingsandloans from '../../assets/img/icons/moneymatters/savings-loans.png'
import insurance from '../../assets/img/icons/moneymatters/insurance.png'
import wallet from '../../assets/img/icons/moneymatters/wallet.png'

class FinancialThumbnailSections extends Component {
    render() {
        return (
            <div>
                <Col lg={12} style={{ marginTop: '-80px'}}>
                    <Row>
                        <Col sm={6} className='mb-4' style={{marginTop: '117px'}}>
                            <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="dark"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                        </Col>
                        <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px',}} className="text-center">
                                <Card.Body style={{padding: '47px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <img src={savingsandloans} style={{width: '50px'}} alt=""/> &nbsp;Savings &amp; Loans
                                        {/* <i className="fa fa-piggy-bank fa-lg" style={{color: 'blue'}}></i>  */}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px'}} className="text-center">
                                <Card.Body style={{padding: '47px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                        <a style={{textDecoration: 'none'}} href="/moneymatters/insurance">
                                            <img src={insurance} style={{width: '50px'}} alt=""/> Insurance
                                        </a>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2} className='mb-4'>
                            <Card style={{xxwidth: '250px', height: '150px'}} className="text-center">
                                <Card.Body style={{padding: '47px 0 50px 0px'}}>
                                    <Card.Title style={{fontSize: 15}}>
                                    <img src={wallet} style={{width: '50px'}} alt=""/> Wallet
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default FinancialThumbnailSections;