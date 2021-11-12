import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      source: 1,
      name: "Heater",
      on: 1
    };
  }
  
  soundQ(abc) 
  {
    document.getElementById(abc).volume = this.props.volume/100;
    this.playSound(abc); 
  }

  playSound(abc) {
    if (this.state.on === 1) {
      document.getElementById(abc).play();
    } else {
      console.log("Power is off");
    }
  }

  changeState() 
  {
    this.setState({source: (this.state.source === 1 ? 2 : 1), name: (this.state.name === "Heater" ? "Chord" : "Heater")});
  }

  renderKey = () => {
    if(this.state.source === 1){
      return 1;
    }
    return 2;
  }

  renderAudio = (abc) => {
    if (this.state.source === 1) 
    {
      if (abc === "Q") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
      } else if (abc === "W") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
      } else if (abc === "E") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
      } else if (abc === "A") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
      } else if (abc === "S") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
      } else if (abc === "D") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
      } else if (abc === "Z") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
      } else if (abc === "X") {
        return "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
      } else if (abc === "C") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
      }
    } else {
      if (abc === "Q") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3";
      } else if (abc === "W") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3";
      } else if (abc === "E") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3";
      } else if (abc === "A") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3";
      } else if (abc === "S") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3";
      } else if (abc === "D") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3";
      } else if (abc === "Z") {
        return "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3";
      } else if (abc === "X") {
        return "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3";
      } else if (abc === "C") {
        return "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3";
      }
    }
  }
  
  power() {
    if(this.state.volume === 0) {
      this.setState({on: 0});
    }
    this.setState({on: this.state.on === 1 ? 0 : 1});
  }

  /*toggleType() {
    if(this.state.source === 1) {
      this.setState ({
        source: 2,
        name: "Chord"
      });
    } else {
      this.setState ({
        source: 1,
        name: "Heater"
      });
    }
  }*/

  render() {
    return (
      <div className="App">
        <center><h1 id="title">Drum Machine</h1></center>
        <div className="row" id="drum-machine">
          <div className="col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="row" id="display">
              <div className="col-sm-7 col-md-7 col-lg-7">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="Q1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("Q")}>Q
                      <audio className="clip" key={this.renderKey()} id="Q">
                        <source src={this.renderAudio("Q")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="W1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("W")}>W
                      <audio className="clip" key={this.renderKey()} id="W">
                        <source src={this.renderAudio("W")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="E1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("E")}>E
                      <audio className="clip" key={this.renderKey()} id="E">
                        <source src={this.renderAudio("E")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="A1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("A")}>A
                      <audio className="clip" key={this.renderKey()} id="A">
                        <source src={this.renderAudio("A")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="S1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("S")}>S
                      <audio className="clip" key={this.renderKey()} id="S">
                        <source src={this.renderAudio("S")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="D1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("D")}>D
                      <audio className="clip" key={this.renderKey()} id="D">
                        <source src={this.renderAudio("D")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="Z1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("Z")}>Z
                      <audio className="clip" key={this.renderKey()} id="Z">
                        <source src={this.renderAudio("Z")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="X1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("X")}>X
                      <audio className="clip" key={this.renderKey()} id="X">
                        <source src={this.renderAudio("X")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <button id="C1" className="btn drum-pad fullwidth" onClick={() => this.soundQ("C")}>C
                      <audio className="clip" key={this.renderKey()} id="C">
                        <source src={this.renderAudio("C")} type="audio/mpeg"/>
                      </audio>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1"></div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div id="power">
                  <p>Power Toggle</p>
                  <label className="switch">
                  <input type="checkbox" defaultChecked onClick={() => this.power()} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <br />
                <button className="btn" id="type" onClick={() => this.changeState()}>{this.state.name + " (Tap to Toggle)"}</button>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3"></div>
        </div>
      </div>
    ); 
  }
}









const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className="container">
      <div className="row" id="app">
        <App volume={value}/>
      </div>
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4"></div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
              <h3>Volume</h3>
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <VolumeUp />
              </Grid>
              <Grid item xs>
                <Slider
                  value={typeof value === 'number' ? value : 0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  
                />
              </Grid>
              <Grid item>
                <Input
                  className={classes.input}
                  value={value}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={size}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

const size = {
  fontSize: 15
}


//export default App;
