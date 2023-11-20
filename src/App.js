import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";

import Nav from "./components/Home"
import { About, Contact, Doctor, Services,} from './components/Main';

// import Content from './components/Content'; used for displaying navbar separate and homepage separate
import {Login} from "./components/Login.jsx";
import {Signup} from "./components/Signup.jsx";
// import Login from './components/Login.js';

function App() {
  return (
    <div>
       <HashRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Nav />}/>
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
