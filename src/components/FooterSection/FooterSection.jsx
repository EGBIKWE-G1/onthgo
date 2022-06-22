import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button,
    Card,
    Nav, NavItem, Form, InputGroup, FormControl,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import footerimg from '../../assets/img/footerimg.png'
import appgallery from '../../assets/img/appgallery.png'
import googleplaystore from '../../assets/img/googleplaystore.png'
import appstore from '../../assets/img/appstore.png'
import blogdateimg from '../../assets/img/blogdate.png'
import vector1 from '../../assets/img/vector1.png'
import party from '../../assets/img/party.png'
import woze from '../../assets/img/woze.png'
import elegance from '../../assets/img/elegance.png'
import excellence from '../../assets/img/excellence.png'
import "./FooterSection.css";



class FooterSection extends Component {
    render() {
        const FooterContainer1 = {
            maxWidth: '100%',
            backgroundColor: '#043F7C',
            transition: 'all 0.3s ease',
            // height: '50%',
            maxHeight: '79%',
        };
        const FooterContainer2 = {
            maxWidth: '100%',
            transition: 'all 0.3s ease',
            background: "linear-gradient(180deg, #0D3A69, 35.61%, #0C1723 100%)",
        };

        // const style = {
        // const style = {
        //     '@media (min-width: 1000px)': {
        //       display: 'none',
        //       backgroundColor: '#043F7C'
        //       headerIcon: {
        //       justifyContent: 'space-evenly',
        //       }
        //     },
            
        //   };
        return (   
     <div>   
            <div className="IconFixedTop">
                   <div>
                    <span className="test rounded-circle">
                    {/* <span className="FooterHeader-Icon"> */}
                    {/* <i className="fa fa-angle-up FooterHeader-Icon rounded-circle"></i> */}
                    <i className="fa fa-angle-up IconTop"></i>
                    </span>
                    </div>
               
             </div>

            <div>        
                <Container className="FooterContainer1" style={FooterContainer1} >
                   <Col>
                   <div className="containerWozeHeader">
                      <Image className="items" style={{ width: '262.64px' }} src={woze} alt="vectorImag"  />
                    </div>
                    
                    <br />
                    <Row>   
                        <Col className="headerIcon1" md={3} style={{ marginTop: '30px', transition: 'all 0.3s ease' }}>
                            <Nav defaultActiveKey=" #" className="flex-column">
                            <Image className="getInTouchImage" style={{ width: '269px' }} src={vector1}  alt="vectorImag"/>
                            </Nav>
                        </Col>
                        
                        <Row className="headerIcon2" md={3} style={{ transition: 'all 0.3s ease', justifyContent: 'space-evenly', display: 'flex', gap: '2rem' }}>
                        <Col className='ColDiv-centre' md={4}>
                        <Nav defaultActiveKey=" #" id="headerNav" className="flex-column">
                            <Image style={{ width: '50px' }} src={party}  alt="vectorImag"/>
                            </Nav>
                            <Nav defaultActiveKey=" #" className="flex-column">
                            <h5 style={{ color: 'white', padding: '20px' }}>  Entertainment </h5>
                            </Nav>
                        </Col>  

                        <Col className='ColDiv-centre' >
                        <Nav defaultActiveKey=" #" id="headerNav" className="flex-column">
                            <Image style={{ width: '40px' }} src={elegance}  alt="vectorImag"/>
                            </Nav>
                            <Nav defaultActiveKey=" #" className="flex-column">
                            <h5 style={{ color: 'white', padding: '20px' }}> Elegance </h5>
                            </Nav>
                        </Col>
                        <Col className='ColDiv-centre' md={1}>
                            <Nav defaultActiveKey=" #" id="headerNav" className="flex-column">
                            <Image style={{ width: '50px' }} src={excellence}  alt="vectorImag"/>
                            </Nav>
                            <Nav defaultActiveKey=" #" className="flex-column">
                            <h5 style={{ color: 'white', padding: '20px' }}> Excellence </h5>
                            </Nav>
                        </Col>

                        </Row>
                    </Row>
                   </Col>
                </Container>
                <Container style={FooterContainer2}>
                    <div>
                    <Col lg={12}>
                        <Row>
                        <Col md={2} style={{ marginTop: '50px' }}>
                                <Nav defaultActiveKey=" #" className="flex-column">
                                    <h5 style={{ color: 'white' }}> <b>CONTACT INFO</b> </h5>
                                    <h6 className="mt-3" style={{ color: 'white' }}> <b>ADDRESS:</b> </h6>
                                    <div className="d-flex ">
                                        <div style={{ marginRight: '16px', height: '80%', color: '#FFFFFF', textAlign: 'center', fontSize: '12px'  }}>60 Landbridge Avenue, Oniru, VI</div>
                                    </div>
                                    <h6 className="mt-3" style={{ color: 'white' }}> <b>PHONE:</b> </h6>
                                    <div className="d-flex ">
                                        <div style={{ marginRight: '16px', height: '80%', color: '#FFFFFF', textAlign: 'center', fontSize: '12px'  }}>09088877765</div>
                                    </div>
                                    <h6 className="mt-3" style={{ color: 'white' }}> <b>EMAIL:</b> </h6>
                                    <div className="d-flex ">
                                        <div style={{ marginRight: '16px', height: '80%', color: '#FFFFFF', textAlign: 'center', fontSize: '12px'  }}>info@woozeee.com</div>
                                    </div>
                                     <h6 className="mt-3" style={{ color: 'white' }}> <b>WORKING DAYS/HOURS</b> </h6>
                                    <div className="d-flex ">
                                        <div style={{ marginRight: '16px', height: '80%', color: '#FFFFFF', textAlign: 'center', fontSize: '12px'  }}>Mon - Fri / 9:00AM - 5:00PM</div>
                                    </div>
                                </Nav>
                            </Col>
                            <Col md={2} style={{ marginTop: '50px' }}>
                                <Nav defaultActiveKey="#" className="flex-column">
                                    <h5 style={{ color: 'white' }}> <b>WHO WE ARE</b></h5> 
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} href=" #">About</Nav.Link>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey=" #">Team</Nav.Link>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey=" #">Work With Us</Nav.Link>
                                </Nav>
                            </Col>

                            <Col md={2} style={{ marginTop: '50px' }}>
                                <Nav defaultActiveKey="#" className="flex-column">
                                    <h6 style={{ color: 'white' }}> <b>MORE INFORMATION</b></h6>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} href="#">Sell on woozeee</Nav.Link>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#"> Participate in challenges</Nav.Link>
                                </Nav>
                            </Col>
                            
