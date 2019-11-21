import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

export default function Days(props){
    /*
        const [state, setState] = React.useState({
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
      });

      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
    */
    
    return(
        <div style={{marginTop: 30, textAlign: 'center'}}>
            <Grid container>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.mon} onChange={props.handleChange('mon')} color="primary" />}
                        label="Monday"
                        labelPlacement="top"
                    />
                </Grid>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.tue} onChange={props.handleChange('tue')} color="primary" />}
                        label="Tuesday"
                        labelPlacement="top"
                    />
                </Grid>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.wed} onChange={props.handleChange('wed')} color="primary" />}
                        label="Wednesday"
                        labelPlacement="top"
                    />
                </Grid>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.thu} onChange={props.handleChange('thu')} color="primary" />}
                        label="Thursday"
                        labelPlacement="top"
                    />
                </Grid>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.fri} onChange={props.handleChange('fri')} color="primary" />}
                        label="Friday"
                        labelPlacement="top"
                    />
                </Grid>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.sat} onChange={props.handleChange('sat')} color="primary" />}
                        label="Saturday"
                        labelPlacement="top"
                    />
                </Grid>
                <Grid item xs style={{textAlign: 'center'}}>
                    <FormControlLabel
                        control={<Checkbox checked={props.state.sun} onChange={props.handleChange('sun')} color="primary" />}
                        label="Sunday"
                        labelPlacement="top"
                    />
                </Grid>

            </Grid>
            <Button onClick={props.next} variant="contained" color="primary" style={{marginTop: 30}}>Next</Button>
        </div>
    );
}