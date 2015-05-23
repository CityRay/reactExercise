var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
    render: function(){
        return <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={this.props.imageUrl} alt="img"></img>
              <div className="caption">
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
                <Badge title={this.props.title} onClick={this.onClick} number={this.props.number} />
                <p></p>
                <p>2015</p>
              </div>
            </div>
          </div>
    }
});