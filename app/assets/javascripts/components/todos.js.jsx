var Todos = React.createClass({
  render() {
    var createItem = (todo) => <Todo title={todo.title} />; 
    //var createItem = (todo) => <div>{todo.title}</div>; 
    
    return <ul>{this.props.todos.map(createItem)}</ul>;
  }
});
