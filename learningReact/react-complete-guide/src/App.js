import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import styled from  'styled-components';



const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor : pointer;
      outline:none;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color :black;
      }

`;

class App extends Component {
  state = {
    persons:[
      {id: 'test1' ,name: 'Max', age: 28},
      {id: 'test2' ,name: 'Manu', age: 29},
      {id: 'test3' ,name: 'Stephanie', age: 26}
    ],
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

       this.setState({  
       persons : persons      
     
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }


  render() {

    let buttonName = 'Toggle person'
     let persons = null;
     let classes = [];

     if(this.state.persons.length <= 2) {
       classes.push('red');
     } if(this.state.persons.length <= 1) {
       classes.push('bold');
     }
     if (this.state.showPersons ) {
       persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              key = {person.id}
              pClick = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age={person.age} 
              changed={(event)=> this.nameChangeHandler(event, person.id)}
              />

            })}
        </div>
       );

       buttonName = 'Delete Person'
     }
    return (
        <div className="App">
              <h1>Hi, Im react app</h1>
              <p className={classes.join(' ')}> test </p>
              <StyledButton alt={this.state.showPersons}  onClick={this.togglePersonHandler}>
              {buttonName}
              </StyledButton>
          {persons}
      </div>
     );
  }
}

export default App;
