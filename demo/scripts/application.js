var React       = require('react');
var render      = require('react-dom').render;
d3 = require('d3');

// Demos
var BarDemo     = require('./BarChartDemo');

var DiagramaDemo = React.createClass({
    render: function() {
        return (
            <div>
                <BarDemo/>
            </div>
        );
    }
});

render(<DiagramaDemo/>, document.getElementById('diagrama-demo'));
