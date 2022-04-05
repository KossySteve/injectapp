import React from "react";
import Button from "../Button/Button";
import Input, { Dropdown, Textarea } from "../Input/Input";
import Label from "../Label/Label";
import formNotValid from "../../utils/FormValidation";
import "./FindJob.scss";

function FindJob() {
  return (
    <div className="dashboard__main-jobs">
      <div className="dashboard__main-card">
        <div>
          <h3>Doctor (Pediatrician) is required for 10 days</h3>
          <h3>At St. Lawrence Hospital</h3>
          <h3>348 Davie Street</h3>
          <h3>Vancouver, BC</h3>
          <h3>$45 per hour</h3>
        </div>
        <div>
          <Button title="Apply" />
        </div>
      </div>
      <div className="dashboard__main-card">
        <div>
          <h3>Nephrologist required for 10 days</h3>
          <h3>At St. Lawrence Hospital</h3>
          <h3>348 Davie Street</h3>
          <h3>Vancouver, BC</h3>
          <h3>$45 per hour</h3>
        </div>
        <div>
          <Button title="Apply" />
        </div>
      </div>
      <div className="dashboard__main-card">
        <div>
          <h3>Physician/Neuro-Surgeon required for 10 days</h3>
          <h3>At St. Nicholas Hospital</h3>
          <h3>348 Davie Street</h3>
          <h3>Vancouver, BC</h3>
          <h3>$145 per hour</h3>
        </div>
        <div>
          <Button title="Apply" />
        </div>
      </div>
    </div>
  );
}

export default FindJob;
