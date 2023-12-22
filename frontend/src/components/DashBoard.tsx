import AllTasks from './AllTasks'
import SideBar from './SideBar'

const DashBoard = () => {
  return (
    <div className='sm:flex bg-black w-full h-full'>
        <SideBar />
        <AllTasks />
        
    </div>
  )
}

export default DashBoard