import React from 'react';
import './App.css';
import UploadForm from './Components/FileUpload';
import ImageComponent from './Components/ImageComponent';
import Navigator from './Components/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WebcamComponent from './Components/WebcamComponent';
import VideoComponent from './Components/VideoComponent';
import FaceCombinedComponent from './Components/FaceCombinedComponent';
import MultipleImageComponent from './Components/MultipleImageComponent';
import LicenseCombinedComponent from './Components/LicenseCombinedComponent';





function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
      <Route path='/imgupload' exact component={ImageComponent}></Route>
      <Route path='/' exact component={UploadForm}></Route>
      <Route path='/webcamupload' exact component={WebcamComponent}></Route>
      <Route path='/videoupload' exact component={VideoComponent}></Route>
      <Route path="/facerecog" exact component={FaceCombinedComponent}></Route>
      <Route path="/licenseplaterecog" exact component={LicenseCombinedComponent}></Route>
      <Route path="/img" exact component={MultipleImageComponent}></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
