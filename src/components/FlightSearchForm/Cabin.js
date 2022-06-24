import React, { useState } from 'react'
import { InputGroup, FormControl, Dropdown } from 'react-bootstrap'

import './DepartureInput.scss'

import departureDateIcon from '../../assets/img/icons/departure-date-icon.png'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default ({
  setCabinValue,
  cabinValue,
  ...others
}) => {
 

  return (

<>
<div className="cabinIput-header" style={{ border: '2px solid #999', borderRadius: '5px', backgroundColor: 'white', display: 'flex' }}>
{/* <div className="cabinIput-header" style={{ border: '1px solid #999', borderRadius: '5px', backgroundColor: 'white', display: 'flex', }}> */}
<div className="CabinHead-select">
<select className="Cabin-Select" onChange={(e) => setCabinValue(e.target.value)} value={cabinValue} required>
        <option value="">Select Cabin Type</option>
        <option value="First Class">FIRST CLASS</option>
        <option value="Business">BUSINESS CLASS</option>
        <option value="Premium Economy">PREMIUM ECONOMY</option>
        <option value="Economy">ECONOMY</option>
      </select>
      </div>
</div>
</>
    // </InputGroup>
  )
}

{/* <select className='cabin-input'
        id="addReturnInput"
        onChange={(e) => setCabinValue(e.target.value)}
        value={cabinValue}
        required
>
        <option value="">Select Cabin Type</option>
        <option value="First Class">FIRST CLASS</option>
        <option value="Business">BUSINESS CLASS</option>
        <option value="Premium Economy">PREMIUM ECONOMY</option>
        <option value="Economy">ECONOMY</option>
      </select>
       */}