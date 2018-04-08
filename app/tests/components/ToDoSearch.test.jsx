var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
    it('should exist', () => {
        expect(ToDoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        // The checkbox should not have been checked
        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

        // check the checkbox
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        // The checkbox should have been checked
        expect(spy).toHaveBeenCalledWith(true, '');
    });
});