import React, { Component } from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup,
  Card,
  InputGroup,
  Form,
  FormControl,
  FormCheck,
  Nav,
} from 'react-bootstrap'
import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import exclamationcircle from '../../assets/img/icons/exclamation-circle.png'
import SortDropdown from './SortDropdown'

import FilterIcon from '../../assets/img/icons/filter-icon.svg'

import './SortDropdown.scss'

const filterOptions = [
  { title: 'Cheapest', value: 'cheapest' },
  { title: 'Cheap and fast', value: 'cheap-and-fast' },
  { title: 'Fastest', value: 'fastest' },
  { title: 'Departure time', value: 'departure-time' },
]

export default () => {
  const [selectedItem, setSelectedItem] = React.useState('')

  React.useEffect(() => {
    console.log('selected item', selectedItem)
  }, [selectedItem])

  return (
    <div>
      <Card
        body
        style={{
          boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043)',
          borderRadius: '5px',
          backgroundColor: '#FFF',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <span style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.35)' }}>
              Sorted By:
            </span>
            <SortDropdown
              setSelected={setSelectedItem}
              selected={selectedItem}
              options={filterOptions}
            />
          </div>
          <div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.35)',
              }}
            >
              Filter:
            </span>
            {` `}
            <img src={FilterIcon} />
          </div>
        </div>
      </Card>
    </div>
  )
}
