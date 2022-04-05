import React from "react";
import Button from "../Button/Button";
import Input, { Dropdown, Textarea } from "../Input/Input";
import Label from "../Label/Label";
import formNotValid from "../../utils/FormValidation";
import './PostJob.scss'

function PostJob() {
    const submitJobHandler = (e) => {
        e.preventDefault();
        let newUser = {
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
        };
        formNotValid(newUser) ? alert("Failed to upload, complete form") : 
        // api
        //   .addWarehouse(newUser)
        //   .then((res) => {
        //     console.log(res.data);
        //     history.push(`/login/${res.data.id}`);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        e.target.reset();

  
      };
  return (
    <div>
      <form onSubmit={submitJobHandler}>
        <div className="add-new-warehouse ">
          <section className="add-new-warehouse__container form__container--postjob">
            <h2 className="add-new-warehouse__title">Post A Job</h2>
            <p className="add-new-warehouse__subtitle ">
              Submit a job and get professionals from the iN-JECT Community quickly
            </p>
            <div className="add-new-warehouse__input">
              <Label title="Company" />
              <Input name="company" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Location" />
              <Input name="address" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Start Date" />
              <Input type='datetime-local' name="startDate" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="End Date" />
              <Input type='datetime-local' name="endDate" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Contact Email" />
              <Input name="email" placeholder="" />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Position" />
              <Dropdown
                items={["Doctor", "Pharmacist", "Nurse", "Care giver"]}
                name="position"
                placeholder=""
              />
            </div>
            <div className="add-new-warehouse__input">
              <Label title="Pay" />
              <Input name="pay" placeholder="" />
            </div>
           
            <div className="add-new-warehouse__input">
              <Label title="Job Description" />
              <Textarea name="description" placeholder="" />
            </div>
          </section>
        </div>
        <div className="add-new-warehouse__button-box">
          <div className="add-new-warehouse__button-left">
            <input type="reset" value="Cancel"  className="button button--reset" />
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
