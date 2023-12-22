import { useEffect } from 'react'
import AddTask from './AddTask'
import { tasksWithId } from '../types'
import { useState } from 'react'
import axios from 'axios'
const AllTasks = () => {
  const id = localStorage.getItem('userId');
  const [ tasks, setTasks ] = useState<tasksWithId[]>([]);
  const API = import.meta.env.VITE_API;

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API}/api/v1/tasks/${id}`, {
        withCredentials: true,
        params: {
          id: id,
        }
      });
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    console.log(tasks);
  }, []);


  return (
    <>
      <div className='sm:flex w-[100vw] h-[calc(100vh-40px)] m-4 bg-zinc-900 text-white rounded-lg'>
        <div className='flex flex-col w-full h-full'>
          <div className='flex flex-row justify-start items-start w-full'>
            <div className='flex flex-col justify-start items-start w-[300px]  m-5'>
              <h1 className='text-3xl font-bold m-4'>All Tasks</h1>
            </div>
            <div className='sm:flex flex-col justify-end items-end w-[300px] m-5'>
              <AddTask />
            </div>
          </div>
          <div className='flex flex-row justify-start items-start m-5'>
            {tasks.map((task) => (
              <div key={task.id} className='flex flex-col justify-start items-start w-[300px] h-[300px]  m-5 bg-zinc-800 rounded-lg'>
                <h1 className='text-3xl font-bold m-4'>{task.task_name}</h1>
                <p className='text-1xl font-bold ml-4'>{task.task_description}</p>
              </div>
            ))}
            
            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default AllTasks