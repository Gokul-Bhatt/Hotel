import React, { useEffect, useState } from 'react'
import "./adminlayout.css";

const Adminuser = () => {
  const [users, setusers] = useState([]);
  const [token, settoken] = useState(localStorage.getItem("token"));
  const usersauthrizationToken = token;
  const getAllUsersData = async()=>{
    try {
      const response = await fetch(`https://hotel-2-fkkj.onrender.com/admin/users`,{
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
  const deleteUser = async(id)=>{
    try {
      const response = await fetch(`https://hotel-2-fkkj.onrender.com/admin/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: usersauthrizationToken,
        },
      })
      const data = await response.json();
      console.log("user after delete",data);
      if(response.ok){
        getAllUsersData();
      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    getAllUsersData();
  },[]);
  return (
    <div className='admin'>
      <table className='table'>
        <thead>
          <tr>
            <th className='has-text-centered' >Name</th>
            <th className='has-text-centered' >Phone</th>
            <th className='has-text-centered' >Bed</th>
            <th className='has-text-centered' >Checkin</th>
            <th className='has-text-centered' >Checkout</th>
            <th className='has-text-centered' >Update</th>
            <th className='has-text-centered' >Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((curusers, index)=>{
            return (<tr key={index}>
              <td className='has-text-centered'>{curusers.username}</td>
              <td className='has-text-centered'>{curusers.phone}</td>
              <td className='has-text-centered'>{curusers.bed}</td>
              <td className='has-text-centered'>{curusers.checkin}</td>
              <td className='has-text-centered'>{curusers.checkout}</td>
              <td><button className='button is-success'>Edit</button></td>
              <td><button className='button is-danger' onClick={()=>deleteUser(curusers._id)}>Delete</button></td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Adminuser
