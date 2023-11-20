import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav"
import {Contact, Doctor, Services, About} from './components/Main';

import Content from './components/Content'; 
import {Login} from "./components/Login.jsx";
import {Signup} from "./components/Signup.jsx";

function App() {
  return (
    <div>
       <HashRouter>
      {/* <Header /> */}
      <Nav />
        <Routes>
          <Route path="/" element={<Content />}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Doctor" element={<Doctor />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      {/* <Footer /> */}
      </HashRouter>
    </div>
  );
}

export default App;
