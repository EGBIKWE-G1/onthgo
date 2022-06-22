import React, { Component, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toastr } from 'react-redux-toastr'
import PropTypes from 'prop-types'
import { connect, useDispatch, useSelector } from 'react-redux'
import { logout, logOut, OnLogout } from '../redux/actions/auth'
import UserAvatar from 'react-user-avatar'

import {
  Badge,
  Navbar,
  Nav,
  NavItem,
  mouseEvent,
  NavDropdown,
  Container,
  InputGroup,
  Dropdown,
  DropdownButton,
  Button,
  FormControl,
  Image,
} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import Icon from '@material-ui/icons';
// import { Icon } from '@material-ui/core';

import Logo from '../assets/img/logo.svg'
import img from '../assets/img/avatar.png'
import DropdownIcon from '../assets/img/dropdown-icon.png'
import ReactCountryFlag from 'react-country-flag'
// import DropdownMenu from "./DropdownMenu/DropdownMenu";
import DropdownMenuComp from './DropdownMenu/DropdownMenu'
// import MobileNavbarMenu from './DropdownMenu/MobileMenu'
import SideNav from './SideNav/SideNav'
import './SideNav/SideNav.css'
import './CustomNavbar.css'
import { capitalize } from '@material-ui/core'
import NavCard from './NavCard/NavCard'

// import { reactLocalStorage } from 'reactjs-localstorage';

