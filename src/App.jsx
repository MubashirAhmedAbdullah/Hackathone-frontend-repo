import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './pages/generalPagesLayout/navbar'
import AboutUs from './pages/aboutUs'
import Services from './pages/services'
import ContactUs from './pages/contactUs'
import UserNavbar from './user/userLayout/userLayout'
import UserDashboard from './user/userDashboard'
import UserLoans from './user/userLoans'
import LoanDetails from './user/loanDetailsPage'
import Login from './pages/login'
import Signup from './pages/signUp'

// Private Route Component
const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("jwtToken"); // Example auth check
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />

      {/* Private Routes */}
      <Route path="/user" element={<PrivateRoute />}>
        <Route element={<UserNavbar />}>
          <Route path="myloans" element={<UserLoans />} />
          <Route path="loandetails/:id" element={<LoanDetails />} />
          <Route path="dashboard" element={<UserDashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;
