var Counter = React.createClass({
    // INITIALISE
    getDefaultProps: function() {
        console.log('Set initial value in case not saved on server');
    },
    getInitialState: function() {
        console.log('Get from defaults or if saved in browser\'s storage');
        return {
            counter: 0
        }
    },
    componentWillMount: function() {
        console.log('Pass some attribute or mode to rendering. ' +
            'May be based on initial state.');
    },
    componentDidMount: function() {
        console.log('Get from server counter\'s saved state');
    },
    // UPDATE
    componentWillReceiveProps(nextProps) {
        console.log('Set color if counter reached some value');
    },
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Check on server if state reached that value');
        return true;
    },
    componentWillUpdate(nextProps, nextState) {
        console.log('Pass attribute / mode for rendering');
    },
    componentDidUpdate(prevProps, prevState) {
        console.log('Send value to server');
    },
    // REMOVE
    componentWillUnmount() {
        console.log('Reset counter to defaults and remove state from server');
    },
    // BASE METHODS
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('span', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+1'),
            React.createElement('button', {onClick: this.decrement}, '-1')
        );
    },
});

var element = React.createElement('div', {className: 'container'},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);
ReactDOM.render(element, document.getElementById('app'));
