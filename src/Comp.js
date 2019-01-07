import React, { Component } from 'react';

class FormComp extends Component {

constructor(props) {
  super(props);
  this.state = {
   checked : true,
   textinput : "",
   show : true
  }
  this.handlechange = this.handlechange.bind(this);
  this.handletextchange = this.handletextchange.bind(this);
  this.handleshow = this.handleshow.bind(this);
}

handlechange(event) {
    this.setState ((prevState) => {
      return{
      checked : !prevState.checked
    }});
}

handleshow() {
  this.setState ({
    show : !this.state.show
  });
}

handletextchange(textchangeevent) {
     this.setState ({
      textinput : textchangeevent.target.value
     });
}

render() {
let MartialStatus = this.state.checked ? "Un-Married" : "Married";
  return (
    <div>
    <p>hey <b><i>{this.props.name}</i></b>,can you please fill the form for us</p>  
    <form onSubmit={this.handlesubmit}>
    
      <p>What's your qualification?
      <label><input type="radio" value="Matric" name="qualification"/>Matric</label>
      <label><input type="radio" value="Inter" name="qualification"/>Inter</label>
      <label><input type="radio" value="Bachelors" name="qualification"/>Bachelors</label>
      <label><input type="radio" value="Masters" name="qualification"/>Masters</label></p>      

      <p><label>Are you married<input type="checkbox" value="married" onChange={this.handlechange} />{MartialStatus}</label></p>       
    
      <p>What's your city?<select>
        <option>Karachi</option>
        <option>Lahore</option>
      </select></p>
            
      <p><input type="text" value={this.state.textinput} onChange={textchangeevent =>  this.handletextchange(textchangeevent)}/>
      {this.state.textinput}</p>
    
    <input type="button" value="Show" onClick = {this.handleshow}/>
  
    { this.state.show ? <button>Submit</button> : null }

    </form> 
    </div>
  );
}}

export default FormComp;