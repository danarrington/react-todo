var NewTodoForm = React.createClass({

  componentDidMount: function() {
    React.findDOMNode(this.refs.titleInput).focus();
  },

  handleValueChange: function(e) {
    this.setState({value: e.target.value});
  },

  inputKeyPress: function(e) {
    if(e.which == 13) {
      this.saveTodo();
    }
  },

  saveTodo: function() {
    this.props.container.saveTodo(this.state.value);
  },

  cancelTodo: function() {
    this.props.container.toggleDisplay(); 
  },

  render: function() {
    return (

      <div className="form-group">
        <input type="text" className="form-control" 
          placeholder="What do you need to do?"
          ref="titleInput"
          onChange={this.handleValueChange} 
          onKeyPress={this.inputKeyPress}/>
        <button className="new-todo-button" 
          onClick={this.saveTodo}>Add to List</button>
        <button className="cancel-todo-button" 
          onClick={this.cancelTodo}>Cancel</button>
      </div>
    );
  }
  
});
