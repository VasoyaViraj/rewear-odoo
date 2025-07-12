import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Cloth from "./Pages/cloth";
import AddCloth from "./Pages/AddCloth";
import UserDashboard from "./Pages/UserDashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Navbarr from "./components/Navbarr";
import Admin from "./Pages/Admin";
// import { AllProductsProvider } from './contexts/allProductsContext';

function App() {
  return(
    <>
    {/* <AllProductsProvider> */}
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
      {/* <Footer/> */}
      </BrowserRouter>
    {/* </AllProductsProvider> */}
    </>
  )
}

export default App