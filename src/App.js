import './App.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project'
import  Contact  from './components/Contact';
import mailChimpForm from './components/MailChimpForm';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <MailChimpForm />
    </div>
  );
}

export default App;
