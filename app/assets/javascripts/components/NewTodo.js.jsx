var NewTodo = React.createClass({

  handleClick: function() {
    alert('click');
  },

  render: function() {
    return (
      <a href="#" onClick={this.props.container.toggleDisplay}>+ New Todo</a>
    );
  }
  
});
