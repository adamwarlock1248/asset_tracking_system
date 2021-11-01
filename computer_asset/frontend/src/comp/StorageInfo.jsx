import React, { useState, useEffect } from 'react';

function StorageInfo({login}) {
  const [comps, setComps] = useState([{
    _id: '',
    Device_Name: '',
    Number_of_Processors: '',
    Storage_Information: ''
  }])

  useEffect(() => {
    fetch("/storage_info").then(res => {
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
          <h1>Storage Information</h1>
          {comps.map(stat =>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Number_of_Processors</th>
                    <th scope="col">Storage_Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{stat._id}</th>
                    <td>{stat.Device_Name}</td>
                    <td>{stat.Number_of_Processors}</td>
                    <td>{stat.Storage_Information}</td>
                  </tr>
                </tbody></table>
            </div>
          )}
        </div>
      }
    </>
  )
}

export default StorageInfo;