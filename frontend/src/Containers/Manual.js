import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Typography } from '@material-ui/core';

class Manual extends Component {
    render() {
        return (
            <div style={{marginTop: 30, textAlign: 'center'}}>
                <Typography variant="h6">Valve 1</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 2</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 3</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 4</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 5</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 6</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 7</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
                <Typography style={{marginTop: 20}} variant="h6">Valve 8</Typography>
                <Grid item xs={1} style={{margin: 'auto'}}>
                    <ButtonGroup variant="contained" fullWidth aria-label="full width outlined button group">
                        <Button color="primary">ON</Button>
                        <Button color="secondary">OFF</Button>
                    </ButtonGroup>
                </Grid>
            </div>
        );
    }
}

export default Manual;