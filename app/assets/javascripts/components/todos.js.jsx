var Todos = React.createClass({
  render() {
    var createItem = (todo) => <Todo 
      title={todo.title} 
      id={todo.id}
      onFinishTodo={this.props.onFinishTodo}
    />; 
    //var createItem = (todo) => <div>{todo.title}</div>; 
    
    return (
      <ul className="todo-list">
        {this.props.todos.map(createItem)}
      </ul>
    );
  }
});
