
import './App.css';
import Studentdetails from './components/students.js';
import Billy from './assets/Billy.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className='wildlogo' src="https://www.wildcodeschool.com/assets/wildcodeschool-logo-meta-image-f6f2f7f52b82bfc419f031f6a989020a8b094d7a4e6676ab6f0dff0b0f470da9.png" alt="wildimage"></img>
      </header>
      <h1>This is where student information goes</h1>
       <Studentdetails image={Billy} alt="Photo of Billy" name="Billy Nightingale" location="Capbreton, France" about="Hello, I like to build things and am a web developer" funfact="I like Burittos" />
    </div>
  );
}

export default App;
