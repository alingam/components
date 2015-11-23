/** @jsx React.DOM */

var Example = React.createClass({displayName: 'Example',
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
            React.DOM.div(null, 
                React.DOM.p(null, "Hello ", React.DOM.strong(null, this.who), " :)"), 
                React.DOM.span(null, this.desc)
            )
        );
    }
});

React.renderComponent(
Example(null),
    document.getElementById('rendercontent')
);
