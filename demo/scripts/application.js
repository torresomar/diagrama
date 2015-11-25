var Diagrama    = require('./../../lib/index');
var React       = require('react');
var Block       = require('./Block');
var render      = require('react-dom').render;

var BarChart    = Diagrama.Bar;


var DiagramaDemo = React.createClass({
    render: function() {
        console.log(render);
        return (
            <div>
                <BarChart/>
            </div>
        );
    }
});

render(<DiagramaDemo/>, document.getElementById('diagrama-demo'));
