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
});