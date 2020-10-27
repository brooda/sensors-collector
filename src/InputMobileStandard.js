import React, { Component } from 'react';
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';
import './index.css'

class InputMobileStandard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problems: "",
            recording: false,
            current_signals = ""
        };

        this.movement_signals = []
        this.big_motion_times = []

        if( window.DeviceMotionEvent)
        {
            window.addEventListener("devicemotion", this.motion, false);
        }
        else
        {
            this.setState({problems: "DeviceMotionEvent is not supported"});
        }
    }


    motion = (event) => {
        if (this.state.recording)
        {
            let timestamp = Math.round(event.timeStamp);
            let motion_data = [timestamp, Math.round(100 * event.rotationRate.alpha), Math.round(100 * event.rotationRate.beta), Math.round(100 * event.rotationRate.gamma), 
                Math.round(100 * event.accelerationIncludingGravity.x), Math.round(100 * event.accelerationIncludingGravity.y), Math.round(100 * event.accelerationIncludingGravity.z)]
            
            this.setState({current_signals: timestamp + 
                Math.round(100 * event.rotationRate.alpha) +
                Math.round(100 * event.rotationRate.beta) +
                Math.round(100 * event.rotationRate.gamma) +
                Math.round(100 * event.accelerationIncludingGravity.x) + 
                Math.round(100 * event.accelerationIncludingGravity.y) + 
                Math.round(100 * event.accelerationIncludingGravity.z)
            })
            
            this.movement_signals.push(motion_data)
        }
    }

    start = () => {
        this.setState({recording: true})
    }
    
    stop = () => {
        this.setState({recording: false})
    }
    
    registerBigMotion = (event) => {
        this.big_motion_times.push(event.timeStamp)
    }


    render() {
        return (
            <React.Fragment>
                <p>{this.state.problems ? this.state.problems : "Motion is ready to be recorded"}</p>
                <h1><b>{this.state.recording ? "RECORDING" : ""}</b></h1>
                <p>{this.state.current_signals}</p>

                <div className="footer" onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>
                    <button type="button" className="btn btn-success btn-block" onClick={this.start}> START</button>
                    <button type="button" className="btn btn-danger btn-block" onClick={this.stop}>STOP</button>
                    <button type="button" className="btn btn-primary btn-block" onClick={this.registerBigMotion}>BIG MOTION</button>
                        
                    <Keyboard
                        keyboardRef={r => (this.keyboard = r)}
                        mergeDisplay="true"
                        layout={{
                            default: [
                                "1 2 3 4 5 6 7 8 9 0",
                                "q w e r t y u i o p",
                                "a s d f g h j k l",
                                "{shift} z x c v b n m {backspace}",
                                ", {space} ."
                            ],
                            shift: [
                                "1 2 3 4 5 6 7 8 9 0",
                                "Q W E R T Y U I O P",
                                "A S D F G H J K L",
                                "{shift} Z X C V B N M {backspace}",
                                ", {space} ."
                            ],
                        }}
                        display={{
                            "{escape}": "esc ⎋",
                            "{tab}": "tab ⇥",
                            "{backspace}": "⌫",
                            "{capslock}": "caps lock ⇪",
                            "{shift}": "⇧",
                            "{controlleft}": "ctrl ⌃",
                            "{controlright}": "ctrl ⌃",
                            "{altleft}": "alt ⌥",
                            "{altright}": "alt ⌥",
                            "{metaleft}": "cmd ⌘",
                            "{metaright}": "cmd ⌘",
                            "{abc}": "ABC",
                            "{space}": "space"
                        }}
                        disableButtonHold={true}
                        buttonTheme = {[
                            {
                              class: "margin-left",
                              buttons: "A a ,"
                            },
                            {
                              class: "margin-right",
                              buttons: "L l ."
                            },
                            {
                                class: "space",
                                buttons: "{space}"
                            }
                          ]}
                        >
                    </Keyboard>
                </div>
            </React.Fragment>
        );
    }
}

export default InputMobileStandard;