import React,{Component} from "react"


class MemeGenerator extends Component{
    constructor(){
       super()
       this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
       this.state = {
           topText: "",
           botText: "",
           imageLink: "http://www.relatably.com/m/img/blank-memes-templates/9e1f304038173e504094a9c126b3e0d7.jpg",
           imgArray: []
       }
   }
   
   handleChange(event){
            const {name, value} = event.target
            this.setState({[name]: value})
   }
   
   handleSubmit(event){
      event.preventDefault()
       const rand = Math.floor(Math.random() * this.state.imgArray.length)
       console.log(rand)
       const randMeme = this.state.imgArray[rand].url
       this.setState({imageLink: randMeme})     
   }
   
   componentDidMount(){
       fetch("https://api.imgflip.com/get_memes").then(response=> response.json()).then(response=> {
           const {memes} = response.data              
           this.setState({
               imgArray: memes
           }) 
       })
       
   }

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
            console
            <img src = {this.state.imageLink} alt=""/>
            <h2 className = "top"> {this.state.topText} </h2>
            <h2 className = "bottom"> {this.state.botText} </h2>
         </div>
    </div>
     )
    }
}

export default MemeGenerator
   
    