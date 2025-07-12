import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Cloth from "./Pages/Cloth";
import AddCloth from "./Pages/AddCloth";
import UserDashboard from "./Pages/UserDashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Navbarr from "./components/Navbarr";
import Admin from "./Pages/Admin";
import Footerr from "./components/Footerr";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return(
    <>
    <UserContextProvider>
      <BrowserRouter>
      <Navbarr/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cloth/:id" element={<Cloth/>} />
          <Route path="/addcloth" element={<AddCloth/> }/>
          <Route path="/admin" element={<Admin/> }/>
          <Route path="/dashboard" element={<UserDashboard/> }/>
        </Routes>
      <Footerr/>
      </BrowserRouter>
    </UserContextProvider>
    </>
  )
}

export default App