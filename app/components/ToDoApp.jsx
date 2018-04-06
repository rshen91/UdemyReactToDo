var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1, 
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the apartment'
                },
                {
                    id: 3,
                    text: 'Practing coding in React'
                },
                {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        }
    },
    handleAddToDo: function(text) {
        alert('new todo: ' + text);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={todos}/>
                <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;