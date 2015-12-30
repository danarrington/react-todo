var Checkbox = React.createClass({

  render: function() {
    return (
      <span 
        onClick={this.props.onFinishTodo} 
        data-id={this.props.id}
        className="complete-box">
        &#x2713; 
      </span>
    );
  }
});
