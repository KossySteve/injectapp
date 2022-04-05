import React, { Component } from "react";
import "./JobsByYou.scss";
import axios from "axios";
import Button from "../Button/Button";
import Table from "../Table/Table";

export class JobsByYou extends Component {
  state = {
    myJobs: [],
    isLoading: true,
    showApplicantTable: false,
    applicants: [],
  };
  viewApplicants = (id) => {
    //get users applied to the job by jobs/apply/job.id

    axios
      .get(`http://localhost:5050/jobs/apply/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ applicants: res.data, showApplicantTable: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log(this.props.userInfo.id);
    // get all jobs posted by user
    axios
      .get(`http://localhost:5050/jobs/${this.props.userInfo.id}`)
      .then((res) => {
        this.setState({ myJobs: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.isLoading ? (
      <div>Jobs are Loading...</div>
    ) : (
      <section>
        {this.state.myJobs.map((job, index) => (
          //include time of posting to database
          <h4 key={index}>
            {`${job.position}`} position{" "}
            <span>{`posted for ${job.startDate.substring(0, 10)}`}</span>
            <Button
              title="View Applicants"
              onClick={() => this.viewApplicants(job.id)}
            />
          </h4>
        ))}

        {this.state.showApplicantTable &&
          this.state.applicants.map((applicant, index) => (
            <div key={index}>
              <Table
                name={applicant.name}
                phone={applicant.phone}
                linkedInUrl={applicant.inkedInUrl}
                resume={applicant.resume}
              />
            </div>
          ))}
      </section>
    );
  }
}

export default JobsByYou;
