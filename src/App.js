import React, {Component, useState} from 'react'
import './App.css';
import { Button, makeStyles, Container, Grid, Switch, FormControlLabel } from '@material-ui/core'
import { Router, Link } from "@reach/router"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import $ from 'jquery'

/* IMAGE */
import ClockImage from './images/clock.png'
import UpImage from './images/up.png'
import DownImage from './images/down.png'

var jam1 = 0
var jam2 = 0
var status = true
var menit1 = 0
var menit2 = 0
var detik1 = 0
var detik2 = 0
var selesai = false
var selesai1 = true
var test = null

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
  btnPause: {
    background: 'gray',
    fontSize: 27,
    fontWeight: "bold",
    width: '250px',
    height: '70px',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
  },
  btnReset: {
    background: '#ff2d52',
    fontSize: 27,
    fontWeight: "bold",
    marginLeft: 20,
    width: '250px',
    height: '70px',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
  },
  inp: {
    backgroundColor: "red",
    width: "500px"
  }
});
function App() {
  const classes = useStyles();
  $('#stop').hide()
  const [input1, setinput1] = useState("")
  const setInput = (b) => {
    setinput1(b.target.value)
  }
  return (
      <Container className="main" onLoad={onload}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1><img src={ClockImage} />COUNTDOWN WEBSITE</h1> 
          </Grid>
          <Grid item xs={12}>
            <h2>TIME REMAINING</h2> 
          </Grid>
          <Grid item xs={12}>
            <div className="card1 inline">
              <div>
                <img className="g1" onClick={jamUp1} src={UpImage} />
                <img className="g2" onClick={jamUp2} src={UpImage} />
              </div>
                <p id="jam1" className="inline">0</p>
                <p id="jam2" style={{marginLeft: 38}} className="inline">0</p>
              <div>
                <img className="g1" onClick={satuDown1} style={{paddingBottom: 16}} src={DownImage} />
                <img className="g2" onClick={satuDown2} style={{paddingBottom: 16}} src={DownImage} />
              </div>
              <h1>HOURS</h1>
            </div>
            <div className="card1 inline">
              <div>
                <img className="g1" onClick={menitUp1} src={UpImage} />
                <img className="g2" onClick={menitUp2} src={UpImage} />
              </div>
                <p id="menit1" className="inline">0</p>
                <p id="menit2" style={{marginLeft: 38}}  className="inline">0</p>
              <div>
                <img className="g1" onClick={menitDown1} style={{paddingBottom: 16}} src={DownImage} />
                <img className="g2" onClick={menitDown2} style={{paddingBottom: 16}} src={DownImage} />
              </div>
              <h1>MINUTES</h1>
            </div>
            <div className="card1 inline">
              <div>
                <img className="g1" onClick={detikUp1} src={UpImage} />
                <img className="g2" onClick={detikUp2} src={UpImage} />
              </div>
                <p id="detik1" className="inline">0</p>
                <p id="detik2" style={{marginLeft: 38}}  className="inline">0</p>
              <div>
                <img className="g1" onClick={detikDown1} style={{paddingBottom: 16}} src={DownImage} />
                <img className="g2" onClick={detikDown2} style={{paddingBottom: 16}} src={DownImage} />
              </div>
              <h1>SECONDS</h1>
            </div>
          </Grid>
          <Grid id="btnStart" item xs={12}> 
              <Button onClick={mulai} className={classes.btn} variant="contained" >
                Start
              </Button>
          </Grid>
          <Grid id="stop" item xs={12}>
            <Button id="lanjutkan" onClick={resume} className={classes.btnPause} variant="contained">
              Resume
            </Button>
            <Button id="pause" onClick={pause} className={classes.btnPause} variant="contained">
              Pause
            </Button>
            <Button onClick={reset} className={classes.btnReset} variant="contained" >
              Reset
            </Button>
        </Grid>
        </Grid>
      </Container>
      
  );
}
function onload() {
  $('#stop').hide()
  $('#lanjutkan').hide()
  
}
function mulai(){
  $('#btnStart').hide()
  $('#stop').show()
  $('pause').show()
  status = true
  setInterval(function(){ 
    if(status){
      detik2 -=1
      if(detik2 >= 0){
        document.getElementById('detik2').innerHTML = detik2
      }
      else{
        detik1 -=1
        detik2 = 9
        if(detik1 >= 0){
          display()
        }
        else{
          detik1 = 0
          detik2 = 0
          hitungMenit()
        }
      }

      if(jam1 == 0 && jam2 == 0 && menit2 == 0 && menit1 == 0 && detik2 == 0 && detik1 == 0){
        selesai = true
        boom()
      }
    }
  }, 1000);
}

