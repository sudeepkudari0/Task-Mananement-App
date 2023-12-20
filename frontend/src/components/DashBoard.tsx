import AllTasks from './AllTasks'
import SideBar from './SideBar'

const DashBoard = () => {
  return (
    <div className='flex bg-black'>
        <SideBar />
        <AllTasks />
        
    </div>
  )
}

export default DashBoard