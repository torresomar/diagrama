var React       = require('react');

var TestWrapper = React.createClass({
    getDefaultProps: function() {
        return {
            className: 'default-className',
            uid: 'default-uid',
            chartClassName: 'chart-className',
            chartUID: 'chart-uid'
        };
    },
    getInitialState: function() {
        return {
            data: []
        };
    },
    render: function() {
        var text = this.state.data.join(',');
        return (
            <div className={this.props.className} id={this.props.uid}>
                <svg className={this.props.chartClassName} chartUID={this.props.chartUID}>
                    <text className='text-is-awesome'>
                        {text}
                    </text>
                </svg>
            </div>
        );
    }
});

module.exports = TestWrapper;
