import React from "react";
import image from "../../assets/images/aboutus.png";

function AboutUs() {
  return (
    <section>
      <div className="dashboard">
        <div className="dashboard__main">
          <h2 className="dashboard__heading">About Us</h2>
          <h3>
            We are an online recruitment platform for health workers. We help you find and
            post jobs, while building a successful health care support system
            for professionals. Supporting our clients with prompt substitutes in
            the workplace. We are expanding our reach and this requires nonstop
            performance—a tough challenge in this industry but we are willing to
            go the extra-mile.
          </h3>
          <div className="image-box">
          <img src={image} alt="health professionals"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
