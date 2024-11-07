import { Route, Routes } from "react-router-dom"
import Home from "./Pages/User/Home"
import PickUp from "./Pages/User/PickUp"
import Orders from "./Pages/User/Orders"
import Services from "./Pages/User/Services"
import AgentHome from "./Pages/Agent/AgentHome"
import AgentDelivery from "./Pages/Agent/AgentDelivery"
import AgentOdrCmplt from "./Pages/Agent/AgentOdrCmplt"
import AdminCmpltdOrd from "./Pages/Admin/AdminCmpltdOrd"
import AdminPickups from "./Pages/Admin/AdminPickups"
import AdminDeliveries from "./Pages/Admin/AdminDeliveries"
import AdminAgentDetails from "./Pages/Admin/AdminAgentDetails"
import AdminaddAgent from "./Pages/Admin/AdminaddAgent"
import AdminUserDetails from "./Pages/Admin/AdminUserDetails"
import AdminSearchOrder from "./Pages/Admin/AdminSearchOrder"
import Auth from "./Pages/User/Auth"
import LandingScreen from "./Pages/User/LandingScreen"
import AgentSiginIn from "./Pages/Agent/AgentSiginIn"
import AddAdmin from "./Pages/Admin/AddAdmin"

const App = () => {
  return (
    <>
      <Routes>

        {/* <<<<<....User Routes.....>>>>> */}

        <Route path='/' element={<LandingScreen />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/pickup' element={<PickUp />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/services' element={<Services />} />

        {/* <<<<<......Agent Routes......>>>>> */}

        <Route path='/agentSigin' element={<AgentSiginIn />} />
        <Route path='/agentPickup' element={<AgentHome />} />
        <Route path='/agentDelivery' element={<AgentDelivery />} />
        <Route path='/completedOrders' element={<AgentOdrCmplt />} />

        {/* <<<<<.....Admin Routes.....>>>>> */}

        <Route path='/adminCmpltdOrd' element={<AdminCmpltdOrd />} />
        <Route path='/adminPickups' element={<AdminPickups />} />
        <Route path='/adminDeliveries' element={<AdminDeliveries />} />
        <Route path='/adminAgentDetails' element={<AdminAgentDetails />} />
        <Route path='/adminAddAgent' element={<AdminaddAgent />} />
        <Route path='/addAdmin' element={<AddAdmin />} />
        <Route path='/adminUserDetails' element={<AdminUserDetails />} />
        <Route path='/adminSearchOrderByid' element={<AdminSearchOrder />} />

      </Routes>
    </>
  )
}

export default App
