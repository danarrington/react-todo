var NewTodoContainer = React.createClass({

  getInitialState() {
    return { showForm: false};
  },

  toggleDisplay() {
    this.setState({showForm: !this.state.showForm});
  },

  saveTodo(value) {
    $.post(
      this.props.todosPath,
      (data) = {title: value}
    );
    this.toggleDisplay();
    this.props.todosContainer.fetchTodos();
  },

  render() {
    return (
      <div className="new-todo">
      {this.state.showForm ? <NewTodoForm container={this}/> : <NewTodo container={this} />}
      </div>
    );
  }

  

});
