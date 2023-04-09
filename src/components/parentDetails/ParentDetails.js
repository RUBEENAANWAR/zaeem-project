import React,{useState} from 'react'
import './ParentDetails.css'

const ParentDetails = () => {
  const [data, setData] = useState([
    {
      name: "Sathyan PT",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Prajesh KT",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Zinumol Jamal",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Mike Brown",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "John Doe",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Jane Smith",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "John Doe",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Jane Smith",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
  ]);
  return (
    <div>
      <h1>Parent Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((parent, index) => (
            <tr key={index}>
              <td>{parent.name}</td>
              <td>{parent.number}</td>
              <td>{parent.email}</td>
              <td>{parent.created}</td>
              <td>{parent.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default ParentDetails