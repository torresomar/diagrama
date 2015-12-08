var React           = require('react');
var assert          = require('assert');
var TestWrapper     = require('./TestWrapper');
var ReactTestUtils  = require('react-addons-test-utils');
var jsdom           = require('mocha-jsdom');
var d3              = require('d3');

var barData         = require('./helpers/dataGenerator').bar;

var setupTest = function() {
    // Render a wrapper
    var testWrapper = ReactTestUtils.renderIntoDocument(
        <TestWrapper chartClassName={'test-chart'}/>
    );
    // Check empty text
    var svg = ReactTestUtils.findRenderedDOMComponentWithClass(
        testWrapper, 'test-chart');

    return {
        component: testWrapper,
        svg: svg
    }
}

describe('- BarChart component', function(){
    jsdom();

    it('changes inner elements on state change', function() {
        var test = setupTest();
        var component = test.component, svg = test.svg;
        var textContent = d3.select(svg).select('.text-is-awesome');
        assert.equal(textContent.text(), '');
        console.log(textContent.text());
        component.setState({data: [5,6,7,8,9]});
        textContent = d3.select(svg).select('.text-is-awesome');
        assert.equal(textContent.text(), '5,6,7,8,9');
        console.log(textContent.text());
    });

    it('should have a Y axis', function() {
        var test = setupTest();
        var component = test.component, svg = test.svg;
        var data = barData(10);
        console.log(data);
        component.setState({
            data: data
        });
        var isYAxisMissing = d3.select('.y-axis').empty();
        console.log(isYAxisMissing);
        assert.equal(isYAxisMissing, false);
    });
    it('should have a grid in Y with equal Y axis ticks');
    it('should have the same number of bars as data size');
    it('should have a grid in X with equal Y axis ticks');
    it('should have a grid in X with equal Y axis ticks');
    it('should display tooltip on mouseover rect');
    it('should remove tooltip on mouseout rect');
    it('should resize');
});
