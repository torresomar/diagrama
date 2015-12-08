"use strict";

var React       = require('react');
var d3          = require('d3');
var ReactDOM    = require('react-dom');
var _           = require('lodash');

var Tooltip = require('./Tooltip');

var BarChart = React.createClass({
    getDefaultProps: function() {
        return {
            data: null,
            height: 500,
            width: null,
            margin: {
                top: 20,
                right: 0,
                bottom: 50,
                left: 50
            },
            className: 'diagrama-container',
            id: '',
            svgClassName: 'diagrama-svg',
            svgId: '',
            tooltipClassName: '',
            tooltipId: '',
            barPadding: 5,
            domainFn: 'x',
            valueFn: 'value',
            xAxisTitle: 'Bars generated randomly',
            yAxisTitle: 'Value of bars'
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
        .attr('height', height)
        .append('g')
        .attr('class', 'diagrama-grouping')
        .attr("transform", "translate(" + this.props.margin.left + "," + this.props.margin.top + ")");
    },
    _calculateScales: function() {
        var x = this._calculateXScale();
        var y = this._calculateYScale();
        this._scales = {
            x: x,
            y: y
        };
    },
    _calculateXScale: function() {
        var data = this.props.data;
        var x = d3.scale.ordinal()
        .domain(_.map(data, this.props.domainFn))
        .rangeRoundBands([0, this._width - this.props.margin.left - this.props.margin.right], this.props.barPadding);

        return x;
    },
    _calculateYScale: function() {
        var data = this.props.data;
        var valueFn = this.props.valueFn;
        var min = d3.min(data, function(d){ return d[valueFn]; });
        var max = d3.max(data, function(d){ return d[valueFn]; });
        var y = d3.scale.linear().range([this._height, 0]);
        y.domain([min, max]);

        return y;
    },
    _renderXAxis: function() {
        var svg = d3.select(ReactDOM.findDOMNode(this.refs.svg));
        var x = this._scales.x;

        var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');

        svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', 'translate(' + this.props.margin.left + ',' + (this.props.height - this.props.margin.bottom) + ')')
        .call(xAxis)
        .selectAll('g > text')
        .style('text-anchor', 'start')
        .attr('dx', '0.1em')
        .attr('transform', 'rotate(90)')
        .style('font-size', '10px');

        svg.select('.x-axis > path')
        .attr('fill', 'none')
        .attr('stroke', '#222');
    },
    _renderXLegend: function() {
        var svg = d3.select(ReactDOM.findDOMNode(this.refs.svg));
        svg.append('text')
        .attr('class', 'diagrama-x-label')
        .attr('text-anchor', 'middle')
        .attr('x', (this._width + this.props.margin.left + this.props.margin.right) / 2)
        .attr('y', this.props.height - 5)
        .style('font-size', '12px')
        .text(this.props.xAxisTitle);
    },
    _renderYAxis: function() {
        var svg = d3.select(ReactDOM.findDOMNode(this.refs.svg));
        var y = this._scales.y;

        var yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');

        svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', 'translate(' + this.props.margin.left + ',' + this.props.margin.top + ')')
        .call(yAxis);

        svg.select('.y-axis > path')
        .attr('fill', 'none')
        .attr('stroke', '#222');
    },
    _renderYLegend: function() {
        var svg = d3.select(ReactDOM.findDOMNode(this.refs.svg));

        svg.append('text')
        .attr('class', 'diagrama-y-label')
        .attr("text-anchor", "middle")
        .attr("x", -(this._height / 2))
        .attr("dy", ".9em")
        .attr("transform", "rotate(-90)")
        .style('font-size', '12px')
        .attr('shape-rendering', 'crispEdges')
        .text(this.props.yAxisTitle);
    },
    _init: function() {
        console.log('Initializing chart');
        this._calculateSize();
        this._calculateScales();
        this._renderXAxis();
        this._renderXLegend();
        this._renderYAxis();
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