                            <Col md={2} style={{ marginTop: '50px' }}>
                                <Nav defaultActiveKey="#" className="flex-column">
                                    <h5 style={{ color: 'white' }}> <b>SUPPORT</b></h5>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} href="#">Help</Nav.Link>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">FAQ'S</Nav.Link>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Privacy policy</Nav.Link>
                                    <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Terms and Conditions</Nav.Link>
                                </Nav>
                            </Col>
                            
                            <Col md={3} style={{ marginTop: '50px' }}>
                                <Nav defaultActiveKey="#" className="flex-column">
                                    <h5 style={{ color: 'white' }}> <b>SUBSCRIBE NEWSLETTER</b> </h5>
                                    <p style={{ color: 'white' }}>
                                    Get all the latest information on events, sales, challenges and offers. Sign up for newsletter: </p>
                                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>Newsletter</Form.Label>
                                    <InputGroup className="mt-3 mb-3">
                                        <FormControl style={{ width: '150px', height: '3rem' }} id="inlineFormInputGroup" placeholder="Enter Email address" />
                                        
                                    </InputGroup>
                                    <InputGroup.Prepend>
                                            <Button style={{ borderTopRightRadius: '5px', width: '150px', height: '3rem', borderBottomRightRadius: '5px', fontWeight: '700' }} variant="danger">
                                               Subscribe <i className="fa fa-location-arrow"></i>
                                            </Button>
                                        </InputGroup.Prepend>
                                </Nav>
                            </Col>
                            <br />
                            <br />
                            <br />
                         {/* <div className="containerLogo">
                            <Col md={5} >
                                <Row>
                                    <Col sm={4} className='mb-4'>
                                        <Image src={appgallery} />
                                    </Col>
                                    <Col sm={4} className='mb-4'>
                                        <Image src={googleplaystore} style={{ borderRadius: '4px' }} />
                                    </Col>
                                    <Col sm={4} className='mb-4'>
                                        <Image src={appstore} style={{ borderRadius: '4px' }} />
                                    </Col>
                                </Row>
                            </Col>
                         </div> */}

                        </Row>
                        <br />
                    </Col>
                    <div className="containerLogo">
                      {/* <Image className="item"  src={googleplaystore} style={{ borderRadius: '4px', width: '155.04px', height: '100%' }} /> */}
                      <img className="googleplaystore-Logo" src={googleplaystore} alt="" />

                      <Image className="item" src={appstore} style={{ borderRadius: '4px', width: '170px', height: '25%'  }} />

                      <Image  className="item" src={appgallery} style={{ borderRadius: '4px', width: '170px', height: '25%' }} />
                      {/* <img  src={googleplaystore} width={155.04} height={65} alt="" /> */}
                    </div>             


                    </div>
                </Container>
                {/* <Col lg={12} className="footerLine-background"> */}
                        {/* <Row> */}
                            <Col md={8} id="copyright">
                                {/* <h6 id="copyright-one" style={{ color: '#000', fontSize: '14px' }}> Copyright © {new Date().getFullYear()}, eConnect NetPower Limited. All Rights Reserved </h6> */}
                                <h6 id="copyright-one" style={{ color: '#000', fontSize: '14px' }}>COPYRIGHT woozeee 2020 - TERMS & CONDITIONS  PRIVACY POLICY </h6>
                                    <div id="copyright-two" className="d-flex ">
                                        <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px', borderRadius: '80%', backgroundColor: '#000',  }}><i className="fa fa-facebook" style={{fontSize: '20px', color: '#fff'}}></i></div>
                                        <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px',  borderRadius: '80%'}}><i className="fa fa-instagram" style={{fontSize:'30px', color: '#000'}}></i></div>
                                        <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px', borderRadius: '80%' }}><i className="fa fa-twitter" style={{fontSize: '30px', color: '#000'}}></i></div>
                                        {/* <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px',  borderRadius: '80%', backgroundColor: 'white' }}><i className="fa fa-youtube" style={{fontSize: '20px', color: '#043F7C'}}></i></div> */}
                                        <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px',  borderRadius: '80%', backgroundColor: 'white' }}><i className="fa fa-wifi" style={{fontSize: '20px', color: '#000'}}></i></div>
                                    </div>
                            </Col>

                        {/* </Row> */}
                    {/* </Col> */}
            </div>
            </div>
        );
    }
}

