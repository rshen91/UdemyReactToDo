var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            
        }
        return $.isArray(todos) ? todos : [];
    //     if ($.isArray(todos)) {
    //         return todos;
    //     } else {
    //         return [];
    //     }
    // }
    }, 
    filterToDos: function(todos, showCompleted, searchText) {
        var filteredToDos = todos;

        // filter by showCompleted 
        filteredToDos = filteredToDos.filter((todo)=> {
            return !todo.completed || showCompleted;
        });

        // filter by searchText 

        // sort toDos with non-completed first

        return filteredToDos;
    }
};