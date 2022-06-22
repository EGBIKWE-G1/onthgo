import React, { Component } from "react";
import './LikeButton.css'

// class LikeButton extends Component {
//     constructor() {
//       super();
//       this.state = {
//         liked: false
//       };
//       this.handleClick = this.handleClick.bind(this);
//     } 
    
//     handleClick() {
//       this.setState({
//         liked: !this.state.liked
//       });
//     }
    
//     render() {
//       const text = this.state.liked ? 'liked' : 'haven\'t liked';
//       const label = this.state.liked ? 'Unlike' : 'Like'
//       const label = this.state.liked ? 'Unlike' : 'Like'
//       return (
//         <div className="customContainer" style={{marginTop: '-170px', marginLeft: '240px'}}>
//             <i  onClick={this.handleClick}>{label}</i>
//           <button className="btn btn-primary" onClick={this.handleClick}>
//             {label}</button> */}
//           <p>
//             you {text} this. Click to toggle.
//           </p>
//         </div>
//       );
//     }
//   }

// export default LikeButton;
  
// ReactDOM.render(
//     <LikeButton />,
//     document.getElementById('example')
// )

// window.onload = () => console.info("You can always click on it 😉");

// </script><script type="text/babel">
// const {Component} = React;


class LikeButton extends Component {
    like = () => {
        this.setState ({liked: !this.state.liked})
    }
    
    constructor(props) {
        super(props);
        this.state = {liked: false}
        this.like = this.like.bind(this);
    }
    
    render() {
        let status,
        style = {}, 
        styleLike = {}
        if (!this.state.liked) {
            // status = "Do you like it?";
            style = {
                // marginTop: "5px",
                // fontSize: '40px',
            }
            styleLike = {
                // color: "rgb(244, 30, 64)",
                color: '#eaecef'
            }
        } else {
            style = {
                // background: "rgb(244, 30, 64)",
                // background: 'rgb(3,0,1)'
                // marginBottom: "-10px",
                // animation: "storm 2s 1s"
            }
            styleLike = {
                color: "#ff0000",
                animation: "like 4s"
            }
            // status = "You like it!";
        }
        
        return (
            <div className='ml-autox' stylexx={{top: '-4px', marginRight: '10px', WebkitTransition: 'all 2s .2s', MozTransition: 'all 2s .3s', transition: 'all 2s .3s'}}>
                <div onClick={this.like} style={style} className="hearth-circle">
                    <i style={styleLike} className="fa fa-heart fa-5x" id="like"></i>                    
                </div>
                <h4 className='status'>{status}</h4>
            </div>
        )
    }
};

export default LikeButton;