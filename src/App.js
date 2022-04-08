
import './App.css';
import Studentdetails from './components/students.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className='wildlogo' src="https://www.wildcodeschool.com/assets/wildcodeschool-logo-meta-image-f6f2f7f52b82bfc419f031f6a989020a8b094d7a4e6676ab6f0dff0b0f470da9.png" alt="wildimage"></img>
      </header>
       <Studentdetails name="Billy Nightingale" location="Capbreton, France" about="Hello, I like to build things and am a web developer" funfact="I like Burittos" />
    </div>
  );
}

export default App;
