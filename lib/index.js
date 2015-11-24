var React       = require('react');

var test = function() {
    console.log('Module');
};

var TestComponent = React.createClass({
    getDefaultProps: function() {
        return {
            className: 'default-className',
            uid: 'default-uid'
        };
    },
    getInitialState: function() {
        return {
            data: [1,2,3,4,5]
        };
    },
    _mutateState: function() {
        this.setState({
            data: [5,6,7,8,9]
        });
    },
    render: function() {
        return (
            <div className={this.props.className} id={this.props.uid}>
            </div>
        );
    }
});

module.exports = {
    test: test,
    comp: TestComponent
};
