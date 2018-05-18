var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');


var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var ToDoAPI = require('ToDoAPI');

var ToDoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: ToDoAPI.getTodos()
          };
    },
    componentDidUpdate: function () {
        ToDoAPI.setTodos(this.state.todos);
    },
    handleAddToDo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        }); 
    },
    handleToggle: function(id) {
        var updatedToDos = this.state.todos.map((todo) => {
            if (todo.id === id){
                // set todo to the opposite boolean value that it was
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
        });
        this.setState({todos: updatedToDos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        var filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, searchText);
        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={filteredToDos} onToggle={this.handleToggle}/>
                <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;