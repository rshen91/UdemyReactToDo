var expect = require('expect');

var ToDoAPI = require('ToDoAPI');

describe('ToDoAPI', () => {
    it('should exist', () => {
        expect(ToDoAPI).toExist();
    });

    describe('setTodos', () => {
        beforeEach(() => {
            localStorage.removeItem('todos');
        });
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            ToDoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            // expect actual todos to be equal to todos from this test 
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'a'};

            ToDoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = ToDoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localStorage',() => {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            // need to manipulate localStorage
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = ToDoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterToDos', () => {
        var todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        },
        {
            id: 2,
            text: 'Other text here',
            completed: false
        },
        {
            id: 3,
            text: 'Some text here',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
            expect(filteredToDos.length).toBe(3);
        });

        it('should return 1 item if showCompleted is false', () => {
            var filteredToDos = ToDoAPI.filterToDos(todos, false, '');
            expect(filteredToDos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
            expect(filteredToDos[0].completed).toBe(false);
        });

        it('should sort by searchText', () => {
            var filteredToDos = ToDoAPI.filterToDos(todos, true, 'some');
            expect(filteredToDos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            var filteredToDos = ToDoAPI.filterToDos(todos, true, '');
            expect(filteredToDos.length).toBe(3);
        });
    }); 
});