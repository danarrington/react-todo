var TodoList = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(this.renderTodo)}
      </ul>
    );
  },

  renderTodo: function(todo) {
    return <Todo 
          title={todo.title} 
          id={todo.id}
          onFinishTodo={this.props.onFinishTodo} />; 
  }
});
