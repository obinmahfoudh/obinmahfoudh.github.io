import { Routes, Route } from "react-router-dom";
import Classes from './Pages/Classes';
import HomePage from './Pages/HomePage';
import ContactMe from './Pages/ContactMe.js';
import WorkExperiences from './Pages/WorkExperiences.js';
import NavBar from "./Components/NavBar.js";


function App() {
  return ( 
    <body className="bg-gradient-to-r from-slate-900 to-slate-700 ">
      <NavBar></NavBar>
        <Routes>
          <Route path = '/'  element={<HomePage/>} />
          <Route path = '/Classes'  element={<Classes/>} />
          <Route path = '/WorkExperiences'  element={<WorkExperiences/>} />
          <Route path = '/ContactMe'  element={<ContactMe/>} />
        </Routes>
    </body>
  );
}

export default App;
