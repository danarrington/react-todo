var TodosContainer = React.createClass({
  componentWillMount() {
    this.fetchTodos();
  },

  fetchTodos() {
    $.getJSON(
      this.props.todosPath,
      (data) => this.setState({todos: data})
    );
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
    return (
      <div>
        <Header count={this.state.todos.length} />
        <Todos todos={this.state.todos} onFinishTodo={this.finishTodo} />
        <NewTodoContainer todosPath={this.props.todosPath} todosContainer={this} />
      </div>
    );
  }

});
