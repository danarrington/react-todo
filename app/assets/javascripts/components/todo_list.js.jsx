var TodoList = React.createClass({
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(this.renderTodo)}
      </ul>
    );
  },

  renderTodo(todo) {
    return <Todo 
          title={todo.title} 
          id={todo.id}
          onFinishTodo={this.props.onFinishTodo} />; 
  }
});
