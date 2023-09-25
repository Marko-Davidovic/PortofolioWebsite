import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
     <Skills />
    </div>
  );
}

export default App;
