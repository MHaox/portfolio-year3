import './App.css';
import { NavBar }   from './components/NavBar';
import { Banner }   from './components/Banner'
import { Skills }   from './components/Skills';
import { Projects } from './components/porjects';
import { Testic }     from './components/test';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Testic /> */}
    </div>
  );
}

export default App;
