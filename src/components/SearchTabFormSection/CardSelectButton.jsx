import React from 'react'
import { Jumbotron, Container, Col, Image, CardDeck } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Row } from 'react-bootstrap'
import cabinbagimg from '../../assets/img/icons/cabinbag.png'
import infoimg from '../../assets/img/icons/info.png'

import cabinBagIcon from '../../assets/img/icons/cabinbag.svg'
import cabinBagIconActive from '../../assets/img/icons/cabinbag-active.svg'
import checkedIcon from '../../assets/img/icons/checked.svg'
import checkedIconActive from '../../assets/img/icons/checked-active.svg'
import refundableIcon from '../../assets/img/icons/refundable.svg'
import refundableActiveIcon from '../../assets/img/icons/refundable-active.svg'
import seatIcon from '../../assets/img/icons/seat.svg'
import seatActiveIcon from '../../assets/img/icons/seat-active.png'
import nonRefundableIcon from '../../assets/img/icons/non-refundable.svg'

import airpeaceimg from '../../assets/img/icons/flightbrands/airpeace.png'
import ToggleButton from '@material-ui/lab/ToggleButton'
import './ButtonCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTicketOption } from './../../redux/actions/flight'


const useStyles = makeStyles({
  root: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.85)',
    border: '0.5px solid rgba(0, 0, 0, 0.35)',
    boxSizing: ' border-box',
    textAlign: 'left',
    '&:active ': {
      background: 'rgba(1, 188, 246, 0.05)',
      border: ' 0.5px solid #043F7C',
      boxSizing: 'border-box',
      borderRadius: '10px',
      outline: 0,
      color: '#043F7C'
    },
    '&:focus': {
      background: 'rgba(1, 188, 246, 0.05)',
      outline: 0,
      color: '#043F7C',
      border: ' 0.5px solid #043F7C',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  },
  cardd: {
    '&:hover': {
      background: '#efefef',
    },
  },

})

export default function OutlinedCard({ ticketOptions }) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const [selected, setSelected] = React.useState(false)
  const selectedTicket = useSelector(state => state.flight.data?.ticketOption)


  const dispatch = useDispatch()


  React.useEffect( () => {
    console.log('selected ticket', selectedTicket)
  }, [selectedTicket])

  const handleSelectedTicketOption = (ticket) => {
    dispatch(selectedTicketOption(ticket))
  }

  return (
    <div
      className=''
      style={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
    >
      <div
        className="justify-content-center p-4"
        style={{ backgroundColor: 'transparent' }}
      >
        <p>
          {' '}
          <span
            style={{ fontWeight: 'bold', fontSize: '18px', color: '#043F7C' }}
          >
            Class &amp; Fare
          </span>{' '}
          <span style={{ float: 'right' }}>
            {' '}
            <Image
              style={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 5px 0px #ccc',
                marginBottom: '18px',
              }}
              width="40px"
              src={airpeaceimg}
              alt=""
              roundedCircle
            />
          </span>
        </p>
        <hr className="mb-2" style={{ color: '#043f7c' }} />
      </div>
      <Row className="pl-4 pr-4">
        {ticketOptions.map((ticket, index) => (
          <Col
            key={index}
            md={4}
            className={`mb-2 MuiToggleButton-root `} 
            style={ {cursor: 'pointer'} }
            onClick={() => handleSelectedTicketOption(ticket)}
          >
            <button
              className={`default-selected-card ${ selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card-outline' : ''}` }
              variant="outlined"
              style={{ padding: '20px' }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''} style={{
                   fontSize: '16px',
                   fontWeight: 'bold',
               color: '#043F7C'
                }}>
                  {ticket.title}
                </Typography>
                <br />
                <span className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''}>
                  {' '}
                  <Image src={selectedTicket !== null && ticket.id == selectedTicket?.id ? cabinBagIconActive : cabinBagIcon } alt="" /> Cabin Bag
                </span>
                <br />
                <br />
                {ticket?.id === 1 && <span className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''}>
                  {' '}
                  <Image src={selectedTicket !== null && ticket.id == selectedTicket?.id ? checkedIconActive : checkedIcon} alt="" /> Non refundable
                </span>}
               {ticket?.id !== 1 &&  <span className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''}>
                  {' '}
                  <Image src={selectedTicket !== null && ticket.id == selectedTicket?.id ? checkedIconActive : checkedIcon} alt="" /> Checked Bag
                </span>}
                <br />
                <br />
                {ticket?.id !== 1 && <span className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''}>
                  {' '}
                  <Image src={selectedTicket !== null && ticket.id == selectedTicket?.id ? refundableActiveIcon : refundableIcon} alt="" /> Full Refundable
                </span>}
                <br />
                <br />
                {ticket?.id !== 1 && <span className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''}>
                  {' '}
                  <Image src={selectedTicket !== null && ticket.id == selectedTicket?.id ? seatActiveIcon : seatIcon } alt="" /> Seat Selection
                </span>}
                <br />
                <br />
                <br />
                <h4 className={selectedTicket !== null && ticket.id == selectedTicket?.id ? 'selected-card' : ''}> &#8358;{ticket.price} </h4>
              </CardContent>
            </button>
            {/* </Card> */}
          </Col>
        ))}
      </Row>
      <div
        className="justify-content-md-center"
        style={{
          backgroundColor: 'transparent',
          paddingLeft: '25px',
          paddingBottom: '10px',
          widthxx: '600px',
        }}
      >
        <p>
          {' '}
          <span>
            <b style={{ color: '#043f7c' }}>Read more</b> about these fares
          </span>{' '}
        </p>
      </div>
    </div>
  )
}

/**
 *  <Col md={4} className='mb-4'>
                <button className={classes.root} variant="outlined" style={{padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Business Class
                        </Typography>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Checked Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Semi Refundable</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}}> <Image src={infoimg} alt=""/> Seat Selection</span>
                        <br/>
                        <br/>
                        <br/>
                        <h4 style={{color: '#000000'}}> &#8358;285,940 </h4>
                    </CardContent>
                </button>
            </Col>
            <Col md={4} className='mb-4'>
                <button className={classes.root} variant="outlined" style={{padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        Economy
                        </Typography>
                        <br/>
                        <span style={{color: '#000000'}} className='mb-4'> <Image src={cabinbagimg} alt=""/> Cabin Bag</span>
                        <br/>
                        <br/>
                        <span style={{color: '#000000'}} className='mb-4'> <Image src={infoimg} alt=""/> Non Refundable</span>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        <h4 style={{color: '#000000'}}> &#8358;199,145 </h4>
                    </CardContent>
                </button>
            </Col>
 */
