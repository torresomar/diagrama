"use strict";

var React = require('react');

var Tooltip = require('./Tooltip');

var BarChart = React.createClass({
    getDefaultProps: function() {
        return {
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            className: 'diagrama-container',
            id: '',
            svgClassName: 'diagrama-svg',
            svgId: '',
            tooltipClassName: '',
            tooltipId: ''
        };
    },
    getInitialState: function() {
        return {
            data: null,
            loaded: false
        };
    },
    componentDidMount: function() {
        this.setState({
            data: [],
            loaded: true
        });
    },
    render: function() {
        var data = this.state.data;
        var loaded = this.state.loaded;
        if(data === null) {
            return (
                <div className='diagrama-loader'>
                </div>
            );
        }
        if(loaded || data.size === 0) {
            return (
                <div className='diagrama-empty'>
                </div>
            );
        }
        return (
            <div className={this.props.className} id={this.props.id}>
                <svg ref='svg' className={this.props.svgClassName} id={this.props.svgId}>
                </svg>
                <Tooltip ref='tooltip'/>
            </div>
        );
    }
});

module.exports = BarChart;
