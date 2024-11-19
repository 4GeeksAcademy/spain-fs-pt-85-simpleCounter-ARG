import React from "react";

//create your first component
const Home = (props) => {
	console.log(props.numero);
	return (
		
		<div className="d-flex bg-dark justify-content-center py-4">
			<div className = "responsive-icon border rounded text-white fw-bold   mx-2 "> <i className="fa-regular fa-clock"></i> </div>
			<div className = "responsive-digit border rounded text-white fw-bold  mx-2"><p> {props.numero[5]} </p> </div>
			<div className = "responsive-digit border rounded text-white fw-bold  mx-2"><p> {props.numero[4]}</p> </div>
			<div className = "responsive-digit border rounded text-white fw-bold  mx-2"><p>{props.numero[3]}</p>  </div>
			<div className = "responsive-digit border rounded text-white fw-bold  mx-2"><p>{props.numero[2]} </p> </div>
			<div className = "responsive-digit border rounded text-white fw-bold  mx-2"><p>{props.numero[1]}</p>  </div>
			<div className = "responsive-digit border rounded text-white fw-bold  mx-2"><p>{props.numero[0]} </p> </div>
		</div>
	);
};

export default Home;
