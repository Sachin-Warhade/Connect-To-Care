import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PatientRegistration from './components/PatientRegistration';
import AddDoctor from './components/AddDoctor';
import HospitalRegistration from './components/HospitalRegistration';
import PatientList from './components/PatientList';
import HospitalList from './components/HospitalList';
import DoctorList from './components/DoctorList';
import HealthTimeline from './components/HealthTimeline';
import ViewHealthTimeline from './components/ViewHealthTimeline';
import CreateSlot from './components/CreateSlot';
import ViewSlots from './components/ViewSlots';
import UpdateSlot from './components/UpdateSlot';

import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
      <Router>
<<<<<<< HEAD
  <div className='container'>
    <Routes>
      <Route path="/connect" component={<Homepage />}></Route>
    </Routes>
  </div>
=======
          <div className='container'>
            <Routes>
            <Route exact path = "/" element = {<PatientRegistration />} />
            <Route path="/adddoctor" element={<AddDoctor/>}></Route>
            <Route path="/hospitalregistration" element={<HospitalRegistration/>}></Route>
            <Route path="/patientlist" element={<PatientList/>}></Route>
            <Route path="/hospitallist" element={<HospitalList/>}></Route>
            <Route path="/doctorlist" element={<DoctorList/>}></Route>
            <Route path="/healthtimeline" element={<HealthTimeline/>}></Route>
            <Route path="/viewhealthtimeline" element={<ViewHealthTimeline/>}></Route>
            <Route path="/createslot" element={<CreateSlot/>}></Route>
            <Route path="/viewslot" element={<ViewSlots/>}></Route>
            <Route path="/updateslot" element={<UpdateSlot/>}></Route>
            </Routes>
          </div>
>>>>>>> e29590daa12f4ad44b26b3ae3d9a8bc1af0b2959
      </Router >
    </div >
  );
}

export default App;
