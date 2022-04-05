import React from "react";
import "./Table.scss";

function Table(name, phone, linkedInUrl, resume) {
  return (
    <table className="table">
      <thead>
        <tr className="table__row">
          <th className="table__heading">Applicant Name</th>
          <th className="table__heading">Phone</th>
          <th className="table__heading">LinkedIn</th>
          <th className="table__heading">Resume</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table__row">
          <td className="table__data">{name}</td>
          <td className="table__data">{phone}</td>
          <td className="table__data">{linkedInUrl}</td>
          <td className="table__data">{resume}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
