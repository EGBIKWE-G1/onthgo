import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button,
    Card,
} from 'react-bootstrap';
import slider2 from '../../assets/img/slider/2.jpg';
import slider3 from '../../assets/img/slider/3.jpg';
import moneymatters from '../../assets/img/icons/home/money-matters.png';
import mybank from '../../assets/img/icons/home/mybank.png';
import uba from '../../assets/img/icons/home/uba.png';
import onthego from '../../assets/img/icons/home/on-the-go.png';
import clickandplay from '../../assets/img/icons/home/click-play.png';
import billpay from '../../assets/img/icons/home/bill-pay.png';
import clickshop from '../../assets/img/icons/home/click-shop.png';
import askadoc from '../../assets/img/icons/home/ask-doc.png';
import askalawyer from '../../assets/img/icons/home/ask-lawyer.png';
import hangout from '../../assets/img/icons/home/hangout.png';
import learning from '../../assets/img/icons/home/learning.png';
import worship from '../../assets/img/icons/home/worship.png';
import taxlevies from '../../assets/img/icons/home/tax-levies.png';
import charity from '../../assets/img/icons/home/charity.png';
import dispatch from '../../assets/img/icons/home/dispatch.png';
import woozeee from '../../assets/img/icons/home/woozeee.png';
import other from '../../assets/img/icons/home/other.png';
import training from '../../assets/img/icons/home/training.png';
import news from '../../assets/img/icons/home/news.png';
import government from '../../assets/img/icons/home/government.png';
import tradesmen from '../../assets/img/icons/home/tradesmen.png';
//kiosk header
import KioskHeaderNav from '../KioskHeaderNav/KioskHeaderNav';

class ThumbnailSections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBrowser: false,
        };
    }

    componentDidMount() {
        if (window.navigator.userAgent) {
            this.setState({ isBrowser: false });
        }

        if (
            typeof window !== undefined &&
            typeof window.process === 'object' &&
            window.process.type === 'renderer'
        ) {
            this.setState({ isBrowser: true });
        }
    }
    render() {
        return (
            <div>
                {this.state.isBrowser && (
                    <KioskHeaderNav title="Woozeee Home" />
                )}
                {/* <Container> */}

                {/* </Container> */}
                {/* <Container className='' style={{ maxWidth: '100%'}}> */}
                {/* <Col  className='mb-4'> */}
                <Row>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontSize: '15px',
                                        marginTop: '10px',
                                    }}>
                                    <img
                                        src={moneymatters}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp;
                                    <a
                                        style={{ textDecoration: 'none' }}
                                        href="moneymatters">
                                        Money Matters
                                    </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={mybank}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp;
                                    <span stylexx={{ color: 'red' }}>
                                        {this.state.isBrowser
                                            ? 'UBA'
                                            : 'My Bank'}
                                    </span>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={billpay}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp;
                                    <a
                                        style={{ textDecoration: 'none' }}
                                        href="utilities">
                                        Bill Pay
                                    </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={onthego}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp;
                                    <a
                                        style={{ textDecoration: 'none' }}
                                        href="onthego">
                                        On The Go
                                    </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* <Col>
                                <Card className="text-center" style={{boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                    <Card.Body>
                                        <Card.Title style={{fontSize: 15, marginTop: '10px'}}>
                                            <img src={billpay} style={{width: '30px'}} alt=""/> &nbsp;
                                            <a style={{textDecoration: 'none'}} href="utilities">Bill Pay</a>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col> */}
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-shopping-bag fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={clickshop}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Click &amp; Shop
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-users fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={hangout}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Hangout
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* </Col> */}
                {/* <br/> */}
                {/* <Col lg={12} className='mb-4'> */}
                <Row>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                backgroundColorxx: '#043f7c',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={woozeee}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />
                                    &nbsp;
                                    <a
                                        style={{ textDecoration: 'none' }}
                                        href="https://woozeee-broadcast.vercel.app/lives"
                                        target="_blank">
                                        Socials
                                    </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={clickandplay}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Click &amp; Play
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-mosque fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={worship}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Worship
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-graduation-cap fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={learning}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Learning
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-heart fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={charity}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Charity
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                backgroundColorxx: '#043f7c',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={tradesmen}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />
                                    &nbsp; Tradesmen
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* </Col> */}
                {/* <Col lg={12} classNamexx='mb-4'> */}
                <Row>
                    {/* <Col>
                                <Card className="text-center" style={{boxShadow: '7px 3px 10px #e1e1e1', border: 'none'}}>
                                    <Card.Body>
                                        <Card.Title style={{fontSize: 15, marginTop: '10px'}}>
                                            <img src={dispatch} style={{width: '30px'}} alt=""/> &nbsp;
                                            Dispatch
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col> */}
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-user-md fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={askadoc}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp;
                                    <a
                                        style={{ textDecoration: 'none' }}
                                        href="askdoc">
                                        Ask A Doc
                                    </a>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={askalawyer}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Ask A Lawyer
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-bank fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={taxlevies}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Tax &amp; Levies
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                backgroundColorxx: '#043f7c',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={dispatch}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />
                                    &nbsp; Dispatch
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                backgroundColorxx: '#043f7c',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    <img
                                        src={news}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />
                                    &nbsp; News
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2} className="mb-4">
                        <Card
                            className="text-center"
                            style={{
                                boxShadow: '7px 3px 10px #e1e1e1',
                                border: 'none',
                            }}>
                            <Card.Body>
                                <Card.Title
                                    style={{ fontSize: 15, marginTop: '10px' }}>
                                    {/* <i className="fa fa-sort fa-lg" style={{color: 'blue'}}></i> &nbsp; */}
                                    <img
                                        src={other}
                                        style={{ width: '30px' }}
                                        alt=""
                                    />{' '}
                                    &nbsp; Other services
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* </Col> */}
                {/* </Container> */}
            </div>
        );
    }
}

export default ThumbnailSections;
