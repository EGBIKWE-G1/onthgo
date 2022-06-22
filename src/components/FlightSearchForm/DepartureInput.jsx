import React, { useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

import './DepartureInput.scss'

import departureDateIcon from '../../assets/img/icons/departure-date-icon.png'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default ({
  setDepartureDateValue,
  departureDateValue,
  setAddReturnValue,
  addReturnValue,
  setReturnDateValue,
  returnDateValue,
  ...others
}) => {
  // const [startDate, setStartDate] = React.useState("04-07-2020");
  const [startDate, setStartDate] = useState(new Date())


  const getMaxDate = () => {
    var dtToday = new Date()

    var month = dtToday.getMonth() + 1
    var day = dtToday.getDate()
    var year = dtToday.getFullYear()
    if (month < 10) month = '0' + month.toString()
    if (day < 10) day = '0' + day.toString()

    var maxDate = year + '-' + month + '-' + day
    return maxDate;
  }

  return (
    <InputGroup style={{ border: '2px solid #999', borderRadius: '5px', backgroundColor: 'white', display: 'flex', }}>
    {/* <InputGroup style={{ border: '1px solid #999', borderRadius: '5px', backgroundColor: 'white', display: 'flex', }}> */}
      <FormControl
        id="departureDateInput"
        placeholder="Departure Date"
        type="date"
        onChange={(e) => setDepartureDateValue(e.target.value)}
        value={departureDateValue}
        min={getMaxDate()}
        {...others}
        required   
           // style={{ width: '60%', height: '40px', border: 'none', boxShadow: 'none', }}
      />
      {addReturnValue === "2" && <FormControl
        id="returnDateValue"
        placeholder="Return Date"
        type="date"
        onChange={(e) => setReturnDateValue(e.target.value)}
        value={returnDateValue}
        min={departureDateValue}
        {...others}
        required={`${addReturnValue === 2 ? true : false}`}

      // style={{ width: '60%', height: '40px', border: 'none', boxShadow: 'none', }}
      />}

      {/* <div className="input-divider"></div> */}
      {/* <FormControl
        id="addReturnInput"
        placeholder="+Add Return"
        type="text"
        onChange={(e) => setAddReturnValue(e.target.value)}
        value={addReturnValue}
        style={{ width: "30%", height: '40px', border: 'none', boxShadow: 'none' }}
        autoComplete="off"
        required
      /> */}
      <select 
        id="addReturnInput"
        onChange={(e) => setAddReturnValue(e.target.value)}
        value={addReturnValue}
        required
              style={{ width: '30%', height: '40px', outline: 'none', border: 'none', boxShadow: 'none',border: '1px solid #999' }}
              // style={{ width: '30%', height: '40px', border: 'none', boxShadow: 'none', }}

      >
        <option value="1">One way</option>
        <option value="2">Round trip</option>
      </select>
    </InputGroup>
  )
}
