import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

export default function Duration(props){
    return (
        <div style={{textAlign: 'center', marginTop: 50}}>
            <TextField
          label="Duration(Minutes)"
          type="number"
          variant="outlined"
          value={props.duration}
          onChange={props.handleNumChange('duration')}
        />
        <div style={{width: 140, margin: 'auto', marginTop: 30}}>
        <Grid item xs style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button onClick={props.back} color="primary">Back</Button>
                        <Button onClick={props.next} color="secondary">Next</Button>
                    </ButtonGroup>
        </Grid>
        </div>
        </div>
    );
}