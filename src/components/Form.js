import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL
             

        */
       this.state = {linkName: "" }
       this.state = {URL: "" }
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       event.preventDefault()
       if (event.target.id === "linkName") {
           return this.setState({linkName: event.target.value})
       }
       else
       return this.setState = {URL: event.target.value}

    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       console.log('This is onFormSubmit', this.state.URL)
       const newLink={linkName: this.state.linkName, URL: this.state.URL}
       this.props.onNewTask(newLink);
       this.handleChange(event);

    }

    render() {

        return(
            <form>
                 {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="linkName">Link Name:</label>
                <input type="text" id ="Link" onChange= {(event) => this.handleChange(event)} />
                <label for= "URL"> URL:</label> 
                <input type="text" id = "url" onChange={(event) => this.handleChange(event)} /> 
                <input type="submit" value = "Submit" onClick = {this.onFormSubmit} />
                 
            </form>
        )
    
    }
}

export default Form;
