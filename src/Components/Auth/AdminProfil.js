// Dashboard
//admin profile

import React, { Component } from "react";

class AdminProfile extends Component {
  logOut() {
    localStorage.clear();
    window.location.reload(false);
  }
  render() {
    return (
      <div>
        Profil info{this.props.userData}
        <button onClick={this.logOut.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default AdminProfil;
