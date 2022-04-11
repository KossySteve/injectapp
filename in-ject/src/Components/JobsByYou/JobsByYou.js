import React, { Component } from "react";
import { withRouter } from "react-router";
import "./JobsByYou.scss";
import axios from "axios";
import Button from "../Button/Button";
import Table from "../Table/Table";
import Swal from "sweetalert2";
import { getReq, apiUrlJobs } from "../../utils/functions";

export class JobsByYou extends Component {
  state = {
    myJobs: [],
    isLoading: true,
    showApplicantTable: false,
    applicants: [],
  };

  //this.getReq(apiUrl(""), "videos", this.fetchVideoDetails); apiUrlUsers getReq apiUrlJobs
  viewApplicants = (id) => {
    //get users applied to the job
    axios
      .get(`${apiUrlJobs("apply")}/${id}`)
      .then((res) => {
        this.setState({
          applicants: res.data,
          showApplicantTable: !this.state.showApplicantTable,
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  updateJob = (job) => {
    //push to the job to UpdateJob Component to update job
    this.props.history.push("/dashboard/updatejob", [job]);
  };

  deleteJob = (id) => {
    //delete specific job
    console.log("job id", id);
    axios
      .delete(`${apiUrlJobs("")}/${id}`)
      .then((res) => {
        Swal.fire("You deleted this job successfully");
        axios
          .get(`${apiUrlJobs("s")}/${this.props.userInfo.id}`)
          .then((res) => {
            this.setState({ myJobs: res.data, isLoading: false });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    // get all jobs posted by specific user
    axios
      .get(`${apiUrlJobs("")}/${this.props.userInfo.id}`)
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
        {this.state.myJobs.length ? (
          this.state.myJobs.map((job, index) => (
            //include time of posting to database
            <div key={index} className="post">
              <h4 className="post__heading">
                {`${job.position}`} position{" "}
                <span>{`posted for ${job.startDate.substring(0, 10)}`}</span>
              </h4>
              <div className="post__btns">
                <Button
                  title="View"
                  onClick={() => this.viewApplicants(job.id)}
                />
                <Button title="Edit" onClick={() => this.updateJob(job)} />
                <Button title="Delete" onClick={() => this.deleteJob(job.id)} />
              </div>
            </div>
          ))
        ) : (
          <h2>No Jobs Posted</h2>
        )}
        {this.state.showApplicantTable &&
          (this.state.applicants.length ? (
            <table className="table">
              <thead>
                <tr className="table__row">
                  <th className="table__heading">Applicant</th>
                  <th className="table__heading">Contact</th>
                </tr>
              </thead>
              <tbody>
                {this.state.applicants.map((applicant, index) => (
                  <Table
                    name={applicant.name}
                    email={applicant.email}
                    phone={applicant.phone}
                    linkedInUrl={applicant.linkedInUrl}
                    resumeUrl={applicant.resumeUrl}
                    key={index}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <h2>No Applicants</h2>
          ))}
      </section>
    );
  }
}

export default withRouter(JobsByYou);
