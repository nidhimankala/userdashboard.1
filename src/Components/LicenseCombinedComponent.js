import React, { Component } from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MultipleImageComponent from './MultipleImageComponent'
import '../App.css';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';


 class LicenseCombinedComponent extends Component {
    state = {
        step: 1,
        userid: '',
    
      };
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
    
    render() {
        const {  userid } = this.state;
        const values = { userid };

        return (
            <>
            <div>
            <br /> <br />
            <h1>License Plate</h1>
            <br /> <br />
            <form>

            <MuiThemeProvider>
            <React.Fragment>
            <TextField
              id="CompanyVehicleID" 
              label="Company Vehicle ID"
            />
            <br />
            <br />
            <TextField
              id="VehicleNumber" 
              label="Vehicle Number"
            />
            <br />
            <br />
            <TextField
              id="VehicleAssignee" 
              label="Vehicle Assignee"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-appear">
            <MultipleImageComponent/>
            <VideoComponent/>
            </div>
            </React.Fragment>
            </MuiThemeProvider>
            </form>
            </div>

            </>
        )
    }
}


export default LicenseCombinedComponent
