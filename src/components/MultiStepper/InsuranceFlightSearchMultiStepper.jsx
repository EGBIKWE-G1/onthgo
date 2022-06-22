import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Breadcrumb, Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FlightSelectTab from '../SearchTabFormSection/FlightSelectTab'
import InsuranceFlight from '../FlightSearch/InsuranceFlightSelect'
import FormCardSection from '../FormCardSection/FormCardSections'
import PassengerDetailsTab from '../SearchTabFormSection/PassengerDetailsTab'
// import FormSections from '../FormSection/FormSections';
import ConfirmationTab from '../SearchTabFormSection/ConfirmationTab'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveInsuranceStep } from '../../redux/actions/stepper';
import InsurerDetailsTab from './../SearchTabFormSection/InsurerDetailsTab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select', 'Insurer Details', 'Confirmation'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return ( <InsuranceFlight /> );
        case 1:
            return ( <InsurerDetailsTab /> );
        case 2:
            return ( <ConfirmationTab /> );
        
        default:
            return 'Error Unknown';
    }
    
}

export default function HorizontalLabelPositionBelowStepper() {
  const dispatch = useDispatch()
    const classes = useStyles();
    // const [activeStep, setActiveStep] = React.useState(0);
    const activeStep = useSelector(state => state.stepper.insuranceStepperIndex)
    const steps = getSteps();

    const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch( setActiveInsuranceStep(activeStep++) )
};

    const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch( setActiveInsuranceStep(activeStep--) )
};

    const handleReset = () => {
    // setActiveStep(0);
    dispatch( setActiveInsuranceStep(0) )
};

    return (
        <div className={classes.root}>
          
            <Stepper style={{backgroundColor: 'transparent'}} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
              
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                <div>
                <Typography className={classes.instructions} as={`div`}>{getStepContent(activeStep)}</Typography>
                <div style={{textAlign: 'center'}}>
                  {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} > Back </Button> */}
                  {/* <Col sm={2} className='mb-4' stylex={{marginTop: '117px'}} className='mb-4'>
                    <Button href='/' style={{ borderRadius: '20px', fontSize: '12px' }} variant="secondary"><i className="fa fa-arrow-left"></i> &nbsp; Back</Button>
                  </Col> */}
                  {/* <Button style={{backgroundColor: '#343a40', color: '#ffffff'}} disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} > Back </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button> */}
                </div>
          </div>
        )}
      </div>
    </div>
  );
}
