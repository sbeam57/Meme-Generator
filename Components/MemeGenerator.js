import React,{Component} from "react"

/*
Class name: MemeGenerator 
Description: Class componenet which contains the logic needed to render the meme picutre, meme text, generator button, and the text input forms
*/
class MemeGenerator extends Component{
    constructor(){
    super()
    // Binding class methods to give them the ability to use setState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // initializing the state object
    this.state = {
           topText: "",
           botText: "",
           imageLink: "http://www.relatably.com/m/img/blank-memes-templates/9e1f304038173e504094a9c126b3e0d7.jpg",
           imgArray: []
       }
   }
   
   
/*
Name: handleChange(event):
Input: the event triggered by the change to the form 
Description: sets the state for the object value that corresponds to the name attribute to the value attribute 
*/
   handleChange(event){
            const {name, value} = event.target
            this.setState({[name]: value})
   }
   
   
   
/*
Name: handleSubmit(event)
Input: the event triggered by the submission of the form
Description: Generates a random number and uses it as an index to choose a random meme from the meme array       
*/
    handleSubmit(event){
        // Prevents the default action of the event from being triggered
        event.preventDefault()
        // Generate random number within the array size
        const rand = Math.floor(Math.random() * this.state.imgArray.length)
        const randMeme = this.state.imgArray[rand].url
        this.setState({imageLink: randMeme})     
    }
   
/*
Name: componentDidMount()
Description: Lifecycle method for the MemeGenerator Component which fetches the array of memes using an api and sets the state for the imgArray object value
*/
   componentDidMount(){
       fetch("https://api.imgflip.com/get_memes").then(response=> response.json()).then(response=> {
           const {memes} = response.data              
           this.setState({
               imgArray: memes
           }) 
       })
       
   }

/*
Name: render()
Description: Contains all the display logic which is used to render the picture, text, and input form
*/
    render(){
     return(
        <div>
            <form className = "meme-form" onSubmit= {this.handleSubmit}>
                <input 
                    type = "text" 
                    name= "topText"
                    placeholder = "Top Text"
                    value = {this.state.topText}
                    onChange = {this.handleChange}
                 />
                <input 
                    type = "text" 
                    name= "botText"
                    placeholder = "Bottom Text"
                    value = {this.state.botText}
                    onChange = {this.handleChange}
                />
                <button> Generate </button>
            </form>
        
            <div className= "meme">
                <img src = {this.state.imageLink} alt=""/>
                <h2 className = "top"> {this.state.topText} </h2>
                <h2 className = "bottom"> {this.state.botText} </h2>
            </div>
        </div>
     )
    }
}

export default MemeGenerator
   
    