var TodoAppContainer = React.createClass({
  componentWillMount() {
    this.fetchTodos();
  },

  fetchTodos() {
    $.getJSON(
      this.props.todosPath,
      (data) => this.setState({todos: data})
    );
  },

  todosUpdated() {
    this.fetchTodos();
  },

  finishTodo(e) {
    var id = $(e.target).data('id');
    $.ajax({
              type: 'PUT',
              url:  this.props.todosPath+'/'+id,
              data: {todo:{finished:true}},
              dataType: "text",
              success: this.fetchTodos
        });
  },

  getInitialState() {
    return { todos: []};
  },

  render() {
    return <TodoApp todos={this.state.todos} onFinishTodo={this.finishTodo}
      onTodosUpdated={this.todosUpdated} />;
  }

});
