import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/landingPage";
import LoginPage from "./auth/Login";
import SignUpPage from "./auth/SignUp";
import LoanApplicationForm from "./pages/loanform";
import UserLoans from "./pages/requestedLoans";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/applyloan" element={<LoanApplicationForm />}/>
        <Route path="/userloans" element={<UserLoans />} />
      </Routes>
    </>
  );
}

export default App;
