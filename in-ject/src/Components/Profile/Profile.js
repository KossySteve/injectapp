import React from "react";
import Button from "../Button/Button";
import "./Profile.scss";

function Profile() {
  return (
    <div className="dashboard__sidebar">
      <span className="dashboard__sidebar-text">Profile</span>
      <h3 className="dashboard__sidebar-heading">
        <span className="dashboard__sidebar-title">Name:</span>{" "}
        <span className="dashboard__sidebar-text">Dr Paul McKinsey</span>
      </h3>
      <h3 className="dashboard__sidebar-heading">
        <span className="dashboard__sidebar-title">Email:</span>{" "}
        <span className="dashboard__sidebar-text">mckinny@gmail.com</span>
      </h3>
      <h3 className="dashboard__sidebar-heading">
        <span className="dashboard__sidebar-title">Position:</span>
        <span className="dashboard__sidebar-text">Doctor</span>
      </h3>
      <h3 className="dashboard__sidebar-heading">
        <span className="dashboard__sidebar-title">Resume:</span>
        <span className="dashboard__sidebar-text">Resume.pdf</span>
      </h3>
      <Button
        className="closebtn"
        onClick={''}
        title="Edit"
      />
    </div>
  );
}

export default Profile;
