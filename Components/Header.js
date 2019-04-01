import React from "react"

/*
Name Header()
Description: returns the display logic for the header which contains the title text and 2 images
*/
function Header(){
    return(
        <header>
            <img 
                className= "headerImg1" 
                src = "https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg" 
                alt = "Problem"
            />
            <p> MEME GENERATOR </p>
            <img 
                className= "headerImg2"
                src = "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt = "Problem"
            />
        </header>
    )
    
}

export default Header
