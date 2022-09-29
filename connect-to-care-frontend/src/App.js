import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'

import Doctor from './components/DashboardDoctor';
import UpdateDoctor from './components/UpdateDoctor';
import AppointmentViewForPatient from './components/AppointmentViewForPatient';
import AppointmentHistory from './components/AppointmentHistory';
import CreateSlot from './components/CreateSlot';
import ViewSlots from './components/ViewSlots';
import UpdateSlot from './components/UpdateSlot';
import AppointmentViewForDoctor from './components/AppointmentViewForDoctor';

import Patient from './components/DashboardPatient';
import UpdatePatient from './components/UpdatePatient';
import Searchhospital from './components/Searchhospital';
import BookAppointment from './components/BookAppointment';
import Parameter from './components/Parameter';
import UpdateParameter from './components/UpdateParameter';
import ViewHealthTimeline from './components/ViewHealthTimeline';
import ListDoctorForPatient from './components/ListDoctorForPatient';

import Hospital from './components/DashboardHospital'
import HospitalRegistration from './components/HospitalRegistration';
import UpdateHospital from './components/UpdateHospital';
import AddDoctor from './components/AddDoctor';
import AddPatient from './components/PatientRegistration';
import ListDoctorHospital from "./components/ListDoctorHospital"


import Admin from './components/DashboardAdmin';
import ListPatientForAdmin from './components/ListPatientForAdmin';
import ListDoctorForAdmin from './components/ListDoctorForAdmin';
import ListHospitalAdmin from './components/ListHospitalAdmin';

import HealthTimeline from './components/HealthTimeline';
import Privacypolicy from './components/Privacypolicy';
import Terms from './components/Terms';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path='/aboutus' element={<About />} />
            <Route exact path='/contactus' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/registerhospital' element={<HospitalRegistration />} />
            <Route exact path='/patientSignup' element={<AddPatient />} />
            <Route exact path='/forgotpassword' element={<ForgotPassword />} />

            <Route exact path='/doctor' element={<Doctor />} />
            <Route exact path='/updatedoctor' element={<UpdateDoctor />} />
            <Route exact path='/viewappointmentdoctor' element={<AppointmentViewForDoctor />} />
            <Route exact path='/appointmenthistory' element={<AppointmentHistory />} />
            <Route exact path="/createslot" element={<CreateSlot />}></Route>
            <Route exact path="/viewslot" element={<ViewSlots />}></Route>
            <Route exact path="/updateslot" element={<UpdateSlot />}></Route>
            <Route exact path="/healthtimeline" element={<HealthTimeline />}>
              <Route path=":id" element={<HealthTimeline />}></Route></Route>

            <Route exact path='/patient' element={<Patient />} />
            <Route exact path='/updatepatient' element={<UpdatePatient />} />
            <Route exact path='/searchhospital' element={<Searchhospital />} />
            <Route exact path='/bookappointment' element={<BookAppointment />} />
            <Route exact path='/parameter' element={<Parameter />} />
            <Route exact path='/updateparameter' element={<UpdateParameter />} />
            <Route exact path="/viewhealthtimeline" element={<ViewHealthTimeline />}></Route>
            <Route exact path="/doclist" element={<ListDoctorForPatient />}>
              <Route path=":id" element={<ListDoctorForPatient />}></Route></Route>
            <Route exact path='/viewappointment' element={<AppointmentViewForPatient />} />

            <Route exact path='/hospital' element={<Hospital />} />
            <Route exact path='/updatehospital' element={<UpdateHospital />} />
            <Route exact path="/adddoctor" element={<AddDoctor />}></Route>
            <Route exact path="/listdoctorhospital" element={<ListDoctorHospital />}></Route>

            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/patientlist" element={<ListPatientForAdmin />}></Route>
            <Route exact path="/doctorlist" element={<ListDoctorForAdmin />}></Route>
            <Route exact path="/hospitallist" element={<ListHospitalAdmin />}></Route>

            <Route exact path="/Privacypolicy" element={<Privacypolicy />}></Route>
            <Route exact path="/Terms" element={<Terms />}></Route>
          </Routes>

        </div>
      </Router>

    </div>
  );
}

export default App;
