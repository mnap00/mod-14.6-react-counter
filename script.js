var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Counter ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
