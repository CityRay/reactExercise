var React = require('react');
var Dropdown = require('./dropdown');

var options = {
        title: 'Choose Area',
        items:[
            'Taipei',
            'New Taipei',
            'Taoyuan'
        ]
};
    
// render this class
var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.myImg'));