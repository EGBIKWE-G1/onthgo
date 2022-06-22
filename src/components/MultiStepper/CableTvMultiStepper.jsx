import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FlightSelectTab from '../SearchTabFormSection/FlightSelectTab'
import TicketOptionsTab from '../SearchTabFormSection/TicketOptionsTab'
import FormCardSection from '../FormCardSection/FormCardSections'
import PassengerDetailsTab from '../SearchTabFormSection/PassengerDetailsTab'
// import FormSections from '../FormSection/FormSections';
import CableTvConfirmationTab from '../Utilities/CableTv/CableTvConfirmationCard'
import BuyCableTvDetailsTab from '../Utilities/CableTv/BuyCableTvDetailsTab';
import ArtimeSuccessDetailsCard from '../Utilities/CableTv/CableTvSuccessDetailsCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
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
  return ['TV Subscription', 'Confirmation'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return ( <BuyCableTvDetailsTab /> );
        case 1:
            return ( <CableTvConfirmationTab /> );
        // case 2:
        //     return ( <PassengerDetailsTab /> );
        // case 3:
        //     return ( <ConfirmationTab /> );
        
        default:
            return 'Error Unknown';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

    const handleReset = () => {
    setActiveStep(0);
};

    return (
        <div className={classes.root}>
            <Stepper style={{backgroundColor: 'transparent'}} activeStep={activeStep} alternativeLabelxx>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        {/* <Typography className={classes.instructions}>All steps completed</Typography> */}
                        <Typography className={classes.instructions}>
                          <ArtimeSuccessDetailsCard />
                        </Typography>
                        {/* <Button onClick={handleReset}>Reset</Button> */}
                    </div>
                ) : (
                <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div style={{textAlign: 'center'}}>
                  {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} > Back </Button> */}
                  <Button style={{backgroundColor: '#343a40', color: '#ffffff'}} disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} > Back </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
                </div>
          </div>
        )}
      </div>
    </div>
  );
}
