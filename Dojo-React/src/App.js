import React, { Component } from 'react'
import axios from 'axios'

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText : '',
      outputText : ''
    }
    this.textChanged = this.textChanged.bind(this)
  }
  textChanged(event){
    var name = event.target.value
    this.setState({outputText: name})
    this.setState({inputText: name})
  }
  render(){
    return(
      <div>
        <input type='text' onChange={this.textChanged} value={this.state.inputText}/>
        <br/>
        <a>Hola {this.state.outputText} cómo estas?</a>
      </div>
    )
  }
}

class NASA extends Component{
  constructor(props){
    super(props)
    this.state={
      imgUrl: ''
    }
    this.getImage = this.getImage.bind(this)
  }

  render(){
    return(
      <div>
        <img src={this.state.imgUrl} />
        <br/>
        <button onClick={this.getImage}>
          PUSH ME
          </button>
      </div>
    )
  }

  getImage(event){
    var self = this
    axios.get(url)
      .then(function(response){
        console.log('Img url: ', response.data.url)
        self.setState({imgUrl: response.data.url})
      })
      .catch(function(error){

      })
  }
}

export { NASA, App }
