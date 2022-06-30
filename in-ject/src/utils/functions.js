const url = "http://localhost:5050";
export const formNotValid = (uploadData) =>
  Object.values(uploadData).includes("");

export const apiUrlUsers = (end_point) => `${url}/users/${end_point}`;

export const apiUrlJobs = (end_point) => `${url}/jobs/${end_point}`;

