var React = require('react');

var App = React.createClass({
  getInitialState: function () {
    console.log("> getInitialState()");
    return {user: 'AndyYou'};
  },
  componentWillMount: function () {
    console.log("> componentWillMount()");
  },
  componentDidMount: function (node) {
    console.log("> componentDidMount(node)");
    //console.log(node.className);
    //console.log(node.value);
    //console.log(node.id);
    console.log(this.getDOMNode().className);
    console.log(this.getDOMNode().value);
    console.log(this.getDOMNode().id);
  },
  componentWillReceiveProps: function (nextProps) {
    console.log("> componentWillReceiveProps(nextProps)");
    console.log(nextProps);
  },
  handleChange: function (e) {
    console.log(e.target.value);
    this.setState({user: e.target.value});
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log("> shouldComponentUpdate(nextProps, nextState)");
    console.log("nextProps: ");
    console.log(nextProps);
    console.log("nextState: ");
    console.log(nextState);
    return true; /* need return true/false */
  },
  componentWillUpdate: function (nextProps, nextState) {
    console.log("> componentWillUpdate(nextProps, nextState)");
  },
  componentWillUnmount: function () {
    console.log("> componentWillUnmount()");
  },
  render: function () {
    return (
      <input type='text' id='foobar' value={this.state.user} className='nav' onChange={this.handleChange} />
    );
  }
});

    
// render this class
var element = React.createElement(App);
React.render(element, document.getElementById('main'));