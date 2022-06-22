import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';

class Calendar extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: Date
        })
    }

    render() {
        return (
            <div>
                <DatePicker style={{width: '100%'}} 
                    selected={this.state.startDate} 
                    // onSelect={this.handleSelect} 
                    // onChange={this.handleChange} 
                />
            </div>
        )
    }
}

export default Calendar;