var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [
    {
        title: 'Like',
        number: 35,
        header: 'Lion',
        description: 'Lion Lion is a fantastic',
        imageUrl: 'http://logofaves.com/wp-content/uploads/2014/01/Raww_r.jpg'
    },
    {
        title: 'Like',
        number: 6,
        header: 'Banana',
        description: 'Banana is a fantastic',
        imageUrl: 'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg?b73a5d'
    }]
    };
    
// render this class
var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.myImg'));