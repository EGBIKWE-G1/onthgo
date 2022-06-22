import React from 'react';

import './FormInput.scss'

export default ({ type = "text", labelText = "", icon, value, setValue, ...otherProps }) => {
    return (
        <div className="input-box">
            <div className="icon"><img src={icon} style={{width: '16px'}} /></div>
            <input 
            type={type} 
            placeholder={labelText} 
            value={value}       
            onChange={e => setValue(e.target.value)}
            {...otherProps} 
        />
        </div>
    )
}