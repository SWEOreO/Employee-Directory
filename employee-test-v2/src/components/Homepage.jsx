import { useState,useEffect } from 'react';
import { Link, useNavigate, Route,Routes } from 'react-router-dom';

const Homepage = (() => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [searchTerm, setAllSearchTerm] = useState("");
  const [addEmployeeNameInput, setAddEmployeeNameInput] = useState("");
  const [addEmployeeIdInput, setAddEmployeeIdInput] = useState();
  const [addEmployeeHourlyPayInput, setAddEmployeeHourlyPayInput] = useState();


  useEffect(() => {
    const getAllEmployees = async() => {
      const response = await fetch ('https://block32-employee-directory-v2.onrender.com/employees');
      const retrieveAllEmployees = await response.json();
      setAllEmployees(retrieveAllEmployees);
    }

    getAllEmployees();
  })

  const filteredEmployees = allEmployees.filter((employee) => employee.name.includes(searchTerm));

  const addEmployeeSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch ('https://block32-employee-directory-v2.onrender.com/employees/post', {
      method:`POST`,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: addEmployeeIdInput,
        name: addEmployeeNameInput,
        hourlyPay: addEmployeeHourlyPayInput
      })
    });
    const res = await response.json();
  }

  return (
    <>
    <input placeholder='search by name' type="text" value={searchTerm}
        onChange={(event)=>{setAllSearchTerm(event.target.value)}}/>

        {
          filteredEmployees.map((eachEmployee) => {
            return (

              <div key={eachEmployee.id} >

                  <p>{eachEmployee.name}</p>
                  
              </div>
              

            )
          })


        }

        <form onSubmit={addEmployeeSubmit}> 

        <input placeholder='id' 
        onChange={(event) => {setAddEmployeeIdInput(event.target.value)}}/>

        <input placeholder='name' 
        onChange={(event) => {setAddEmployeeNameInput(event.target.value)}}/>

        <input placeholder='Employee Hourly Pay' 
        onChange={(event) => {setAddEmployeeHourlyPayInput(event.target.value)}}/>

        <button>Add</button>

        </form>
    
    </>
  )
})

export default Homepage