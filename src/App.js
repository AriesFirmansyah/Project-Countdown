import React, {Component, useState} from 'react'
import './App.css';
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel } from '@material-ui/core'
import { Router, Link } from "@reach/router"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import $ from 'jquery'

const useStyles = makeStyles({
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    textTransform: 'capitalize',
    fontSize: 27,
    width: '250px',
    height: '70px',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'aliceblue',
  },
  inp: {
    backgroundColor: "red",
    width: "500px"
  }
});
function App() {
  const classes = useStyles();

  const [input1, setinput1] = useState("")
  const setInput = (b) => {
    setinput1(b.target.value)
  }
  return (
      <Container className="main">
        <Grid id="content" container spacing={4}>
          <Grid item xs={12}>
            <h1>COUNTDOWN WEBSITE</h1> 
          </Grid>
          <Grid item xs={12}>
            <h2>COUNTDOWN</h2> 
          </Grid>
          <Grid item xs={12} style={{width: 10, backgroundColor: "red"}}>
            <Card variant="outlined" style={{width: 10}}>
              <CardContent>
                <p>87</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}> 
            <Button className={classes.btn} variant="contained" >
              Start
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button className={classes.btn} variant="contained" >
              Stop
            </Button>
          </Grid>
        </Grid>
      </Container>
      
  );
}

export default App;
