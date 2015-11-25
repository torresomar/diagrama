var React = require('react');

var Tooltip = React.createClass({
    getDefaultProps: function() {
        return {
            className: 'diagrama-tooltip',
            style: {
                'position': 'absolute',
                'background': '#fff',
                'padding': '5px',
                'height': 'auto',
                'border': '1px solid #D2D2D2',
                'display': 'none',
                'width': 'auto',
                'minWidth': '100px'
            }
        };
    },
    render: function() {
        return (
            <div className={this.props.className} style={this.props.style}>
            </div>
        );
    }
});

module.exports = Tooltip;
