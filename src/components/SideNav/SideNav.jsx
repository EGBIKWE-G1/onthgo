// import React, { Component } from 'react';
// import { elastic as Menu } from 'react-burger-menu'
// import menuicon from '../../assets/img/menuicon.png'
// import { Navbar, Nav, NavItem, mouseEvent, NavDropdown, Container, InputGroup, Dropdown, DropdownButton, Button, FormControl, Image } from 'react-bootstrap';
// import transitions from '@material-ui/core/styles/transitions';



// class SideNav extends Component {
    // showSettings (event) {
    //     event.preventDefault();
    // }

    // render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        // var styles = {
        //     bmBurgerButton: {
        //       position: 'fixed',
        //       width: '50px',
        //       height: '50px',
        //       left: '16px',
        //       top: '5px'
        //     },
        //     bmBurgerBars: {
        //       background: '#373a47'
        //     },
        //     bmBurgerBarsHover: {
        //       background: '#a90000'
        //     },
        //     bmCrossButton: {
        //       height: '24px',
        //       width: '24px'
        //     },
        //     bmCross: {
        //       background: '#bdc3c7',
        //       top: '0px'
        //     },
        //     bmMenuWrap: {
        //       position: 'fixed',
        //       height: '100%',
        //       top: '0px',
        //       left: '0px'
        //     },
        //     bmMenu: {
        //       background: '#043f7c',
        //       padding: '2.5em 1.5em 0',
        //       fontSize: '1.15em',
        //       width: '100%'
        //     },
        //     bmMorphShape: {
        //       fill: '#373a47'
        //     },
        //     bmItemList: {
        //       color: '#b8b7ad',
        //       padding: '0.8em'
        //     },
        //     bmItem: {
        //       display: 'inline-block',
        //       color: '#000000'
        //     },
        //     bmOverlay: {
        //       background: 'rgba(0, 0, 0, 0.3)',
        //       top: '0px'
        //     }
        // }
        
        // return (
        //     <div id="outer-container">
        //         <Menu styles={ styles } customBurgerIcon={ <img src={menuicon} /> } >
        //             <a className="menu-item" href="/">sidenav</a>
        //             <a className="menu-item" href="/about">About</a>
        //             <a className="menu-item" href="/contact">Contact</a>
        //         </Menu>
        //     </div>
            // <div id="outer-container">
            //     <Menu className='d-lg-none' customBurgerIcon={ <img src={menuicon} /> } styles={ styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
            //     <main id="page-wrap">
            //         <Nav.Link style={{color: '#ffffff'}} href="#"> MyBank </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/utilities">Pay Bills </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/onthego"> On The Go </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/click-and-shop"> Click &amp; Shop </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/hangout"> Hangout </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/socials"> Socials </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/click-and-play"> Click &amp; Play </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/ask-a-doc"> Ask A Doc </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/ask-a-lawyer"> Ask A Lawyer </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/worship"> Worship </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/learning"> Learning </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/tax-and-levies"> Tax &amp; Levies </Nav.Link>
            //         <Nav.Link style={{color: '#ffffff'}} href="/charity"> Charity </Nav.Link>
            //     </main>
            // </div>
                
//         );
//     }
// }

// export default SideNav;

import React, {useRef} from "react";
import { elastic as Menu } from "react-burger-menu";
import menuicon from '../../assets/img/menuicon.png'
import moneymatters from '../../assets/img/icons/sidenav/money-matters.png'
import mybank from '../../assets/img/icons/sidenav/mybank.png'
import onthego from '../../assets/img/icons/sidenav/on-the-go.png'
import clickplay from '../../assets/img/icons/sidenav/click-play.png'
import billpay from '../../assets/img/icons/sidenav/bill-pay.png'
import clickshop from '../../assets/img/icons/sidenav/click-shop.png'
import askadoc from '../../assets/img/icons/sidenav/ask-doc.png'
import askalawyer from '../../assets/img/icons/sidenav/ask-lawyer.png'
import hangout from '../../assets/img/icons/sidenav/hangout.png'
import woozeee from '../../assets/img/icons/sidenav/woozeee.png'
import worship from '../../assets/img/icons/sidenav/worship.png'
import learning from '../../assets/img/icons/sidenav/learning.png'
import dispatch from '../../assets/img/icons/sidenav/dispatch.png'
import taxlevies from '../../assets/img/icons/sidenav/tax-levies.png'
import charity from '../../assets/img/icons/sidenav/charity.png'
import tradesmen from '../../assets/img/icons/sidenav/tradesmen.png'


export default (props) => {
  const menuRef = useRef(null);

  return (
    // Pass on our props
    <Menu ref={menuRef} className='d-lg-none d-xl-block' width='65%' {...props} customBurgerIcon={ <img src={menuicon} /> }>
      <br/>
      <br/>
      <br/>
      <a className="menu-item" href="moneymatters">
        <img src={moneymatters} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Money Matters
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/">
        <img src={mybank} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; My Bank
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/utilities">
        <img src={billpay} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Bill Pay
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/services">
        <img src={onthego} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; On The Go
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={clickshop} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Click &amp; Shop
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={hangout} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Hangout
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={woozeee} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Socials
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={clickplay} style={{width: '25px'}} alt=""/> &nbsp;&nbsp;Click &amp; Play
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={askadoc} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Ask A Doc
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={askalawyer} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Ask A Lawyer
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={worship} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Worship
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={learning} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Learning
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={taxlevies} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Tax &amp; Levies
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={charity} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Charity
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={tradesmen} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Tradesmen
      </a>
      {/* <hr/> */}
      <a className="menu-item" href="/contact">
        <img src={dispatch} style={{width: '25px'}} alt=""/> &nbsp;&nbsp; Dispatch
      </a>
      {/* <hr/> */}
    </Menu>
  );
};