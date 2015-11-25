"use strict";

var React       = require('react');
var d3          = require('d3');
var ReactDOM    = require('react-dom');

var Tooltip = require('./Tooltip');

var BarChart = React.createClass({
    getDefaultProps: function() {
        return {
            data: null,
            height: 500,
            width: null,
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
    componentDidMount: function() {
        console.log('Component Did Mount');
    },
    componentDidUpdate: function() {
        console.log('Component Did Update');
        this._init();
    },
    _calculateSize: function() {
        console.log('Calculating size');
        var props = this.props,
            width = props.width,
            height = props.height,
            svg = ReactDOM.findDOMNode(this.refs.svg);
        // If width is not defined use the complete width of DOMNode()
        if(width === null) {
            width = ReactDOM.findDOMNode(this).offsetWidth;
        }

        this._width = width;
        this._height = props.height - props.margin.top - props.margin.bottom;

        d3.select(svg)
        .attr('width', this._width)
        .attr('height', height);
    },
    _init: function() {
        console.log('Initializing chart');
        this._calculateSize();
    },
    _update: function() {
        console.log('Updating chart');
    },
    _resize: function() {
        console.log('Resizing chart');
    },
    render: function() {
        var data = this.props.data;
        if(data === null) {
            return (
                <div className='diagrama-loader'>
                </div>
            );
        }
        // if(loaded || data.size === 0) {
        //     return (
        //         <div className='diagrama-empty'>
        //         </div>
        //     );
        // }
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
