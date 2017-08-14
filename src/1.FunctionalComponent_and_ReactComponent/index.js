import React from 'react';
import ReactDOM from 'react-dom';

import FunctionalComponent from './FunctionalComponent';
import ReactComponent from './ReactComponent';

class MainComponent extends React.Component {
    render() {
        return (
            <FunctionalComponent />
        );
    }
}
ReactDOM.render(<MainComponent />, document.getElementById('app'));