function boom() {
  if(selesai == true && selesai1 == true){
    selesai1 = false
    setTimeout(function(){ alert('BOOM SELESAI') }, 1000);
    setTimeout(function(){ window.location.href = "./../../public/index.html" }, 1000);
  }
}
function hitungMenit(){
    if(menit2 > 0 && detik1 == 0){
        menit2 -= 1
        detik1 = 6
        display()
    }
    else{
      if(menit1 > 0 ){
        menit1 -=1
        menit2 = 10
      }
      else{
        hitungJam()
      }
    }
}
function hitungJam() {
  if(jam2 > 0 && menit1 == 0){
    jam2 -= 1
    menit1 = 6
    display()
  }
  else{
    if(jam1 > 0){
      jam1 -=1
      jam2 = 10
    }
  }
}
function display() {
  document.getElementById('jam1').innerHTML = jam1
  document.getElementById('jam2').innerHTML = jam2
  document.getElementById('menit2').innerHTML = menit2
  document.getElementById('menit1').innerHTML = menit1
  document.getElementById('detik2').innerHTML = detik2
  document.getElementById('detik1').innerHTML = detik1
}
function reset() {
  window.location.href = "./../../public/index.html"
}
function pause() {
  $('#lanjutkan').show()
  $('#pause').hide()
  status = false
}
function resume() {
  $('#lanjutkan').hide()
  $('#pause').show()
  status = true
}

//HOURS
function jamUp1() {
  jam1 += 1
  if (jam1 < 10){
    document.getElementById("jam1").innerHTML = jam1
  }
  else {
    jam1 = 0
    document.getElementById("jam1").innerHTML = jam1
  }
}
function jamUp2() {
  jam2 += 1
  if (jam2 < 10){
    document.getElementById("jam2").innerHTML = jam2
  }
  else {
    jam2 = 0
    document.getElementById("jam2").innerHTML = jam2
  }
}
function satuDown1() {
  jam1 -= 1
  if(jam1 >= 0){
    document.getElementById("jam1").innerHTML = jam1
  }
  else{
    jam1 = 9
    document.getElementById("jam1").innerHTML = jam1
  }
}
function satuDown2() {
  jam2 -= 1
  if(jam2 >= 0){
    document.getElementById("jam2").innerHTML = jam2
  }
  else{
    jam2 = 9
    document.getElementById("jam2").innerHTML = jam2
  }
}

//MENIT
function menitUp1() {
  menit1 += 1
  if (menit1 < 10){
    document.getElementById("menit1").innerHTML = menit1
  }
  else {
    menit1 = 0
    document.getElementById("menit1").innerHTML = menit1
  }
}
function menitUp2() {
  menit2 += 1
  if (menit2 < 10){
    document.getElementById("menit2").innerHTML = menit2
  }
  else {
    menit2 = 0
    document.getElementById("menit2").innerHTML = menit2
  }
}
function menitDown1() {
  menit1 -= 1
  if(menit1 >= 0){
    document.getElementById("menit1").innerHTML = menit1
  }
  else{
    menit1 = 9
    document.getElementById("menit1").innerHTML = menit1
  }
}
function menitDown2() {
  menit2 -= 1
  if(menit2  >= 0){
    document.getElementById("menit2").innerHTML = menit2 
  }
  else{
    menit2  = 9
    document.getElementById("menit2").innerHTML = menit2 
  }
}

//DETIK
function detikUp1() {
  detik1 += 1
  if (detik1 < 10){
    document.getElementById("detik1").innerHTML = detik1
  }
  else {
    detik1 = 0
    document.getElementById("detik1").innerHTML = detik1
  }
}
function detikUp2() {
  detik2 += 1
  if (detik2 < 10){
    document.getElementById("detik2").innerHTML = detik2
  }
  else {
    detik2 = 0
    document.getElementById("detik2").innerHTML = detik2
  }
}
function detikDown1() {
  detik1 -= 1
  if(detik1 >= 0){
    document.getElementById("detik1").innerHTML = detik1
  }
  else{
    detik1 = 9
    document.getElementById("detik1").innerHTML = detik1
  }
}
function detikDown2() {
  detik2 -= 1
  if(detik2  >= 0){
    document.getElementById("detik2").innerHTML = detik2
  }
  else{
    detik2 = 9
    document.getElementById("detik2").innerHTML = detik2
  }
}
export default App;
