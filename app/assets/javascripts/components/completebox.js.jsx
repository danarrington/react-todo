var CompleteBox = React.createClass({

  render: function() {
    return (
      <span 
        onClick={this.props.onFinishTodo} 
        data-id={this.props.id}
        className="todo-complete-box">
        &#x2713; 
      </span>
    );
  }
});
