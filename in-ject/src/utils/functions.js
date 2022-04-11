export const formNotValid = (uploadData) =>
  Object.values(uploadData).includes("");

export const apiUrlUsers = (end_point) =>
  `http://localhost:5050/users/${end_point}`;

export const apiUrlJobs = (end_point) =>
  `http://localhost:5050/jobs/${end_point}`;

// export const postReq = (apiCall, stateProp, displayfxn) => {
//   axios.post(apiCall).then(({ data }) => {
//     this.setState({ [stateProp]: data }, displayfxn);
//   });
// };

//this.getVideo(apiUrl(""), "videos", this.fetchVideoDetails); apiUrlUsers getReq apiUrlJobs
