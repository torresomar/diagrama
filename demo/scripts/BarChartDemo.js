var React       = require('react');
var BarChart    = require('./../../lib/index').Bar;

var BarChartDemo = React.createClass({
    getInitialState: function() {
        return {
            data: null,
            loading: false
        };
    },
    _init: function() {
        var data = this._generateRandomData(50);
        this.setState({
            data: data
        });
    },
    _update: function() {

    },
    _reset: function() {

    },
    _generateRandomData: function(n) {
        var data = [], length = n;
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        for(var i = 0; i < length; i++) {
            data.push({
                value: getRandomInt(1, 200),
                name: 'Bar ' + i
            });
        }
        return data;
    },
    render: function() {
        return (
            <div className='col-sm-12'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h3> Bar Example </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-10'>
                        <BarChart
                            data={this.state.data}
                            domainFn={'name'} />
                    </div>
                    <div className='col-sm-2'>
                        <button onClick={this._init} type='button' className='btn btn-default'>Initialize</button>
                        <br/>
                        <button type='button' className='btn btn-default'>Update</button>
                        <br/>
                        <button type='button' className='btn btn-default'>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = BarChartDemo;
