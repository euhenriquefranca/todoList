import React, { Component, Fragment } from "react";

export default class Tarefas extends Component {

  constructor() {
    super();
    this.state = { 
      tarefa : "",
      tarefas: [ "Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4" ]
    };

    this.adcionaTarefa = this.adcionaTarefa.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <Fragment>
        <h1>To-do List</h1>
        <input onChange ={ this.handleChange } value={ this.state.tarefa } />
        <button onClick={this.adcionaTarefa}>Adicionar</button>
        <ul>
          { this.state.tarefas.map(tarefa => <li>{ tarefa }</li>)}
        </ul>
      </Fragment>
    );
  }
  adcionaTarefa() {
    this.setState({ 
      tarefa : "",
      tarefas : [].concat(this.state.tarefas, this.state.tarefa )})
  }

  handleChange(event) {
    this.setState({ tarefa : event.target.value });
  }

}