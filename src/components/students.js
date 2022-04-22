
// This is where all the student contact details will go and the cards

const StudentDetails = (props) => (
    <div className="cards" key={props.index}>
        <img src={props.image} alt={props.alt}/>
        <p>Name:{props.Name}</p>
        <p>Location:{props.location}</p>
        <p>Fun Fact:{props.funfact}</p>
        <p>About: {props.about}</p>
        <a href="http://localhost:3000/">Add link here</a>
        <a href="http://localhost:3000/">Add link here</a>
        <a href="http://localhost:3000/">Add link here</a>
    </div>
);

export default StudentDetails