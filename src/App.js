
import './App.css';
import StudentDetails from './components/students.js';
import BillyImg from './assets/BillyImg.jpg';
import StudentDetailsData from './data.js';



function App() {
  
  return (

    <div className="App">
      <div className='container'>
      {StudentDetailsData.map((e, index) => {
        return (
          <StudentDetails key={index} image={e.image} alt={e.alt} name={e.Name} location={e.location} funfact={e.funfact} about={e.about} />
        );})}
       </div> 
    </div>
  );
}

export default App;