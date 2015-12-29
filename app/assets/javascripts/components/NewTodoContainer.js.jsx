var NewTodoContainer = React.createClass({

  toggleDisplay() {
    alert('hiding');
  },

  render() {
    return <NewTodo container={this} />
  }

  

});
