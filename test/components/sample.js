require('./../setup.js');
var React       = require('react/addons'),
    assert      = require('assert'),
    TestUtils   = React.addons.TestUtils,
    d3          = require('d3');

describe('- BarChart component', function(){
    it('<BarChart/> should have a grid in Y');
    it('<BarChart/> should have a grid in Y with equal Y axis ticks');
    it('<BarChart/> should display tooltip on mouseover rect');
    it('<BarChart/> should remove tooltip on mouseout rect');
    it('<BarChart/> should resize');
});
