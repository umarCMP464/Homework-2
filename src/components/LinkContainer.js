import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  
  constructor(props) {
    super(props)
    
    /* TODO - Create state object for storing favLinks */
    this.state = {favLinks: []}
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
      const filtered_array = this.state.favLinks.filter((element, position) => position !== index)
      this.setState({favLinks: filtered_array})
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       let oldData = this.state.favLinks
       this.setState({favLinks:[...oldData, favLink] })
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData={this.state.favLinks} /> {/*TODO - Add Table Component*/} 

        <br />

        <h3>Add New</h3>
        <Form onNewTask={this.handleSubmit} />  {/*TODO - Add Form Component */}
      </div>
    )
  }
}

export default LinkContainer
