import React from "react";
import '../../App.css'
import Cards_Design_Ideas from "../Cards_Design_Ideas";
import Footer from "../Footer";


export default function designIdeas() {
    return (
        <>
            <h1 className="design-ideas">Design Ideas</h1>
            <Cards_Design_Ideas />
            <Footer />
        </> 

    )
   
}