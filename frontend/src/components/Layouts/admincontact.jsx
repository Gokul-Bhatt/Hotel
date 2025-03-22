import React, { useEffect, useState } from 'react'
import "./adminlayout.css";

const admincontact = () => {
  const [users, setusers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const usersauthrizationToken = token;
  const getAllContactData = async()=>{
    try {
      const response = await fetch("https://hotel-2-fkkj.onrender.com/admin/contact",{
        method:"GET",
        headers:{
          Authorization: usersauthrizationToken,
        },
      });
      const data = await response.json();
      // console.log("users",data);
      setusers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deletecontact = async(id)=>{
    try {
      const response = await fetch(`https://hotel-2-fkkj.onrender.com/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:usersauthrizationToken,
        },
      });
      const data = await response.json();
      console.log("users after data", data);
      if(response.ok){
        getAllContactData();
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    getAllContactData();
  },[]);
  return (
    <div className='admin'>
      <table className="table">
        <thead>
          <tr>
            <th className='has-text-centered'>Name</th>
            <th className='has-text-centered'>Phone</th>
            <th className='has-text-centered'>Message</th>
            <th className='has-text-centered'>Update</th>
            <th className='has-text-centered'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((curusers, index)=>{
            return <tr key={index}>
              <td className='has-text-centered'>{curusers.username}</td>
              <td className='has-text-centered'>{curusers.phone}</td>
              <td className='has-text-centered'>{curusers.message}</td>
              {/* <td>Edit</td> */}
              <td><button className='button is-success'>Edit</button></td>
              <td><button className='button is-danger' onClick={()=>deletecontact(curusers._id)}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default admincontact