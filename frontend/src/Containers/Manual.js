import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography } from '@material-ui/core';

class Manual extends Component {
    render() {
        return (
            <div style={{marginTop: 80, textAlign: 'center'}}>
                <Typography variant="h5">ON</Typography>
                <Grid item xs={12} md={6} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" color="primary" fullWidth aria-label="full width outlined button group">
                        <Button>Valve 1</Button>
                        <Button>Valve 2</Button>
                        <Button>Valve 3</Button>
                        <Button>Valve 4</Button>
                        <Button>Valve 5</Button>
                        <Button>Valve 6</Button>
                        <Button>Valve 7</Button>
                        <Button>Valve 8</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 80}} variant="h5">OFF</Typography>
                <Grid item xs={12} md={6} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" color="secondary" fullWidth aria-label="full width outlined button group">
                        <Button>Valve 1</Button>
                        <Button>Valve 2</Button>
                        <Button>Valve 3</Button>
                        <Button>Valve 4</Button>
                        <Button>Valve 5</Button>
                        <Button>Valve 6</Button>
                        <Button>Valve 7</Button>
                        <Button>Valve 8</Button>
                    </ButtonGroup>
                </Grid>
            </div>
        );
    }
}

export default Manual;