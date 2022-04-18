import React from "react";
import image from "../../assets/images/aboutus.png";
import "./AboutUs.scss";
function AboutUs() {
  return (
    <section>
      <div className="dashboard">
        <div className="dashboard__main ">
          <div className="dashboard__main-container">
            <div className="dashboard-box">
              <h2 className="dashboard__heading">About Us</h2>
              <h3 className="dashboard__article">
                We are an online recruitment platform for health workers only.
                We help you find and post jobs, while building a successful
                health care support system for professionals. Supporting our
                clients with prompt substitutes in the workplace is the core of
                our function and this in the future would generate a worthy
                network to share and use practical knowledge.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
