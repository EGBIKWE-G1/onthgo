import React from 'react'
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Breadcrumb,
  Card,
  Button,
} from 'react-bootstrap'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepConnector from '@material-ui/core/StepConnector'

import Typography from '@material-ui/core/Typography'
import FlightSelectTab from '../SearchTabFormSection/FlightSelectTab'
import TicketOptionsTab from '../SearchTabFormSection/TicketOptionsTab'
import FormCardSection from '../FormCardSection/FormCardSections'
import PassengerDetailsTab from '../SearchTabFormSection/PassengerDetailsTab'
// import FormSections from '../FormSection/FormSections';
import ConfirmationTab from '../SearchTabFormSection/ConfirmationTab'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  navigateToFlightPreviousStep,
  setActiveFlightStep,
} from './../../redux/actions/stepper'

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#043F7C',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#043F7C',
    },
  },
  line: {
    borderColor: '#aaa',
    borderTopWidth: 3,
    borderRadius: 1,
  },
  circle: {
    border: '1px solid rgba(0, 0, 0, 0.25)',
    backgroundColor: '#FFF',
    borderRadius: '50%',
  },
})(StepConnector)

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#E5E5E5',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#000',
  },
}))

function getSteps() {
  return ['Select', 'Passenger Details', 'Confirmation']
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <FlightSelectTab />
    case 1:
      return <PassengerDetailsTab />
    case 2:
      return <ConfirmationTab />

    default:
      return 'Error Unknown'
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const activeStep = useSelector((state) => state.stepper.flightStepperIndex)

  const steps = getSteps()
  const isMobile = window.innerWidth < 720

  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(setActiveFlightStep(activeStep++))
  }

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(setActiveFlightStep(activeStep--))
  }

  const handleReset = () => {
    // setActiveStep(0)
    dispatch(setActiveFlightStep(0))
  }

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [activeStep])

  return (
    <div className={classes.root}>
      <div className="container">
        <Row>
          <Col md="12">
            <Stepper
              style={{ backgroundColor: 'transparent' }}
              activeStep={activeStep}
              alternativeLabel={isMobile}
              connector={<QontoConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className={classes.label}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Col>
        </Row>
      </div>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions} as={'div'}>
              {getStepContent(activeStep)}
            </Typography>
            <div style={{ textAlign: 'center' }}>
              {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} > Back </Button> */}
              {/* <Col sm={2} className='mb-4' stylex={{marginTop: '117px'}} className='mb-4'>
                    <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="secondary"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                  </Col> */}
              {/* <Button
                style={{ backgroundColor: '#343a40', color: '#ffffff' }}
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                {' '}
                Back{' '}
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {' '}
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}{' '}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
