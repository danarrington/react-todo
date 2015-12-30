var NewTodoForm = React.createClass({

  handleValueChange(e) {
    this.setState({value: e.target.value});
  },

  saveTodo() {
    this.props.container.saveTodo(this.state.value);
  },

  render() {
    return (
      <div className="form-group">
        <input type="text" className="form-control" 
          placeholder="What do you need to do?"
          onChange={this.handleValueChange} />
        <button className="new-todo-button" 
          onClick={this.saveTodo}>Add to List</button>
      </div>
    );
  }
  
});
