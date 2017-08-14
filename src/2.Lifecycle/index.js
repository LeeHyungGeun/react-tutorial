import React from 'react';
import ReactDOM from 'react-dom';

import LifecycleComponent from './LifecycleComponent';

/** Props: This is for componentWillReceiveProps for LifecycleComponent.js */
setTimeout(() => {
    ReactDOM.render(<LifecycleComponent prop={'Prop: After'} />, document.getElementById('app'));
}, 3000);

/** Unmount: This is for componentWillUnmount for LifecyleComponent.js */
setTimeout(() => {
    ReactDOM.render(<div></div>, document.getElementById('app'));
}, 6000);

ReactDOM.render(<LifecycleComponent prop={'Prop: Before'} />, document.getElementById('app'));