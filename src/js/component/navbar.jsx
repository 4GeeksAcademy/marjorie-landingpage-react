import React from "react";


const Navbar = () => {
    return (<nav class="navbar bg-body-tertiary">
       <div class="container-fluid" id="navbar" >
         <a class="navbar-brand" style={{color: "white"}}>Start booststrap</a>
         <a class="groupbtn">
         <button class="btn btn-outline-black"  type="submit" style={{color:"white"}} >Home</button> 
         <button class="btn btn-outline-black" type="submit" style={{color:"white"}}>About</button>
         <button class="btn btn-outline-black" type="submit" style={{color: "white"}}>Services</button>
         <button class="btn btn-outline-black" type="submit" style={{color:"white"}}>Contact</button>
         </a>
        </div>
    </nav>)
};

export default Navbar;