export default (props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [showNavCard, setShowNavCard] = useState(false)

  const handleSignOut = () => {
    // history.push('/')
    // props.logoutUser();
    dispatch(OnLogout())
    toastr.success('Sign out Successful', '', {
      timeOut: 5000,
      showCloseButton: true,
    })
  }

  const userObject = useSelector((state) => state.auth.user)

  const [display, setDisplay] = useState(false)

  const [isTrue, setisTrue] = useState(false)

  const [userDisplayName, setUserDisplayName] = useState(null)

  const toggle = () => {
    setisTrue(!isTrue)
  }

  const handleToggleDropdown = () => {
    setShowNavCard(!showNavCard)
  }


  return (
    // <Container className='' style={{ maxWidth: '100%'}}>
    <Navbar
      style={{
        backgroundColor: '#043F7C',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
      }}
      expand="lg"
      sticky="top"
    >
      {/* start menu icon */}
      {/* <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}> */}
      {/* web dropdownmenu */}
      {/* <Nav.Link
                    className="d-none d-lg-block"
                    onClick={() => toggle()}
                    style={{
                        backgroundColor: '#043f7c',
                        borderRadius: '3px',
                        paddingLeft: '12px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        paddingRight: '12px',
                    }}>
                    <i
                        style={{ color: '#ffffff' }}
                        className="fa fa-bars fa-lg"></i>
                </Nav.Link> */}
      {/* end web dropdownmenu */}

      {/* mobile dropdownmenu */}
      {/* <Nav.Link className='d-lg-none' onClick={() => this.toggle()} style={{backgroundColor: '#043f7c', borderRadius: '3px', paddingLeft: '13px', paddingRight: '13px'}} >
                            <i style={{color: '#ffffff'}} className="fa fa-bars fa-lg"></i>
                        </Nav.Link> */}
      {/* end mobile dropdownmenu */}
      <Navbar style={{ padding: '2px' }} className="d-lg-none">
        <SideNav />
      </Navbar>

      {/* </ClickAwayListener> */}
      {/* end menu icon */}

      {/* start brand logo */}
      {/* <Navbar.Brand className="ml-3">
                    <a href="/">
                        <img src={Logo} style={{ width: '170px' }} alt="" />
                    </a>
                </Navbar.Brand> */}
      <Navbar.Brand className="ml-3">
        <a
          href={'https://woozeee.com/home'}
        >
          <img src={Logo} style={{ width: '170px' }} alt="" />
        </a>
      </Navbar.Brand>
      {/* end brand logo */}

      {/* start responsive navbar */}
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      <Navbar.Collapse>
        <Nav className="mx-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link> */}

          {/* start search field */}
          <InputGroup className="" style={{ width: '650px' }}>
            {/* <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-primary"
                                title="All"
                                id="input-group-dropdown-1">
                                <Dropdown.Item href="#">
                                    All Departments
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Arts &amp; Crafts
                                </Dropdown.Item>
                                <Dropdown.Item href="#">Hangouts</Dropdown.Item>
                                <Dropdown.Item href="#">Learning</Dropdown.Item>
                                <Dropdown.Item href="#">Worship</Dropdown.Item>
                                <Dropdown.Item href="#">Charity</Dropdown.Item>
                                <Dropdown.Item href="#">Hangouts</Dropdown.Item>
                                <Dropdown.Item href="#">Learning</Dropdown.Item>
                                <Dropdown.Item href="#">Worship</Dropdown.Item>
                                <Dropdown.Item href="#">Charity</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">
                                    Other Services
                                </Dropdown.Item>
                            </DropdownButton> */}
            <FormControl
              placeholder="Where are you going to?"
              aria-describedby="basic-addon1"
            ></FormControl>
            <InputGroup.Append>
              <Button className="bg-white" variant="white">
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          {/* end search field */}
        </Nav>
        <Nav>
          {/* start currency */}
          {/* <NavDropdown
                            className="d-md-block"
                            title="NGN &#x20A6;"
                            id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                USD $
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                EUR £
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                GBP £
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
          {/* end currency */}

          {/*  */}
          {/* <Nav.Link>
                                
                            </Nav.Link> */}
          {/* <Dropdown alignRight>
                            <Dropdown.Toggle
                                variant="transparent"
                                id="dropdown-basic">
                                <ReactCountryFlag
                                    id="collasible-nav-dropdown"
                                    countryCode="Ng"
                                    svg
                                    style={{
                                        width: '2em',
                                        height: '1em',
                                    }}
                                    title="Ng"></ReactCountryFlag>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-3">
                                    {' '}
                                    <i className="fa fa-credit-card"></i> GH
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    {' '}
                                    <i className="fa fa-shopping-bag"></i> USA
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    {' '}
                                    <i className="fa fa-exchange"></i> UK
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    {' '}
                                    <i className="fa fa-question-circle"></i> SA
                                </Dropdown.Item>
                                <Dropdown.Divider />
                            </Dropdown.Menu>
                        </Dropdown> */}
        </Nav>
        <Nav.Link href="#">
          {/* <i
                            className="fa fa-shopping-cart fa-lg"
                            style={{ color: '#043f7c' }}></i>
                        <Badge variant="danger">3</Badge> */}

          {/* <Button color="primary" type="button"> */}
          {/* <span>Notifications</span> */}

          {/* {!this.state.isLoggedIn && ( */}
        </Nav.Link>
        {/* {!props.accessToken  ? (
                        <Nav>
                            <Nav.Link eventKey={2} href="/signin">
                                <Button
                                    onClick={() => window.location.href='/signin'}
                                    stylexx={{ backgroundColor: '#ff5757' }}
                                    variant="outline-danger"
                                    type="submit">
                                    Login
                                </Button>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/signup">
                                <Button
                                    onClick={() => window.location.href='/signup'}
                                    style={{
                                        backgroundColor: '#043f7c',
                                        borderColor: '#043f7c',
                                    }}
                                    variantxx="primary">
                                    Sign Up
                                </Button>{' '}
                            </Nav.Link>
                        </Nav>
                    ) : ""} */}

        {/* {props.user && props.accessToken ? ( */}
        <>
          {/* <Nav.Link style={{ color: '#043f7c' }} eventKey={2}>
                                {props.user ? `Hello ${props.user.firstName}` : 'Hello Marilyn'}
                            </Nav.Link> */}
          <Dropdown alignRight>
            <Dropdown.Toggle onClick={handleToggleDropdown} variant="transparent" id="dropdown-basic" style={{ display: 'flex', alignItems: 'center' }}>
              {userObject && userObject.userImageURL !== null ? (
                <Image
                  src={userObject.userImageURL}
                  style={{ width: '30px', height: '30px' }}
                  roundedCircle
                />
              ) : (
                <UserAvatar size="30" name={capitalize(userObject.userFirstName)} />
              )}
              <span className="text-white ml-2 mr-2">
                {userObject
                  ? `Hi ${userObject.userFirstName}`
                  : ''}
              </span>
              <img src={DropdownIcon} />
            </Dropdown.Toggle>
            {/* <Dropdown.Menu> */}
              {/* <h2>Hello Custom Navbar</h2> */}
              {showNavCard && <NavCard setShowNavCard={setShowNavCard} showNavCard={showNavCard} />}
              {/* <Dropdown.Item href="myaccount/profile">
                                        {' '}
                                        <i className="fa fa-user"></i> Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">
                                        {' '}
                                        <i className="fa fa-shopping-bag"></i>{' '}
                                        Track Orders
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        {' '}
                                        <i className="fa fa-exchange"></i>{' '}
                                        Reorder items
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        {' '}
                                        <i className="fa fa-credit-card"></i>{' '}
                                        Voucher Credit
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        {' '}
                                        <i className="fa fa-question-circle"></i>{' '}
                                        Help
                                    </Dropdown.Item>
                                    <Dropdown.Divider /> */}
              {/* <Dropdown.Item onClick={handleSignOut}>
                {' '}
                <i className="fa fa-power-off"></i> Logout
              </Dropdown.Item>*/}
            {/* </Dropdown.Menu> */}
          </Dropdown>
        </>
        {/* ) : ""} */}
      </Navbar.Collapse>
      {isTrue ? <DropdownMenuComp /> : null}
    </Navbar>
    // </Container>

    // <div>
    //     tfuygihoj;
    // </div>
  )
}

// const mapStateToProps = ({ auth }) => {
//   const { user } = auth;
//   let accessToken
//   if (user) {
//     accessToken = user.accessToken
//   }
//   return {
//     accessToken,
//     user
//   }
// };

// const mapDispatchToProps = (dispatch) => ({
//   logoutUser: () => dispatch(logOut())
// })

//   export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)
