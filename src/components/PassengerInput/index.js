import React from 'react'
import { Button } from 'react-bootstrap'
import './PassengerInput.css'    
import { useDispatch } from 'react-redux';
import { updatePassengerCounter } from './../../redux/actions/flight';
import PassengerIcon from './../../assets/img/icons/passenger-icon.svg'

import ClickOutHandler from 'react-onclickout'
let minValue;
const PassengerInputItem = ({ label, setData, data, minValue = 0 }) => {
    const [counter, setCounter] = React.useState(data)

    const handleIncrement = () => {
        setCounter(counter + 1)
        setData(counter + 1)
    }

    const handleDecrement = () => {
        if (counter > minValue) {
            setData(counter - 1)
            setCounter(counter - 1)
        }
    }

    return (
        // <div></div>
    <div className="dropdown-item" style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
        <div className="item-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
            <div>{label}</div>
            <div style={{ fontSize: '8px' }}>{` >12yrs`}</div>
        </div>
        <div className="item-action" >
            <Button onClick={handleDecrement} variant="secondary" size="sm" className="ml-1">-</Button>
            <div className="item-counter" style={{ alignSelf: 'center' }}>{counter}</div>
            <Button onClick={handleIncrement} variant="secondary" size="sm" className="mr-1">+</Button>
        </div>
    </div>)
}

const PassengerInput = ({ setAdult, adult, setChildrenValue, childrenValue, setInfants, infants }) => {
    // const dispatch = useDispatch();
    const [isActive, setIsActive] = React.useState(false)



    // const updatePassengerOnChange = () => {
    //     const passengerData = {
    //         adult,
    //         children: childrenValue,
    //         infants
    //     };
    //     // dispatch(updatePassengerCounter(passengerData))
    // }

    // React.useEffect(() => {

    //     updatePassengerOnChange();

    // }, [adult, childrenValue, infants])

    return (
        <ClickOutHandler onClickOut={() => setIsActive(false)} >
            <div className="p-dropdown">
                <img src={PassengerIcon} style={{ position: 'absolute', top: '12px', left: '18px', width: '16px', zIndex: 9 }} />
                <input className="dropdown-btn text-nowrap"
                    style={{ fontSize: '12px', color: '#043F7C', textTransform: 'capitalize', paddingLeft: '24px' }}
                    value={`Adults ${adult}, Children ${childrenValue}, Infants ${infants}`}
                    onClick={() => setIsActive(true)}
                    readOnly
                />    


                {isActive && <div className="dropdown-content">
                    <PassengerInputItem label="Adults" setData={setAdult} data={adult} minValue={1} />
                    <PassengerInputItem label="Children" setData={setChildrenValue} data={childrenValue} />
                    <PassengerInputItem label="Infants" setData={setInfants} data={infants} />
                    {/* <div className="p-2"><Button className="btn-block mb-2" onClick={handlePassengerOK}>OK</Button></div> */}
                </div>}
            </div>
        </ClickOutHandler>
    )
}

export default PassengerInput