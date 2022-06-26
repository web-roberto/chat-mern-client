import React, { Component } from 'react';
//import './App.css';

class UploadWidget extends Component {
  showWidget = (widget) => {
    widget.open();
  }

  checkUploadResult = (resultEvent) => {
    if(resultEvent.event === 'success'){
      console.log(resultEvent)
    }
  }
  render() {
      let widget = window.cloudinary.openUploadWidget({
      cloudName: "web-roberto",
      uploadPreset: "chatdb"},
      (error, result) => {this.checkUploadResult(result)});

    return (
      <div className="App">
        <button onClick={this.showWidget}> Upload file</button>
      </div>
    );
  }
}

export default UploadWidget;