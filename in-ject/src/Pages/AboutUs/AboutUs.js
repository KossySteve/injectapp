import React from "react";
import image from "../../assets/images/aboutus.png";
import "./AboutUs.scss";
function AboutUs() {
  return (
    <section>
      <div className="dashboard">
        <div className="dashboard__main ">
          <div className="image-container">
            <div className="image-box">
              <img className="image" src={image} alt="health professionals" />
            </div>
            <div className="text-box">
              <h2 className="dashboard__heading">About Us</h2>
              <h3>
                We are an online recruitment platform for health workers. We
                help you find and post jobs, while building a successful health
                care support system for professionals. Supporting our clients
                with prompt substitutes in the workplace.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
