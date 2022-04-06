import React from "react";
import axios from 'axios';
import Button from "../Button/Button";
import Input, { Dropdown, Textarea } from "../Input/Input";
import Label from "../Label/Label";
import formNotValid from "../../utils/FormValidation";
import "./PostJob.scss";
import Swal from "sweetalert2";

function PostJob({userInfo}) {
  const submitJobHandler = (e) => {
    e.preventDefault();
    let newJob = {
      company: e.target.company.value,
      website: e.target.website.value,
      email: e.target.email.value,
      position: e.target.position.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      description: e.target.description.value,
      pay: e.target.pay.value,
      user_id: userInfo.id
    };

    formNotValid(newJob)
      ? Swal.fire("Failed to upload, complete form correctly")
      : axios
          .post("http://localhost:5050/jobs", newJob)
          .then((res) => {
            Swal.fire("You submitted and shared this job successfully");
            // props.history.push("/jobsbyyou");
          })
          .catch((err) => {
            console.log(err);
          });
          e.target.reset();
  };
  return (
    <div>
      <form onSubmit={submitJobHandler}>
        <div className="add-new-warehouse ">
          <section className="add-new-warehouse__container form__container--postjob">
            <h2 className="add-new-warehouse__title">Post A Job</h2>
            <p className="add-new-warehouse__subtitle ">
              Submit a job and get professionals from the iN-JECT Community
              quickly
            </p>
            <div className="add-new-warehouse__input">
              <Label title="Company" />
              <Input name="company" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Website" />
              <Input type='url' name="website" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Location" />
              <Input name="address" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Start Date" />
              <Input type="datetime-local" name="startDate" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="End Date" />
              <Input type="datetime-local" name="endDate" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Contact Email" />
              <Input name="email" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Contact Phone" />
              <Input name="phone" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Position" />
              <Dropdown
                items={["Doctor", "Pharmacist", "Nurse", "Care giver"]}
                name="position"
              />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Pay per hr" />
              <Input name="pay" />
            </div>

            <div className="add-new-warehouse__input">
              <Label title="Job Description" />
              <Textarea name="description" />
            </div>
          </section>
        </div>
        <div className="add-new-warehouse__button-box">
          <div className="add-new-warehouse__button-left">
            <input
              type="reset"
              value="Cancel"
              className="button button--reset"
            />
          </div>
          <div className="add-new-warehouse__button-right">
            <Button title="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostJob;
