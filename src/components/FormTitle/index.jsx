import React from 'react'
import {
  Jumbotron,
  Modal,
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
} from 'react-bootstrap'

const passengerStyle = {
  titleGroupContainer: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'flex-start',
  },
}

const FormTitle = ({ title, setTitle, setPassengerDetail, passengerDetail }) => {
  return (
    <Form.Group as={Col} md="12">
      <div style={passengerStyle.titleGroupContainer}>
        <div
          onClick={() => {
            setTitle('mr')
            setPassengerDetail({ ...passengerDetail, title: 'Mr', gender: 'MALE' })
          }}
          className={`title ${title == 'mr' ? 'selected-title' : ''}`}
        >
          {title === 'mr' && (
            <i className="fa fa-check" style={{ color: 'white' }}></i>
          )}
          {` `}
          <span>Mr</span>
        </div>
        <div
          onClick={() => {
            setTitle('mrs')
            setPassengerDetail({ ...passengerDetail, title: 'Mrs', gender: 'FEMALE' })
          }}
          className={`title ${title == 'mrs' ? 'selected-title' : ''}`}
        >
          {title === 'mrs' && (
            <i className="fa fa-check" style={{ color: 'white' }}></i>
          )}
          {` `}
          <span>Mrs</span>
        </div>
        <div
          onClick={() => {
            setTitle('miss')
            setPassengerDetail({ ...passengerDetail, title: 'Miss', gender: 'OTHERS' })
          }}
          className={`title ${title == 'miss' ? 'selected-title' : ''}`}
        >
          {title === 'miss' && (
            <i className="fa fa-check" style={{ color: 'white' }}></i>
          )}
          {` `}
          <span>Miss</span>
        </div>
      </div>
    </Form.Group>
  )
}

export default FormTitle
