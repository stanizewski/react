import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <section className={"startpage"}>
      <h2 className={"headline"}>
        It´s always wine o´clock somewhere am i right?!
      </h2>
      <span id={"span1"}></span>

      <section id="intro">
        <div id="intro-content" class="center-content">
          <div class="center-content-inner">
            <div class="content-section content-section-margin">
              <div class="content-section-grid clearfix">
                <a href="#" class="button nav-link">
                  <div class="bottom"></div>

                  <div class="top">
                    <div class="label">Boka dina plats</div>

                    <div class="button-border button-border-left"></div>
                    <div class="button-border button-border-top"></div>
                    <div class="button-border button-border-right"></div>
                    <div class="button-border button-border-bottom"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={"header"}>
        <div id={"firstpage-img"}></div>
      </div>
    </section>
  );
};
export default App;
