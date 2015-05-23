var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {number: this.props.number}
    },
    handleClick: function(){
        this.setState({number: this.state.number + 1});
        //console.log(this.props);
    },
    render: function(){
        var num = this.state.number;
       return <button className="btn btn-primary" onClick={this.handleClick} type="button">
          {this.props.title} <span className="badge">{num}</span>
        </button>
    }
});