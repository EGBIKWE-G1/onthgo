import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import PhoneIcon from '@material-ui/icons/Phone';
import FlightIcon from './../../assets/img/icons/flight-icon.png'
import BusIcon from './../../assets/img/icons/bus.png'
import TrainIcon from './../../assets/img/icons/train-icon.png'
import FerryIcon from './../../assets/img/icons/ferry-icon.png'
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
// import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Col } from 'react-bootstrap'
import InnerTabContent from './InnerTabContent'
import Covid19Content from './Covid19Content'
import PriceAlertContent from './PriceAlertContent'
import TicketInnerTabContent from './TicketInnerTabContent'
// import Covid19Content from './Covid19Content'
import SortPanel from '../Filters/SortPanel'

function InnerTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

InnerTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
}))

const tabs = [
    {
        title: 'Flights',
        icon: <img src={FlightIcon} />,
        summary: 'NGN 282,000 • 20h55m'
    },
    {
        title: 'Buses',
        icon: <img src={BusIcon} />,
        summary: 'NGN 282,000 • 20h55m'
    },
   
    {
        title: 'Ferries',
        icon: <img src={FerryIcon} />,
        summary: 'NGN 282,000 • 20h55m'
    },
     {
      title: 'Trains',
      icon: <img src={TrainIcon} />,
      summary: 'NGN 282,000 • 20h55m'
  },

]

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundColor: 'transparent',
          color: '#3F88C5',
          boxShadow: 'none',
          borderBottom: '1px solid',
          marginLeft: '30px',
          width: '59.5vw'
        }}
        className="colorTransparent"
        position="static"
      >
        <Tabs
          style={{ width: '100%' }}
          value={value}
          onChange={handleChange}
          variant="fullwidth"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          {tabs.map((tab, index) => (<Tab key={index}
            style={{ width: '-webkit-fill-available', width: '180px', paddingTop: '16px', paddingBottom: '8px' }}
            aria-label="flight"
            {...a11yProps(0)} 
            
            label={
              <React.Fragment >
                <div className="d-flex flex-column align-item-center">
                    <div className="d-flex align-items-center">
                    {tab.icon}
                    <h6 className="mb-0" style={{fontSize: '18px', color: '#3F88C5',paddingLeft: '8px', textTransform: 'capitalize'}}>{tab.title}</h6>
                    </div>
                  <div className="align-items-start" style={{paddingLeft: '8px'}}>
                    <h6 className="text-start ml-3 mt-2" style={{ fontSize: '10px', color: '#3F88C5', fontWeight: 'normal' }}>
                      {tab.summary}
                    </h6>
                  </div>
                </div>
              </React.Fragment>
            }
          />))}
         
         
        </Tabs>
      </AppBar>
      <InnerTabPanel value={value} index={0}>
        <SortPanel />
        <br />
        <Covid19Content />
        <br />
        <InnerTabContent />

        <PriceAlertContent />
      </InnerTabPanel>
      <InnerTabPanel value={value} index={1}>
        {/* <Covid19Content />
        <br/>
        <TicketInnerTabContent /> */}
      </InnerTabPanel>
      <InnerTabPanel value={value} index={2}>
        Item Three
      </InnerTabPanel>
      <InnerTabPanel value={value} index={3}>
        Item Four
      </InnerTabPanel>
      {/* <InnerTabPanel value={value} index={4}>
        Item Five
      </InnerTabPanel>
      <InnerTabPanel value={value} index={5}>
        Item Six
      </InnerTabPanel>
      <InnerTabPanel value={value} index={6}>
        Item Seven
      </InnerTabPanel> */}
    </div>
  )
}
