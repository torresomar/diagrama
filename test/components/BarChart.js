var React           = require('react');
var assert          = require('assert');
var TestWrapper     = require('./TestWrapper');
var ReactTestUtils  = require('react-addons-test-utils');
var jsdom           = require('mocha-jsdom');
var d3              = require('d3');

describe('- BarChart component', function(){
    jsdom();

    it('changes inner elements on state change', function() {
        var svgClass = 'test';
        // Render a wrapper
        var testWrapper = ReactTestUtils.renderIntoDocument(
            <TestWrapper chartClassName={'test-chart'}/>
        );
        // Check empty text
        var svg = ReactTestUtils.findRenderedDOMComponentWithClass(
        testWrapper, 'test-chart');
        var textContent = d3.select(svg).select('.text-is-awesome');
        assert.equal(textContent.text(), '');
        testWrapper.setState({data: [5,6,7,8,9]});
        // Check changed text
        textContent = d3.select(svg).select('.text-is-awesome');
        assert.equal(textContent.text(), '5,6,7,8,9');
    });

    it('should have a grid in Y');
    it('should have a grid in Y with equal Y axis ticks');
    it('should have the same number of bars as data size');
    it('should have a grid in X with equal Y axis ticks');
    it('should have a grid in X with equal Y axis ticks');
    it('should display tooltip on mouseover rect');
    it('should remove tooltip on mouseout rect');
    it('should resize');
});
