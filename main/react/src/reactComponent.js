/** @jsx React.DOM */

var Example = React.createClass({
    getInitialState: function () {
        return {who: 'Initial',desc: 'Initial setup of the React.js',text:'',name:'',friends:['John','Windstorm','Mike','Melissa']};
    },
    componentDidMount:function() {
        this.setState({name:'Alice'})
    },
    changeText: function (event) {
        var text= event.target.value;
        this.setState({text:text});
    },
    render: function () {
        return (
            <div>
                <h4>React App</h4>
                <input type="text" id="input-text" onKeyUp={this.changeText}/>
                <p>{"Text in the Input: "+this.state.text}</p>
                <p>{'My Name: '+(this.state.name)}</p>
                <FriendsList friends={this.state.friends}></FriendsList>
            </div>
        );
    }
});

var FriendsList = React.createClass({
    render:function(){
        var eachFriend=this.props.friends.map(function(friend,index){
            return(
                <li id={index}>{friend}</li>
            )
        });
        return(
            <div>
                <p>Friends: </p>
                <ul>
                    {eachFriend}
                </ul>
            </div>
        )
    }


});

React.renderComponent(
<Example />,
    document.getElementById('example')
);
