var Diagrama    = require('./../../lib/index');
var React       = require('react');
var Block       = require('./Block');

var DiagramaDemo = React.createClass({
    render: function() {
        return (
            <Block/>
        );
    }
});

React.render(<DiagramaDemo/>, document.getElementById('diagrama-demo'));
