/**
 * Created by freya on 2017/4/20.
 */
var React = require('react');
class Hello extends React.Component{
    render: function(){
        return <h1>hell {this.props.name}</h1>;

    }
}