import 'date-fns';
import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

export default function TimeSelect(props){
    return(
        <div style={{textAlign: 'center', marginTop: 40}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Desired Time"
          value={props.time}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiPickersUtilsProvider>
        <div style={{width: 140, margin: 'auto', marginTop: 30}}>
        <Grid item xs style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button onClick={props.back} color="primary">Back</Button>
                        <Button onClick={props.next} color="primary">Next</Button>
                    </ButtonGroup>
        </Grid>
        </div>
        
        </div>
    );
}