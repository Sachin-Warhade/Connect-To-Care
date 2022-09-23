import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes } from 'react-router-dom';
import{Route} from 'react-router';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
import ForgotPassword from './Components/ForgotPassword';
import UpdateDoctor from './Components/UpdateDoctor';
import UpdatePatient from './Components/UpdatePatient';
import UpdateHospital from './Components/UpdateHospital';
import PatientAppointment from './Components/PatientAppointment';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
            <Route path="/updatedoctor" element={<UpdateDoctor/>}></Route>
            <Route path="/updatepatient" element={<UpdatePatient/>}></Route>
            <Route path="/updatehospital" element={<UpdateHospital/>}></Route>
            <Route path="/PatientAppointment" element={<PatientAppointment/>}></Route>
            

            </Routes>
      </BrowserRouter>
    </div>
  );
}



     
export default App;
