var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDo = require('ToDo');

describe('ToDo', () => {
    it('should exist', () => {
        expect(ToDo).toExist();
    });

    it('should call onToggle prop with id onClick', () => {
        var todoData = {
            id: 199,
            text: 'Write test features',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy}/>);

        // simulate the click event
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(199);
    });
});