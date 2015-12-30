var NewTodo = React.createClass({

  handleClick() {
    alert('click');
  },

  render() {
    return (
      <a href="#" onClick={this.props.container.toggleDisplay}>+ New Todo</a>
    );
  }
  
});
