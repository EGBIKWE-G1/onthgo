import React, { useState, useEffect } from 'react'
import { Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import './AutoCompleteInput.scss'

const AutoCompleteInput = (props) => {
  const [active, setActive] = useState(0)
  const [filtered, setFiltered] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [input, setInput] = useState(props.value || '')

  const onChange = (e) => {
    const { suggestions, setSelectedValue } = props
    const input = e.currentTarget.value

    console.log('input', input)

    setInput(e.currentTarget.value)
    setSelectedValue(e.currentTarget.value)
    const newFilteredSuggestions = suggestions.filter((suggestion) => {
      if (suggestion.name !== null)
        return (
          suggestion?.name.toLowerCase().indexOf(input.toLowerCase()) > -1 ||
          suggestion?.iata.toLowerCase().indexOf(input.toLowerCase()) > -1
        )
    })
    setActive(0)
    setFiltered(newFilteredSuggestions)
    setIsShow(true)
  }
  const handleSelectedItem = (data) => {
    setActive(0)
    setFiltered([])
    setIsShow(false)
    // console.log('selected item ', data)
    setInput(` (${data?.iata}) ${data?.name}`)
    props.setSelectedValue(data)
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0)
      setIsShow(false)
      setInput(filtered[active]?.name)
      props.setSelectedValue(filtered[active])
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1)
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1)
    }
  }
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className
              if (index === active) {
                className = 'active'
              }
              return (
                <li className={className} key={index} onClick={() => handleSelectedItem(suggestion)}>
                  ({suggestion?.iata}) {suggestion?.name}
                </li>
              )
            })}
          </ul>
        )
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        )
      }
    }
    return <></>
  }
  return (
    <div className="searchbox">
      <div className="icon">
        <img src={props.icon} style={{ width: '12px' }} />
      </div>
      <FormControl
        style={{
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          boxShadow: 'none',
          height: '42px',
          backgroundColor: 'white',
          ...props.style,
        }}
        id="inlineFormInputGroup"
        placeholder={props.labelText}
        required
        type="text"
        value={input}
        // defaultValue={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete="off"
        name={props.name}
      />

      {renderAutocomplete()}
    </div>
  )
}
export default AutoCompleteInput
