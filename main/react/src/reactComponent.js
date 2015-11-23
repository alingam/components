/** @jsx React.DOM */

var Example = React.createClass({
    getInitialState: function () {
        return {who: 'Initial',desc: 'Initial setup of the React.js'};
    },
    componentDidMount:function() {
       this.setState({who: 'React.js'}) ;
        this.setState({desc: 'Using react.'})
    },
    render: function () {
        return (
            <div>
                <p>Hello <strong>{this.state.who}</strong> :)</p>
                <span>{this.state.desc}</span>
            </div>
        );
    }
});

React.renderComponent(
<Example />,
    document.getElementById('example')
);
