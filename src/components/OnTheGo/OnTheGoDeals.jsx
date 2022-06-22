import React, { Component } from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup,
  Card,
  CardDeck,
  View,
  Stylesheet,
} from 'react-bootstrap'
import paris1 from '../../assets/img/cardimg/paris1.png'
import london from '../../assets/img/cardimg/london.png'
import uae from '../../assets/img/cardimg/uae.png'
import clickandshop from '../../assets/img/icons/home/click-shop-w.png'
import clickandplay from '../../assets/img/icons/home/click-play-w.png'
import moneymatters from '../../assets/img/icons/home/money-matters-w.png'
import dispatch from '../../assets/img/icons/home/dispatch-w.png'
import lineimg from '../../assets/img/icons/line.png'
// import slider3 from '../../assets/img/slider/3.jpg'
import LikeButton from '../LikeButton/LikeButton'
import { Link } from 'react-router-dom'

const OnTheGoDeals = () => {
  return (
    <div>
      {/* <Container className='' style={{ maxWidth: '100%'}}> */}
      <Col lg={12} >
        <Row>
          <Col md="10" align="left" style={{ color: '#043f7c' }}>
            <span style={{ color: '#000000', fontSize: '17px' }}>
              {' '}
              <Image src={lineimg} alt="" /> &nbsp;{' '}
              <b>BEST VACATION OFFERS</b>{' '}
            </span>{' '}
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>{' '}
            <Link to="#">
              <span style={{ color: '#3F88C5' }}>
                See all{' '}
                <i
                  className="fa fa-arrow-right"
                  style={{ fontWeight: 'thin' }}
                ></i>
              </span>
            </Link>
          </Col>
          <Col md="2" align="right" style={{ color: '#043f7c' }}>
            <Button
              style={{
                borderRadius: '100px',
                fontSize: '12px',
                marginTop: '-5px',
              }}
              size="sm"
              variant="outline-danger"
            >
              View More <i className="fa fa-arrow-right"></i>{' '}
            </Button>{' '}
          </Col>
        </Row>

        {/* <p> Deals of The Day</p> */}
        <hr />
        <CardDeck>
          {/* on the go */}
          <Card
            style={{
              heightxx: '-webkit-min-content',
              boxShadow: '7px 3px 10px #e1e1e1',
              border: 'none',
              positionxx: 'relative',
            }}
          >
            <Card.Img variant="top" src={london} />
            <span
              align="center"
              className="ml-autox"
              style={{
                backgroundColor: '#043f7c',
                marginTop: '-20px',
                marginLeft: '80%',
                padding: '10px',
                borderRadius: '250px',
                color: 'white',
                width: '45px',
              }}
            >
              <i
                align="center"
                style={{ fontSize: '15px' }}
                className="fa fa-plane"
              />
            </span>
            <Card.Body className="vacation-card">
              <Card.Title>
                <h5>London</h5>
                <div className="holiday-dates">
                  <p>England</p>
                  <div className="separate" />
                  <span>20 Days</span>
                </div>
              </Card.Title>
              <div className="vacation-text">
                <p>
                  London can be seen as the most interesting city of Europe
                  and one of the amazing city’s worldwide
                </p>
              </div>
              <div className="card-text vacation-deals">
                <div>
                  <span
                    style={{ fontSize: '15px' }}
                    className="material-icons"
                  >
                    group
                  </span>
                  <p>2 People</p>
                </div>
                <h6>
                  <b>&#8358;125,000</b>
                </h6>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              heightxx: '-webkit-min-content',
              boxShadow: '7px 3px 10px #e1e1e1',
              border: 'none',
              positionxx: 'relative',
            }}
          >
            <Card.Img variant="top" src={uae} />
            <span
              align="center"
              className="ml-autox"
              style={{
                backgroundColor: '#043f7c',
                marginTop: '-20px',
                marginLeft: '80%',
                padding: '10px',
                borderRadius: '250px',
                color: 'white',
                width: '45px',
              }}
            >
              <i
                align="center"
                style={{ fontSize: '15px' }}
                className="fa fa-train"
              />
            </span>
            <Card.Body className="vacation-card">
              <Card.Title>
                <h5>United Arab Emirates</h5>
                <div className="holiday-dates">
                  <p>Dubai</p>
                  <div className="separate" />
                  <span>10 Days</span>
                </div>
              </Card.Title>
              <div className="vacation-text">
                <p>
                  Dubai can be seen as the most interesting city of UAE and
                  one of the amazing city’s worldwide
                </p>
              </div>
              <div className="card-text vacation-deals">
                <div>
                  <span
                    style={{ fontSize: '15px' }}
                    className="material-icons"
                  >
                    group
                  </span>
                  <p>1 Person</p>
                </div>
                <h6>
                  <b>&#8358;125,000</b>
                </h6>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              heightxx: '-webkit-min-content',
              boxShadow: '7px 3px 10px #e1e1e1',
              border: 'none',
              positionxx: 'relative',
            }}
          >
            <Card.Img variant="top" src={paris1} />
            <span
              align="center"
              className="ml-autox"
              style={{
                backgroundColor: '#043f7c',
                marginTop: '-20px',
                marginLeft: '80%',
                padding: '10px',
                borderRadius: '250px',
                color: 'white',
                width: '45px',
              }}
            >
              <i
                align="center"
                style={{ fontSize: '15px' }}
                className="fa fa-ship"
              />
            </span>
            <Card.Body className="vacation-card">
              <Card.Title>
                <h5>London</h5>
                <div className="holiday-dates">
                  <p>England</p>
                  <div className="separate" />
                  <span>20 Days</span>
                </div>
              </Card.Title>
              <div className="vacation-text">
                <p>
                  London can be seen as the most interesting city of Europe
                  and one of the amazing city’s worldwide
                </p>
              </div>
              <div className="card-text vacation-deals">
                <div>
                  <span
                    style={{ fontSize: '15px' }}
                    className="material-icons"
                  >
                    group
                  </span>
                  <p>2 People</p>
                </div>
                <h6>
                  <b>&#8358;125,000</b>
                </h6>
              </div>
            </Card.Body>
          </Card>

          <Card
            style={{
              heightxx: '-webkit-min-content',
              boxShadow: '7px 3px 10px #e1e1e1',
              border: 'none',
              positionxx: 'relative',
            }}
            className="explore-card"
          >
            <Card.Body>
              <Card.Title>Still undecided?</Card.Title>
              <div>
                <p>Have a look of our various destinations</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <Button>Explore</Button>
            </Card.Footer>
          </Card>
          {/* end on the go */}

          {/* end dispatch */}
        </CardDeck>
      </Col>
      {/* </Container> */}
    </div>
  )
}

export default OnTheGoDeals
