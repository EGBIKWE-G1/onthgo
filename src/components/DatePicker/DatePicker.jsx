import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';

import options from './Data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
// import './styles.css';

class DatePicker extends React.Component {
  state = {
    selected: [],
  };

  render() {
    return (
      <Typeahead
        {...this.state}
        id="basic-example"
        onChange={selected => this.setState({ selected })}
        options={options}
        placeholder="Choose a state..."
      />
    );
  }
}

ReactDOM.render(<DatePicker />, document.getElementById('root'));