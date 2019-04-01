import React from "react"
import Header from "./Header.js"
import MemeGenerator from "./MemeGenerator.js"

/* 
App()
Decription: Main App functional componenet calling 2 components which make up the meme generator app
*/
function App(){
    return(
        <div>
        <Header />
        <MemeGenerator />
        </div>
    )
}

export default App