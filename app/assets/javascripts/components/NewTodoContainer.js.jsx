var NewTodoContainer = React.createClass({

  getInitialState: function() {
    return { showForm: false};
  },

  toggleDisplay: function() {
    this.setState({showForm: !this.state.showForm});
  },

  saveTodo: function(value) {
    $.post(
      this.props.todosPath,
      (data) = {title: value}
    );
    this.toggleDisplay();
    this.props.onTodosUpdated();
  },

  render: function() {
    return (
      <div className="new-todo">
        {
          this.state.showForm ? 
          <NewTodoForm container={this}/> : 
          <NewTodo container={this} />
        }
      </div>
    );
  }

  

});
