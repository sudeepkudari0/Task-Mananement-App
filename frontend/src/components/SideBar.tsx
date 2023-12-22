import axios from 'axios';
import React, { useEffect } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
const SideBar = () => {

  const [ first_name, setFirstName ] = React.useState('')
  const [ last_name, setLastName ] = React.useState('')
  const id = localStorage.getItem('userId');
  const API = import.meta.env.VITE_API;

  const getData = async () => {
    try {
      const response = await axios.get(`${API}/api/v1/user/${id}`, {
        withCredentials: true,
        params: {
          id: id,
        }
      });
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className='hidden lg:flex flex-col w-[300px] h-[calc(100vh-40px)] bg-zinc-900 m-5 rounded-lg text-white'>
        <div className='flex flex-row p-5 w-max h-[250px] m-8 gap-4'>
          <FaUserAlt size={30} color='white' className='' />
          <h1 className='text-2xl w-[200px] h-[100px]'>{first_name} {last_name}</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 h-[25px] p-5 bg-slate-500 w-full rounded-lg'>
          <div className='flex flex-row items-center justify-center '>
            <FaTasks size={23} color='white' className='m-2 mr-6' />
            <h1>All Tasks</h1>
          </div>
        </div>

    </div>
  )
}

export default SideBar