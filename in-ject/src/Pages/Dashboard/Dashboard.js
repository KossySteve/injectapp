import React, { Component } from "react";
import axios from "axios";
import'./Dashboard.scss'

export class Dashboard extends Component {
  state = {
    userInfo: {},
    isLoading: false,
    showSideNav: false,
  };
  // componentDidMount() {
  //   let token = sessionStorage.getItem("authToken");
  //   token
  //     ? axios
  //         .get("http://localhost:8080/users/current", {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           this.setState({
  //             userInfo: res.data,
  //             isLoading: false,
  //           });
  //         })
  //     : this.props.history.push("/login");
  // }
  render() {
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <section>
        <div className="dashboard">
          {
            //this.state.showSideNav && (
            <div id="mySidebar" className="sidebar">
              <button
                className="closebtn"
                onClick={() => this.setState({ showSideNav: false })}
              >
                ×
              </button>
              <h3 href="#">Name</h3>
              <h3 href="#">Email@gmail.com</h3>
              <h3 href="#">Position</h3>
              <h3 href="#">Resume.pdf</h3>
            </div>
            // )
          }
          <div className="main">
            <button
              className="openbtn"
              onClick={() => this.setState({ showSideNav: false })}
            >
              ☰ View Profile
            </button>
            {/* <h2>{`Welcome ${this.state.userInfo.name}`}</h2> */}
            <p>Hello</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
