var TodosContainer = React.createClass({
  componentWillMount() {
    this.fetchTodos();
    //setInterval(this.fetchTodos, 1000);
  },

  fetchTodos() {
    $.getJSON(
      this.props.todosPath,
      (data) => this.setState({todos: data})
    );
  },

  getInitialState() {
    return { todos: []};
  },

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
        <NewTodoContainer todosPath={this.props.todosPath} todosContainer={this} />
      </div>
    );
  }

});
