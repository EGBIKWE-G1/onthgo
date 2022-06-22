import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OnLogout } from "../../redux/actions/auth";
import { Verticals } from "../../utils/verticals";
import './navcard.scss'
import ClickOutHandler from 'react-onclickout'

import upArrowImg from './navcard-images/upArrow.png'
import logoutIcon from './navcard-images/logoutIcon.png'
import walletIcon from './navcard-images/openedwallet.png'

const NavCard = ({ showNavCard, setShowNavCard }) => {
    const dispatch = useDispatch();

    const userName = JSON.parse(window.localStorage.getItem("userData"))?.data?.fName;
    const userImage = JSON.parse(window.localStorage.getItem("userData"))?.data?.imgUrl;

    const [showCard, setShowCard] = useState(true);

    const handleLogOut = () => {
        dispatch(OnLogout());
    };

    const handleDisplayCard = () => {
        setShowCard(!showCard)
    }

    return (
        <ClickOutHandler onClickOut={() => setShowNavCard(false)} >
            <div className="Navcard-container" style={{ marginTop: '-18px'}}>
                <div className="Navcard-details">
                    <div className="Navcard-details__profile">
                        {userImage ? (<img
                            src={userImage} width="50" height="50"
                            alt=""
                        />) : (<img src="https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Money-Matters%2Fuser-icon.png?alt=media&token=061530a3-0cbb-41f8-a604-05023de7e919" width="40" height="40"
                            alt=""
                            roundedCircle
                        />
                        )}
                        <div className="Navcard-details__profile-name fw-bold">
                            <div>{userName}</div>
                            {/* <div>Go to Profile</div> */}
                        </div>
                    </div>
                    <div className="Navcard-details__balance">
                        <div className="Navcard-details__balance-title">
                            <div>Care balance:</div>
                            <img src={walletIcon} alt="w" />
                        </div>
                        <div className="Navcard-details__balance-amount">
                            <div>N 0.00</div>
                        </div>
                    </div>
                </div>
                <hr style={{ border: "3px solid gray" }} />
                <div className="Navcard-cards">
                    <div className="Navcard-cards__collapsible" onClick={handleDisplayCard}>
                        <p>All cards</p>
                        <hr className="mt-1" style={{ border: "1px solid gray" }} />
                        <img src={upArrowImg} alt="^" className="mb-4" />
                    </div>
                    {showCard && <div className="Navcard-cards__allCards sc">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Shared-Images%2Fwoozeecardblack.png?alt=media&token=85e04ff4-d864-4a3f-a8d2-4f9d6e402485"
                            alt=""
                            width="126px"
                            height="60px"
                            className="sc"
                        />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Shared-Images%2Fwoozeeecardblue.png?alt=media&token=3f92f5db-3475-4e59-afab-d7347be17a30"
                            alt=""
                            width="126px"
                            height="60px"
                            className="sc"
                        />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/woozeee-d7f6c.appspot.com/o/Shared-Images%2Fwoozeeecardred.png?alt=media&token=4606bae9-141b-4309-9c2c-f5a110a39064"
                            alt=""
                            width="126px"
                            height="60px"
                            className="sc"
                        />
                    </div>}
                </div>
                <div className="Navcard-verticals">
                    {Verticals?.map(vertical => {
                        return (
                            <a href={vertical.url}><div className="Navcard-verticals__card mb-0 mt-0 finger">
                                {<img src={vertical.img} alt="M" width="30px" height="30px" />}
                                <p className="text-black mt-3">{vertical.name}</p>
                            </div></a>
                        )
                    })}
                </div>
                <hr style={{ border: "3px solid gray" }} />
                <div className="Navcard-section" onClick={() => handleLogOut()}>
                    <div className="Navcard-section__logout finger" >
                        <img src={logoutIcon} alt="Logouticon" />
                        <p className="mt-3 text-danger fw-bold">Logout</p>
                    </div>
                    {/* <div className="Navcard-section__logout">
                        <img src="" alt="D" />
                        <p>darkmode</p>
                    </div> */}
                </div>
            </div>
        </ClickOutHandler>
    );
};
export default NavCard;
