var React = require('react');
var List = require('./list');

module.exports = React.createClass({
    filterList: function(){
        var updateList = this.state.initialItems;
        updateList = updateList.filter(function(item){
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updateList});
    },
    getInitialState: function(){
        return {
            initialItems: [
             "餐廳",
             "飯店",
             "Hotel",
             "球場",
             "Eggs",
             "Fish",
             "娛樂設施",
             "新北市",
             "台北市"             
           ],
           items: []
        }
    },
    componentWillMount: function(){
        this.setState({items: this.state.initialItems});
    },
    render: function(){
        return <div>
            <div>
            <input type="text" placeholder="Search" onChange={this.filterList}/>
            <List items={this.state.items}/>
            </div>
            </div>
    }
});