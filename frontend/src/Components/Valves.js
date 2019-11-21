import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

export default function Valves(props){
    return (
        <div style={{textAlign: 'center', marginTop: 50}}>
            <TextField
          label="# of Valves(1-8)"
          type="number"
          variant="outlined"
          value={props.numValves}
          onChange={props.handleNumChange('numValves')}
        />
        <div style={{width: 140, margin: 'auto', marginTop: 30}}>
        <Grid item xs style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button onClick={props.back} color="primary">Back</Button>
                        <Button onClick={props.next} color="secondary">Finish</Button>
                    </ButtonGroup>
        </Grid>
        </div>
        </div>
    );
}