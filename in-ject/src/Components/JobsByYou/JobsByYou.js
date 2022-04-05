import React from 'react'
import './JobsByYou.scss'

function JobsByYou() {
  return (
    <section>
        <h3>{`Doctor`} Position <span>{`Posted on  `}</span></h3>
        <table>
            <tr>
                <th>Applicant Name</th>
                <th>Phone</th>
                <th>LinkedIn</th>
                <th>Resume</th>
            </tr>
            <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
                <td>$100</td>
            </tr>
          
        </table>
    </section>
  )
}

export default JobsByYou;