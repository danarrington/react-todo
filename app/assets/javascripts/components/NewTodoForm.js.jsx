var NewTodoForm = React.createClass({

  handleValueChange(e) {
    this.setState({value: e.target.value});
  },

  saveTodo() {
    this.props.container.saveTodo(this.state.value);
  },

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleValueChange} />
        <button onClick={this.saveTodo}>Create</button>
      </div>
    );
  }
  
});
