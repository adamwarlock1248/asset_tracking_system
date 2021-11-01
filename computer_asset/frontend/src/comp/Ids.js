import React,{useState, useEffect} from 'react';


function Home() {
    const [comps, setComps] = useState([{
      _id : '',
      Device_Name: '',
    }])

    useEffect(() => {
      fetch("/home").then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes => setComps(jsonRes));
    })

    return <div className="container">
        <h1>Home</h1>
        {comps.map(stat => 
        <div>
          <table class="table">
          <thead>
        <tr>
          <th scope="col">ID</th>
          <th width="200%" scope="col">Device Name</th>
        </tr>
      </thead>
          <tbody>
        <tr>
          <th scope="row">{stat._id}</th>
          <td>{stat.Device_Name}</td>
        </tr>           
          </tbody></table>
          </div>
          )}
        
    </div>
}

export default Home;















