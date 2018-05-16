var React = require('react');

var AddToDo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddToDo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?" required/>
                    <button className="button expanded">Add ToDo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddToDo;