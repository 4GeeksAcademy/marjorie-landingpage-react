import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle


//create your first component
const Home = () => {
	var people =[
		{cardtitle: "Vik",
		 Image:"https://lumiere-a.akamaihd.net/v1/images/vik-main_bb193e01.jpeg?region=224%2C0%2C963%2C541",
		 cardtext: "The clone trooper Vik has given up hope. A prisoner of the Empire on Mount Tantiss, his days in confinement have instilled a belief that no one is coming to release him and his brothers.",
		},
		{ 
		  cardtitle: "Dr. Emerie Karr",
		  Image:"https://lumiere-a.akamaihd.net/v1/images/emerie-karr-main_e8d90619.jpeg?region=40%2C0%2C964%2C541",
		  cardtext:"Dr. Emerie Karr blends into the crowd of Imperial medical professionals working inside the secret labs at Mount Tantiss on the world of Wayland.",
		},
		{ 
		  cardtitle:" Omega",
		  Image:"https://lumiere-a.akamaihd.net/v1/images/omega-main_7dae7afd.jpeg?region=0%2C0%2C1280%2C720",
		  cardtext:"Omega travels the galaxy with her brothers, Clone Force 99, as a formidable member of their squad. Before the Empire came to power, she served as a medical assistant to Nala Se on the clone's homeworld of Kamino, spending her life working in Tipoca City.",
		},
		{ 
		  cardtitle:"Tech",
		  Image:"https://lumiere-a.akamaihd.net/v1/images/tech-main_1c6f5de6.jpeg?region=262%2C0%2C967%2C544",
		  cardtext:"In the unusual group of specialist clone commandos called Clone Force 99 (or the Bad Batch), Tech is the computer and weapons specialist and easily the most talkative of the group.",
		},
	]
	return (
		<div className="text-center">
        <Navbar />
		<Jumbotron/>
        <div className="row d-flex" style={{margin:"5vw"}}>
		   {people.map (people=>(
			<Card cardtitle={people.cardtitle} image={people.Image} cardtext={people.cardtext} />
		   ))
		};

		</div>
		<Footer/>
		</div>
	);
};


export default Home;

