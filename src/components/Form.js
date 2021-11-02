import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL
             

        */
       this.state = {name: "" }
       this.state = {URL: "" }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       event.preventDefault()
       if (event.target.id === "name") {
           return this.setState({name: event.target.value})
       }
       else
       return this.setState({URL: event.target.value})

    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log('This is onFormSubmit', this.state)
       const newLink={name: this.state.name, URL: this.state.URL}
       this.props.onNewTask(newLink);
       

    }

    render() {

        return(
            <form>
                 {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="name">Link Name:</label>
                <input type="text" id ="name" value = {this.state.name} onChange= {this.handleChange} />
                <label for= "URL"> URL:</label> 
                <input type="text" id = "url" value = {this.state.URL} onChange={this.handleChange} /> 
                <input type="submit" value = "Submit" onClick = {this.onFormSubmit} />
                 
            </form>
        )
    
    }
}

export default Form;
