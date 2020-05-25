import React, { Component } from "react";

import axios from "axios";

class FileUpload extends Component {
  state = {
    title: " "
  };

  async onSubmitToApi(e) {
    e.preventDefault();

    //console.log(e.target.elements.file.files[0])
    this.setState({ title: e.target.elements.title.value });

    const res = await axios.post("http://localhost:1337/upload", {});

    console.log(res);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitToApi.bind(this)}>
          <input type="file" name="file" />

          <button>Spara</button>
        </form>
      </div>
    );
  }
}

export default FileUpload;

//Tas bort
