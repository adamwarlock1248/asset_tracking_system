import React, { useState, useEffect } from "react";

function Home({ login }) {
  const [comps, setComps] = useState([
    {
      _id: "",
      System: "",
      Version: "",
      Device_Name: "",
      Release_Details: "",
      Processor: "",
      System_Detail: "",
      Model: "",
    },
  ]);

  useEffect(() => {
    fetch("/home")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setComps(jsonRes));
  });

  return (
    <>
      {login ? (
        <h1>Not Logged In try Again!</h1>
      ) : (
        <div className="container">
          <h1>Home</h1>
          {comps.map((stat) => (
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">System</th>
                    <th scope="col">Version</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Release_Details</th>
                    <th scope="col">Processor</th>
                    <th scope="col">System_Detail</th>
                    <th scope="col">Model</th>
                    <th scope="col">No of Processors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{stat._id}</th>
                    <td>{stat.System}</td>
                    <td>{stat.Version}</td>
                    <td>{stat.Device_Name}</td>
                    <td>{stat.Release_Details}</td>
                    <td>{stat.Processor}</td>
                    <td>{stat.System_Detail}</td>
                    <td>{stat.Model}</td>
                    <td>{stat.Number_of_Processors}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;

{
  /* <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <%statsList.forEach(stat => {%>
        <tr>
          <th scope="row"><%= stat._id %></th>
          <td><%= stat.System %></td> 
        </tr>
        <%})%>
      </tbody>
    </table> */
}
