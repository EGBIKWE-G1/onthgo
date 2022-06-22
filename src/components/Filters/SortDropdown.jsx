import React, { useState } from 'react'
import './SortDropdown.scss'
import ArrowDownIcon from '../../assets/img/icons/arrow-down.svg'

export default ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="dropdown">
      <span
        className="dropdown-btn"
        style={{ fontSize: '12px', color: '#043F7C', textTransform: 'capitalize' }}
        onClick={() => setIsActive(true)}
      >
        {selected ? selected : 'Cheapest'} <img className="ml-1 mt-1" src={ArrowDownIcon} />{' '}
      </span>
      {isActive && <div className="dropdown-content">
        <div className="dropdown-item" onClick={() => {
          setSelected('cheapest');
          setIsActive(false)
        }}>Cheapest</div>
        {/* <div className="dropdown-item" onClick={() => {
          setSelected('Cheap and fast');
          setIsActive(false)
        }}>Cheap and fast</div>
        <div className="dropdown-item" onClick={() => {
          setSelected('Fastest');
          setIsActive(false)
        }}>Fastest</div>
        <div className="dropdown-item" onClick={() => {
          setSelected('Departure Time');
          setIsActive(false)
        }}>Departure Time</div> */}
      </div>}
    </div>
  )
}
