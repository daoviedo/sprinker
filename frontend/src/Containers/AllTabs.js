import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Manual from './Manual';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function AllTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function output(value){
    switch(value){
      case 0:
        return <h1>t1</h1>
      case 1:
        return <h1>t2</h1>
      case 2:
        return <Manual/>
      default:
        return <h1>t1</h1>
    }
  }

  return (
    <div>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value={0} />
        <Tab label="Schedule" value={1} />
        <Tab label="Manual" value={2} />
      </Tabs>
    </Paper>
    {output(value)}
    </div>
  );
}