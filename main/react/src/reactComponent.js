/** @jsx React.DOM */

var Example = React.createClass({
    getInitialState: function () {
        this.who="Initial";
        this.desc="Initial setup of the React.js"
        return null;
    },
    componentDidMount:function() {
        this.who='React.js';
        this.desc='Using React';
    },
    render: function () {
        return (
            <div>
                <p>Hello <strong>{this.who}</strong> :)</p>
                <span>{this.desc}</span>
            </div>
        );
    }
});

React.renderComponent(
<Example />,
    document.getElementById('rendercontent')
);
