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
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Privacypolicy from "./components/Privacypolicy";
import Searchhospital from "./components/Searchhospital";
import Parameter from "./components/Parameter";
import UpdateParameter from "./components/UpdateParameter";
import BookAppointment from "./components/BookAppointment";
import PendingAppointment from "./components/PendingAppointment";
import PatientAppointmentHistory from "./components/PatientAppointmentHistory";
import SimpleForm from "./components/SimpleForm";


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

            <Route path="/SimpleForm" element={<SimpleForm />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>

            <Route path="/Terms" element={<Terms />}></Route>
            <Route path="/Privacypolicy" element={<Privacypolicy />}></Route>
            <Route path="/Searchhospital" element={<Searchhospital />}></Route>
            <Route path="/Parameter" element={<Parameter />}></Route>
            <Route path="/UpdateParameter" element={<UpdateParameter />}></Route>
            <Route path="/BookAppointment" element={<BookAppointment />}></Route>
            <Route path="/PendingAppointment" element={<PendingAppointment />}></Route>
            <Route path="/PatientAppointmentHistory" element={<PatientAppointmentHistory />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}



     
export default App;
