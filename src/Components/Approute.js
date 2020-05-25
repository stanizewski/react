import React from "react";
import App from "./App";
//npm i react-router-dom --save
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./Card";
import Booking from "./Booking";
import Main from "./Main";
import Navbar from "./Navbar";
import Form from "./Form";
import Notfoundpage from "./Notfoundpage";
//import Formular fron "../pages/Formular"
import AdminLogin from "./Auth/AdminLogin";
import Adminfrom from "./Adminform";
import Adminsida from "./Adminsida";
import FirebaseTest from "./FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import UserProfil from "./AuthUser/UserProfil";
import Contact from "./Contact";
//import UserLogin from "./AuthUser/UserLogin";

import Apitest from "./Apitest";

const Approute = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Main} exact={true}></Route>
          <Route path="/Home" component={App} exact></Route>
          <Route path="/Card" component={Card} exact></Route>
          <Route path="/Bookings" component={Booking}></Route>
          {/* <Route path="/Adminform" component={Adminform}></Route> */}
          <Route path="/form" exact component={Form}></Route>
          <Route path="/firebasetest" exact component={FirebaseTest}></Route>
          <Route path="/adminlogin" exact component={AdminLogin}></Route>
          {/* <Route path="/Admin" exact component={Adminform} />; */}
          <Route path="/contact" exact component={Contact}></Route>
          <Route component={Notfoundpage}></Route>
          <Route path="/userpage" exact component={UserPage}></Route>
          <Form />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Approute;
