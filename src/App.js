import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import HomePage from './Pages/HomePage';
import Experiences from "./Pages/Experiences.js";
import Classes from './Pages/Classes';
import ContactMe from './Pages/ContactMe.js';




function App() {
  return ( 
    <body className= 'm-0 p-0'>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 bg-cover overscroll-hidden">
        <NavBar></NavBar>
          <Routes>
            <Route path = '/'  element={<HomePage/>} />
            <Route path = '/Classes'  element={<Classes/>} />
            <Route path = '/Experiences'  element={<Experiences/>} />
            <Route path = '/ContactMe'  element={<ContactMe/>} />
          </Routes>
        </div>
    </body>
  );
}

export default App;
