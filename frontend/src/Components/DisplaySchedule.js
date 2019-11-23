import React from 'react';
import {Paper, Grid, Typography, Button} from '@material-ui/core';
import DateRange from '@material-ui/icons/DateRange';
import Timer from '@material-ui/icons/Timer';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ValveIcon from '@material-ui/icons/InvertColors';

export default function DisplaySchedule(props){
    function displayDays(daysArr){
        let dayStr = "";
        for(const x in daysArr){
            if(parseInt(x) === (daysArr.length - 1)){
                dayStr = dayStr + daysArr[x]
            }
            else{
                dayStr = dayStr + daysArr[x] + '/';
            }
        }
        return dayStr;
    }
    function displayTime(timeString){
        let addon = ' AM';
        let hours = parseInt(timeString.substring(0,2));
        let rest = timeString.substring(2,5);
        if (hours > 12){
            hours = hours - 12;
            addon = ' PM';
            return String(hours) + rest + addon;
        }
        else{
            return timeString + addon;
        }
    }
    return (
        <Paper style={{margin: 'auto', marginTop: 80, width: 500, height: 350}}>
            <Typography align="center" variant="h4">CURRENT SCHEDULE</Typography>
            <Grid container style={{marginLeft: 36, marginTop: 20}}>
                <Grid item xs={2}>
                    <DateRange style={{fontSize: 50}}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{marginTop: 11.5}} variant="h5">{displayDays(props.displayData.days)}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{marginLeft: 36}}>
                <Grid item xs={2}>
                    <ScheduleIcon style={{fontSize: 50}}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{marginTop: 11.5}} variant="h5">{displayTime(props.displayData.startTime)}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{marginLeft: 36}}>
                <Grid item xs={2}>
                    <Timer style={{fontSize: 50}}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{marginTop: 11.5}} variant="h5">{props.displayData.duration + ' Minute(s)'}</Typography>
                </Grid>
            </Grid>

            <Grid container style={{marginLeft: 36, marginBottom: 20}}>
                <Grid item xs={2}>
                    <ValveIcon style={{fontSize: 50}}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{marginTop: 11.5}} variant="h5">{props.displayData.stations + ' Valve(s)'}</Typography>
                </Grid>
            </Grid>
            <div style={{textAlign: "center"}}>
                <Button onClick={props.delSchedule} variant="contained" color='primary'>Modify Schedule</Button>
            </div> 
        </Paper>
    );
}