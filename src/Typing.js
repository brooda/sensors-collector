import React, { Component } from 'react';
import InputMobileStandard from './InputMobileStandard'

const axios = require('axios');

export class Typing extends Component {
  static displayName = Typing.name;
    constructor(props) {
        super(props);


        this.state = {
            taskCompleted: false,
            uploaded: false,
        }
    }

    sendDataToAPI = (postMessage) => {
        let endpoint = "https://keystrokesapi2.azurewebsites.net/api/Savekeystrokes?code=aZXAMrWM8eMnsao6YrpcolAYZjAgagbeHAaz4eDfKfaPZh9nWw2fbA=="
        
        axios.post(endpoint, postMessage)
        .then( (response) =>
        {
            this.setState({uploaded: true})
        })
        .catch( (error) =>
        {
            this.setState({uploaded: true})
            console.log("Error occured while transfering data")
        });
    }


    render() {return <InputMobileStandard sendDataToAPI={this.sendDataToAPI}></InputMobileStandard>}
} 