var React       = require('react');
var render      = require('react-dom').render;

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
