const url = "https://inject-app.herokuapp.com";
export const formNotValid = (uploadData) =>
  Object.values(uploadData).includes("");

export const apiUrlUsers = (end_point) => `${url}/users/${end_point}`;

export const apiUrlJobs = (end_point) => `${url}/jobs/${end_point}`;

// export const postReq = (apiCall, stateProp, displayfxn) => {
//   axios.post(apiCall).then(({ data }) => {
//     this.setState({ [stateProp]: data }, displayfxn);
//   });
// };

//this.getVideo(apiUrl(""), "videos", this.fetchVideoDetails); apiUrlUsers getReq apiUrlJobs
