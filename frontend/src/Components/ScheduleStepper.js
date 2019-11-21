import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Days from './Days';
import TimeSelect from './TimeSelect';
import Duration from './Duration';
import Valves from './Valves';

export default function ScheduleStepper(props){
    const [activeStep, setActiveStep] = React.useState(0);
    function getContent(step){
        switch(step){
            case 0:
                return <Days state={props.state} handleChange={props.handleChange} next={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}/>;
            case 1:
                return <TimeSelect time={props.state.startTime} handleDateChange={props.handleDateChange} back={() => setActiveStep(prevActiveStep => prevActiveStep - 1)} next={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}/>;
            case 2:
                return <Duration handleNumChange={props.handleNumChange} duration={props.state.duration} back={() => setActiveStep(prevActiveStep => prevActiveStep - 1)} next={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}/>
            case 3:
                return <Valves handleNumChange={props.handleNumChange} numValves={props.state.numValves} back={() => setActiveStep(prevActiveStep => prevActiveStep - 1)} next={() => setActiveStep(prevActiveStep => prevActiveStep + 1)}/>
            default:
                return <h1>Unknown Step</h1>
        }
    }
    return(
        <div style={{margin: 'auto', marginTop: 20, maxWidth: 1200}}>
        <Stepper activeStep={activeStep}>
            <Step>
                <StepLabel>
                    Select Days of the Week
                </StepLabel>
            </Step>
            <Step>
                <StepLabel>
                    Select Start Time
                </StepLabel>
            </Step>
            <Step>
                <StepLabel>
                    Select Duration
                </StepLabel>
            </Step>
            <Step>
                <StepLabel>
                    Select # of Valves
                </StepLabel>
            </Step>
        </Stepper>
        {getContent(activeStep)}
        
        </div>
    );
}