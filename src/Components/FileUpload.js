import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MultipleImageComponent from './MultipleImageComponent'
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

function UploadForm() {
  return (
    <div className="UplaodForm">
       <br /><br />   
      <h1>Welcome to the Surveillance System</h1>
      <br /> <br />
      <form>
        <MuiThemeProvider>
            <React.Fragment>
            <TextField
              id="OrganisationName" 
              label="Name of Organisation"
            />
            <br />
            <br />
            <TextField
              id="RegistrationNumber" 
              label="Registration Number"
            />
            <br />
            <br />
            <TextField
              id="Address" 
              label="Address"
            />
            <br />
            <br />
            <TextField
              id="AdminName" 
              label="Administrator name"
            />
           <br />
          <br />
            <TextField
              id="EmployeeID" 
              label="Employee ID"
            />
            <br />
            <br />
            </React.Fragment>
            </MuiThemeProvider>
      </form>
      <FormBatch />
    </div>
  );
}

export default UploadForm;


class FormBatch extends Component{
  constructor(props){
    super(props);
  }


  render(){
    

    return (
      <div>
        
      </div>
     
    );
  }
}