export default FooterSection;




// import React, { Component } from 'react';
// import {
//     Jumbotron,
//     Container,
//     Row,
//     Col,
//     Image,
//     Button,
//     Card,
//     Nav, NavItem, Form, InputGroup, FormControl,
//     DropdownButton,
//     Dropdown
// } from 'react-bootstrap';
// import footerimg from '../../assets/img/footerimg.png'
// import econnectwhite from '../../assets/img/econnect-white.png'
// import googleplaystore from '../../assets/img/googleplaystore.png'
// import appstore from '../../assets/img/appstore.png'
// import blogdateimg from '../../assets/img/blogdate.png'

// class FooterSection extends Component {
//     render() {
//         return (
//             <div>

//                 <Container className='' style={{ maxWidth: '100%', backgroundColor: '#043F7C' }}>
//                     <Col lg={12}>
//                         <Row>
//                             <Col md={2} style={{ marginTop: '50px' }}>
//                                 <Nav defaultActiveKey="#" className="flex-column">
//                                     <h5 style={{ color: 'white' }}> <b>Information</b></h5> 
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} href="#">About Us</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Privacy Policy</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Delivery Information</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Terms and Conditions</Nav.Link>
//                                 </Nav>
//                             </Col>
//                             <Col md={2} style={{ marginTop: '50px' }}>
//                                 <Nav defaultActiveKey="#" className="flex-column">
//                                     <h5 style={{ color: 'white' }}> <b>My Account</b></h5>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} href="#">About Us</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Privacy Policy</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Delivery Information</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Terms and Conditions</Nav.Link>
//                                 </Nav>
//                             </Col>
//                             <Col md={2} style={{ marginTop: '50px' }}>
//                                 <Nav defaultActiveKey="#" className="flex-column">
//                                     <h5 style={{ color: 'white' }}> <b>More Info</b></h5>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} href="#">About Us</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Privacy Policy</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Delivery Information</Nav.Link>
//                                     <Nav.Link style={{ padding: '.5rem 1rem', color: '#FFFFFF', fontSize: '12px' }} eventKey="#">Terms and Conditions</Nav.Link>
//                                 </Nav>
//                             </Col>
//                             <Col md={3} style={{ marginTop: '50px' }}>
//                                 <Nav defaultActiveKey="#" className="flex-column">
//                                     <h5 style={{ color: 'white' }}> <b>News Letter</b> </h5>
//                                     <p style={{ color: 'white' }}>Don't miss any updates or promotions by signing up to our newsletter</p>
//                                     <Form.Label htmlFor="inlineFormInputGroup" srOnly>Newsletter</Form.Label>
//                                     <InputGroup className="mt-3 mb-3">
//                                         <FormControl id="inlineFormInputGroup" placeholder="Your Email" />
//                                         <InputGroup.Prepend>
//                                             <Button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} variant="danger">
//                                                 <i className="fa fa-location-arrow"></i>
//                                             </Button>
//                                         </InputGroup.Prepend>
//                                     </InputGroup>
//                                     <h5 className="mt-3" style={{ color: 'white' }}> <b>Socials</b> </h5>
//                                     <div className="d-flex ">
//                                         <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px', borderRadius: '80%', backgroundColor: 'white' }}><i className="fa fa-facebook" style={{fontSize: '20px', color: '#043F7C'}}></i></div>
//                                         <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px',  borderRadius: '80%', backgroundColor: 'white' }}><i className="fa fa-instagram" style={{fontSize:'20px', color: '#043F7C'}}></i></div>
//                                         <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px', borderRadius: '80%', backgroundColor: 'white' }}><i className="fa fa-twitter" style={{fontSize: '20px', color: '#043F7C'}}></i></div>
//                                         <div style={{ marginRight: '16px', width: '30px', height: '30px', textAlign: 'center', paddingTop: '4px',  borderRadius: '80%', backgroundColor: 'white' }}><i className="fa fa-youtube" style={{fontSize: '20px', color: '#043F7C'}}></i></div>
//                                     </div>
//                                 </Nav>
//                             </Col>
//                             <Col md={3} style={{ marginTop: '50px' }}>
//                                 <Nav defaultActiveKey="#" className="flex-column">
//                                     <h5 style={{ color: 'white' }}> <b>Blog</b> </h5>
//                                     <Image src={footerimg} fluid />
//                                     <br />
//                                     <Row>
//                                         <Col md='9'>
//                                             <p style={{ color: 'white' }}> <b>Best Shopping Store To Buy Everything You Need</b> </p>
//                                         </Col>
//                                         <Col md='2' className='ml-2'>
//                                             <Image className='ml-auto' src={blogdateimg} />
//                                         </Col>
//                                     </Row>
//                                     <p style={{ color: 'white' }}>TThe trend of online shopping is increasing
//                                         regularly. All individuals love to shop for
//                                         things online instead of visiting the market....</p>
//                                     {/* <p style={{color: 'white'}}>The trend of online shopping is increasing regularly. All individuals love to shop for things online instead of visiting the market...</p> */}
//                                     <Button className='ml-auto' style={{ clear: 'both', borderRadius: '20px', fontSize: '12px', width: '120px', color: 'white' }} variant="link">Read More <i className="fa fa-arrow-right"></i></Button>
//                                 </Nav>
//                             </Col>
//                         </Row>
//                         <br />
//                     </Col>
//                     <hr style={{ backgroundColor: 'white' }} />
//                     <Col lg={12}>
//                         <Row>
//                             <Col md={7} className='p-3'>
//                                 <h6 style={{ color: 'white', fontSize: '14px' }}> Copyright © {new Date().getFullYear()}, eConnect NetPower Limited. All Rights Reserved </h6>
//                             </Col>

//                             <Col md={5} >
//                                 <Row>
//                                     <Col sm={4} className='mb-4'>
//                                         <Image src={econnectwhite} />
//                                     </Col>
//                                     <Col sm={4} className='mb-4'>
//                                         <Image src={googleplaystore} style={{ borderRadius: '4px' }} />
//                                     </Col>
//                                     <Col sm={4} className='mb-4'>
//                                         <Image src={appstore} style={{ borderRadius: '4px' }} />
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Row>
//                     </Col>
//                     {/* <br/> */}
//                 </Container>
//             </div>
//         );
//     }
// }

// export default FooterSection;