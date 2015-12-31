var TodoApp = React.createClass({

  render: function() {
    return (
      <div>
        <Header count={this.props.todos.length} />
        <TodoList todos={this.props.todos} onFinishTodo={this.props.onFinishTodo} />
        <NewTodoContainer todosPath={this.props.todosPath} 
          onTodosUpdated={this.props.onTodosUpdated} />
      </div>
    );
  }
});
