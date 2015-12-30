var Todo = React.createClass({
  render() {
    return (
      <li className="todo">
        <span className="todo-title">
          {this.props.title}
        </span>
        <Checkbox id={this.props.id} onFinishTodo={this.props.onFinishTodo} />
      </li>
    );
  }
});
