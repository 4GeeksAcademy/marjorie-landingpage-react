import React from "react";

const Card = (props) => {
	return (
		<div class="card mx-3" style={{width: "18rem"}}>
          <img src={props.image} style={{width:"20vw"}}/>
        <div class="card-body">
          <h5 class="card-title">{props.cardtitle}</h5>
          <p class="card-text">{props.cardtext}</p>
        <div>
          <a href="#" class="btn btn-primary">Find out more</a>
        </div>
        </div>
   </div>
	);
};


export default Card