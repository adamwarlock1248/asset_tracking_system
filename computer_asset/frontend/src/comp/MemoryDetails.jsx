import React, { useState, useEffect } from 'react';

function MemoryDetails({login}) {
  const [comps, setComps] = useState([{
    _id: '',
    Device_Name: '',
    Memory_Details: ''
  }])

  useEffect(() => {
    fetch("/mem_details").then(res => {
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
          <h1>Memory Details</h1>
          {comps.map(stat =>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Memory_Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{stat._id}</th>
                    <td>{stat.Device_Name}</td>
                    <td>{stat.Memory_Details}</td>
                  </tr>
                </tbody></table>
            </div>
          )}
        </div>
      }

    </>
  )
}

export default MemoryDetails;