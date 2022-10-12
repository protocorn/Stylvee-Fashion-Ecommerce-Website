import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

export default function CheckOutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel style={{margin:20}}>
      {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ) 
      )}
    </Stepper>
  );
}
