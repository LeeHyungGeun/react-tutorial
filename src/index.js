import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorldComponent extends React.Component {
    render() {
        return <div>Hello World</div>;
    }
}
ReactDOM.render(<HelloWorldComponent />, document.getElementsByTagName('body')[0]);