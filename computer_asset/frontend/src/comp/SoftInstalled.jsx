import React, { useState, useEffect } from "react";

function SoftInstalled({ login }) {
  const [comps, setComps] = useState([{
    _id: '',
    Device_Name: '',
    Software_Installed: ''
  }])

  useEffect(() => {
    fetch("/soft_inst").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setComps(jsonRes));
  })

  return (
    <>
      {login ? <h1>Not Logged In try Again</h1>
        :
        <div className="container">
          <h1>Software Installed</h1>
          {comps.map(stat =>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Software_Installed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{stat._id}</th>
                    <td>{stat.Device_Name}</td>
                    <td>{stat.Software_Installed}</td>
                  </tr>
                </tbody></table>
            </div>
          )}
        </div>
      }

    </>
  )
}

export default SoftInstalled;
