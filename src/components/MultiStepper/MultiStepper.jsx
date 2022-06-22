import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
import { Stepper, Step, StepLabel } from '@material-ui/core';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import getMuiTheme from '@material-ui/styles/getMuiTheme'
// import createMuiTheme from 'material-ui/styles/createMuiTheme'
// @material-ui/core/styles/getmuitheme
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectTabForm from '../SearchTabFormSection/SelectTab'
import FormCardSection from '../FormCardSection/FormCardSections'
import VehicleCardSection from '../VehicleFormCardSection/VehicleFormCardSections'
// import FormSections from '../FormSection/FormSections';
import ConfirmationCardSection from '../ConfirmationCardSection/ConfirmationCardSections'


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#043f7c',
//       main: '#043f7c',
//       dark: '#043f7c',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// })


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
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
  return ['Select', 'Additional Details', 'Insurer Details', 'Confirmation'];
//   return ['Search', 'Select', 'Additional Details', 'Insurer Details', 'Confirmation'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            // return 'xyz';
            return (<SelectTabForm />);
        case 1:
            return (<VehicleCardSection />);
        case 2:
            return (<FormCardSection />);
        case 3:
            return (<ConfirmationCardSection />);
        // case 4:
            
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

// const styles = theme => ({
//   icon: {
//     color: "red !important"
//   },
// });

// const muiTheme = createMuiTheme({
//   stepper: {
//     MuiStepIcon: '#ff0000'
//   }
// })

// import { createMuiTheme } from '@material-ui/core/styles';

    return (
        <div classNamex={classes.root}>
            <Stepper style={{backgroundColor: 'transparent'}} activeStep={activeStep} alternativeLabelxx>
                {steps.map((label) => (
                <Step  key={label}>
                  <StepLabel StepIconProps={{
                    classes: {
                      active: classes.icon
                    }
                    }}>
                      {label}
                  </StepLabel>
                    {/* <StepLabel >{label}</StepLabel> */}
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
