import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/porjects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
// import { Testisc } from './components/test';  // Fix naming for consistency

// Import detail pages for routing
import C1Detail from './pages/C1Detail';
import DroneDetail from './pages/DroneDetail';
import InternshipDetail from './pages/InternshipDetail';

import SalesforceDetail from './pages/SalesforceDetail';
import LabormarketDetail from './pages/LabormarketDetail';
import HulpketenDetail from './pages/HulpketenDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Main page */}
          <Route path="/" element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              {/* <Testic /> */}
            </>
          } />
          
          {/* Detail pages for projects and accomplishments */}
          <Route path="/c1" element={<C1Detail />} />
          <Route path="/drone" element={<DroneDetail />} />
          <Route path="/internship" element={<InternshipDetail />} />
          <Route path="/salesforce" element={<SalesforceDetail />} />
          <Route path="/labormarket" element={<LabormarketDetail />} />
          <Route path="/hulpketen" element={<HulpketenDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
