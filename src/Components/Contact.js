import React, { Component } from "react";

export default class Contact extends Component {
  onSubmitForm() {}
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm.bind(this)}>
          <input type="text" />
          <input type="email" />
          <input type="textarea" />

          <button>Kontakta oss</button>
        </form>
      </div>
    );
  }
}
