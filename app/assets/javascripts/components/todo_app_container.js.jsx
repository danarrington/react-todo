var TodoAppContainer = React.createClass({
  componentWillMount: function() {
    this.fetchTodos();
  },

  fetchTodos: function() {
    $.getJSON(
      this.props.todosPath,
      (data) => this.setState({todos: data})
    );
  },

  todosUpdated: function() {
    this.fetchTodos();
  },

  finishTodo: function(e) {
    var id = $(e.target).data('id');
    $.ajax({
              type: 'PUT',
              url:  this.props.todosPath+'/'+id,
              data: {todo:{finished:true}},
              dataType: "text",
              success: this.fetchTodos
        });
  },

  getInitialState: function() {
    return { todos: []};
  },

  render: function() {
    return <TodoApp todos={this.state.todos} onFinishTodo={this.finishTodo}
      onTodosUpdated={this.todosUpdated} />;
  }

});
