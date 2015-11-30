// Define WebComponent
var friendList = Object.create(HTMLElement.prototype, {
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
document.registerElement('friend-list', {prototype: friendList});

// Define React Component
class HelloMessage extends React.Component {
    render() {
        return(<div>
                <h4>React App</h4>
                <p>{'My Name: '+(this.props.name)}</p>
                <friend-list name={this.props.name} />
            </div>)
    }
}

// Mount React Component (which uses WebComponent which uses React)
var container = document.getElementById('container');
ReactDOM.render(<HelloMessage name="Alice" friends="['John','Windstorm','Mike','Melissa']"/>, container);