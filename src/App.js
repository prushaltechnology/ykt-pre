import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Scheduling from './pages/schedulingAndBooking/Scheduling';
// import WeAreHiring from './pages/hiring/WeAreHiring';
import ContactUs from './pages/contactUs/ContactUs';
//import Navbar from './components/navbar/Navbar';
import ClassesType from './pages/classesType/ClassesType';
import Memberships from './pages/hiring/Memberships';
import Faqs from './pages/faqs/Faqs';
import TermsAndCond from './pages/termsAndconditions/TermsAndCond';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/scheduling' element={<Scheduling/>}/>
        <Route path='/membership' element={<Memberships/>}/>
        <Route path ='/classestype' element = {<ClassesType/>} />
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/faqs' element = {<Faqs/>} />
        <Route path='/terms' element = {<TermsAndCond/>} />
      </Routes>
      
    </div>
  );
}

export default App;
