import React, { Component, Fragment } from "react";
import './DropdownMenu.css'
// import './MobileDropdownMenu.css'

class DropdownMenu extends Component {
    constructor() {
      super();
      
    }

  render() {
    return (
      // <div>
        <div className="d-none d-lg-block dropdownmenu">
          <div className="d-none d-lg-block dropdownmenucontent">
            <div class="row">
              <div class="column">
                <h6 style={{color: 'white'}}><b>Money Matters</b></h6>
                <a href="#">Savings and loans</a>
                <a href="#">Insurance</a>
                <a href="#">Wallet</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>UBA</b></h6>
                <a href="#">Check Balance</a>
                <a href="#">Airtime</a>
                <a href="#">Data</a>
                <a href="#">Transfer Money</a>
                <a href="#">Buy Utilities</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>On The Go</b></h6>
                <a href="#">Flight</a>
                <a href="#">Bus</a>
                <a href="#">Train</a>
                <a href="#">Ferry</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Click &amp; Play</b></h6>
                <a href="#">Sport Bet</a>
                <a href="#">Lotto</a>
                <a href="#">Casino</a>
                <a href="#">Virtual Games</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Bill Pay</b></h6>
                <a href="#">Airtime</a>
                <a href="#">Data</a>
                <a href="#">Cable TV</a>
                <a href="#">Electricity</a>
                <a href="#">Internet</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Click &amp; Shop</b></h6>
                <a href="#">Food</a>
                <a href="#">Fashion</a>
                <a href="#">Electronics</a>
                <a href="#">Car</a>
                <a href="#">More</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Ask A Doc</b></h6>
                <a href="#">Hospital</a>
                <a href="#">Pharmacy</a>
                <a href="#">Laboratory</a>
                <a href="#">Virtual Doctor</a>
                <a href="#">Internet</a>
              </div>
              
            </div>
            <br/>
            <br/>
            {/* <hr/> */}
            {/* second row */}
            <div class="row">
              <div class="column">
                <h6 style={{color: 'white'}}><b>Hangout</b></h6>
                <a href="#">Restaurants</a>
                <a href="#">Hotels</a>
                <a href="#">Cinemas</a>
                <a href="#">Fitness Center &amp; Spa</a>
                <a href="#">Night Clubs</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Learning</b></h6>
                <a href="#">Pay School Fees</a>
                <a href="#">Buy JAMB Scratch Card</a>
                <a href="#">Buy WAEC Scratch Card</a>
                <a href="#">Buy NECO Scratch Card</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Worship</b></h6>
                <a href="#">Pay Tithe</a>
                <a href="#">Pay Offerings</a>
                <a href="#">Churches around me</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Tax &amp; Levies</b></h6>
                <a href="#">NIMC</a>
                <a href="#">Pay Tax</a>
                <a href="#">Pay LAWMA</a>
                <a href="#">Pay Toll Fees</a>
                <a href="#">Pay LIRS</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Charity</b></h6>
                <a href="#">Make Donation</a>
                <a href="#">Receive Donation</a>
                <a href="#">Around Me</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Dispatch</b></h6>
                <a href="#">Send a Package</a>
                <a href="#">Receive a Package</a>
              </div>
              <div className="column">
                <h6 style={{color: 'white'}}><b>Other Services</b></h6>
                <a href="#">News</a>
                <a href="#">Events</a>
                <a href="#">Talents</a>
                <a href="#">Woozeee Villa</a>
                <a href="#">18+ Rooms</a>
              </div>
            </div>
          </div>
        </div>
        
        // mobile dropdown
        // <div className="d-lg-none mobiledropdownmenu">
        //   <div className="d-lg-none mobiledropdownmenucontent">
        //     <div class="row">
        //       <div class="column">
        //         <h6 style={{color: 'white'}}><b>Money Matter</b></h6>
        //         <a href="#">Savings and loans</a>
        //         <a href="#">Insurance</a>
        //         <a href="#">Wallet</a>
        //       </div>
        //       <div className="column">
        //         <h6 style={{color: 'white'}}><b>UBA</b></h6>
        //         <a href="#">Check Balance</a>
        //         <a href="#">Airtime</a>
        //         <a href="#">Data</a>
        //         <a href="#">Transfer Money</a>
        //         <a href="#">Buy Utilities</a>
        //       </div>
        //       <div className="column">
        //         <h6 style={{color: 'white'}}><b>On The Go</b></h6>
        //         <a href="#">Flight</a>
        //         <a href="#">Bus</a>
        //         <a href="#">Ferry</a>
        //         <a href="#">Train</a>
        //       </div>
        //       <div className="column">
        //         <h6 style={{color: 'white'}}><b>Click &amp; Play</b></h6>
        //         <a href="#">Sport Bet</a>
        //         <a href="#">Lotto</a>
        //         <a href="#">Casino</a>
        //         <a href="#">Virtual Games</a>
        //       </div>
        //       <div className="column">
        //         <h6 style={{color: 'white'}}><b>Bill Pay</b></h6>
        //         <a href="#">Airtime</a>
        //         <a href="#">Data</a>
        //         <a href="#">Electricity</a>
        //         <a href="#">TV/Cable</a>
        //         <a href="#">Internet</a>
        //       </div>
        //       <div className="column">
        //         <h6 style={{color: 'white'}}><b>Click &amp; Shop</b></h6>
        //         <a href="#">Food</a>
        //         <a href="#">Fashion</a>
        //         <a href="#">Electronics</a>
        //         <a href="#">Car</a>
        //         <a href="#">More</a>
        //       </div>
        //       <div className="column">
        //         <h6 style={{color: 'white'}}><b>Ask A Doc</b></h6>
        //         <a href="#">Hospital</a>
        //         <a href="#">Pharmacy</a>
        //         <a href="#">Laboratory</a>
        //         <a href="#">Virtual Doctor</a>
        //         <a href="#">Internet</a>
        //       </div>
              
        //     </div>
        //     <br/>
        //     <br/>
              // <hr/>
            // second row
            // <div class="row">
            //   <div class="column">
            //     <h6 style={{color: 'white'}}><b>Hangout</b></h6>
            //     <a href="#">Restaurants</a>
            //     <a href="#">Hotels</a>
            //     <a href="#">Cinemas</a>
            //     <a href="#">Fitness Center &amp; Spa</a>
            //     <a href="#">Night Clubs</a>
            //   </div>
            //   <div className="column">
            //     <h6 style={{color: 'white'}}><b>Learning</b></h6>
            //     <a href="#">Pay School Fees</a>
            //     <a href="#">Buy JAMB Scratch Card</a>
            //     <a href="#">Buy WAEC Scratch Card</a>
            //     <a href="#">Buy NECO Scratch Card</a>
            //   </div>
            //   <div className="column">
            //     <h6 style={{color: 'white'}}><b>Worship</b></h6>
            //     <a href="#">Pay Tithe</a>
            //     <a href="#">Pay Offerings</a>
            //     <a href="#">Churches around me</a>
            //   </div>
            //   <div className="column">
            //     <h6 style={{color: 'white'}}><b>Tax &amp; Levies</b></h6>
            //     <a href="#">Appl For NIMC</a>
            //     <a href="#">Pay Tax</a>
            //     <a href="#">Pay LAWMA</a>
            //     <a href="#">Pay Toll Fees</a>
            //     <a href="#">Pay LIRS</a>
            //   </div>
            //   <div className="column">
            //     <h6 style={{color: 'white'}}><b>Charity</b></h6>
            //     <a href="#">Make Donation</a>
            //     <a href="#">Receive Donation</a>
            //     <a href="#">Around Me</a>
            //   </div>
            //   <div className="column">
            //     <h6 style={{color: 'white'}}><b>Dispatch</b></h6>
            //     <a href="#">Send a Package</a>
            //     <a href="#">Receive a Package</a>
            //   </div>
            //   <div className="column">
            //     <h6 style={{color: 'white'}}><b>Other Services</b></h6>
            //     <a href="#">News</a>
            //     <a href="#">Events</a>
            //     <a href="#">Talents</a>
            //     <a href="#">Wooz Community</a>
            //     <a href="#">18+ Rooms</a>
            //   </div>
            // </div>
        //   </div>
        // </div>
      // </div>
        
    );
  }
}

export default DropdownMenu;

