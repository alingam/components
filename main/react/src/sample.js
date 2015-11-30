// Define WebComponent
var displayName = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function() {
            var mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);

            var name = this.getAttribute('name');
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
            ReactDOM.render(<p>Search on google: <a href={url}>{name}</a></p>, mountPoint);
        }
    }
});
document.registerElement('display-name', {prototype: displayName});

var friendsList= Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function() {
            var friends=['John','Windstorm','Mike','Melissa'];
            console.log(friends.length);
            var mountPoint = document.createElement('div');
            this.createShadowRoot().appendChild(mountPoint);
            var friendsDisplay=friends.map(function(friend,index){
                return(
                    <li key={index}>{friend}</li>
                )

            });
            ReactDOM.render(<ul>{friendsDisplay}</ul>, mountPoint);

        }
    }
});
document.registerElement('friends-list', {prototype: friendsList});

// Define React Component
class HelloMessage extends React.Component {
    render() {
        return(<div>
                <h4>React App</h4>
                <p>{'My Name: '+(this.props.name)}</p>
                <display-name name={this.props.name} />
                <friends-list/>
            </div>)
    }
}


// Mount React Component (which uses WebComponent which uses React)
var container = document.getElementById('container');
ReactDOM.render(<HelloMessage name="Alice"/>, container);