var Todo = React.createClass({
  render() {
    return (
      <li>
        <input type="checkbox" 
          data-id={this.props.id} 
          onClick={this.props.onFinishTodo}
        />
        {this.props.title}
      </li>
    );
  }
});
