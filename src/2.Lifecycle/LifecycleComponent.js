import React from 'react';
import { Prop, State } from './data';

class LifecycleComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            state: 'State: Before'
        };
    }

    /* Mount */
    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        const { updated } = this.props;
        return (
            <div>
                Lifecycle Component {updated}
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            state: 'State: After'
        });
    }

    /* Remove */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    /* Update */
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        if (this.props !== nextProps) {
            const p = new Prop(this.props, nextProps);
            console.table(p);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextProps.val !== this.props;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        if (nextProps !== this.props) {
            const p = new Prop(this.props, nextProps);
            console.table(p);
        }
        if (nextState !== this.state) {
            const s = new State(this.state, nextState);
            console.table(s);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        if (prevProps !== this.props) {
            const p = new Prop(prevProps, this.props);
            console.table(p);
        }
        if (prevState !== this.state) {
            const s = new State(prevState, this.state);
            console.table(s);
        }       
    }
}
export default LifecycleComponent;

/**
 * Lifecycle of four cases
 * 1. Creating a Component - Mount
 * constructor -> componentWillMount -> render -> componentDidMount
 * 2. Removing a Component - Mount
 * only invoking a componentWillUnmount
 * 3. When prop is updated - Props
 * componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
 * 4. When state is udpated - State
 * shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
 * 
 * Detail of cycles
 * - constructor(props): 
 * It is invoked in creating a component first. In this cycle, state can be set.
 * - componentWillMount():
 * It is invoked before DOM.
 * - render(): 
 * Render a component.
 * - componentDidMount():               /// NOTE
 * It hooks runs after the component output has been rendered to the DOM.
 * Do interlock with other framework, setTimeout, setInterval, and AJAX in this cycle.
 * - componentWillReceiveProps(nextProps):
 * It is invoked when props is updated.
 * ** NOTE: this.setState() is nothing to do **
 * - shouldComponentUpdate(nextProps, nextState):           /// NOTE
 * You can set whether rerender, or not when prop or state are updated.
 * Example: return nextProps.id !== this.props.id;
 * - componentWillUpdate(nextProps, nextState)
 * It is invoked before update.
 * Note: Do not use this.setState(), and it can be infinite loop.
 * - componentDidUpdate(prevProps, prevState)
 * It is invoked after rerender
 * - componentWillUnmount():
 * It is invoked after fade out of a component on DOM.
 * 
 * Referenced: 
 * Converting a Function to a Class: https://facebook.github.io/react/docs/state-and-lifecycle.html#converting-a-function-to-a-class
 * -> Class is rather than a function. 
 *    This lets us use additional features such as local state and lifecycle hooks.
 * The Component Lifecycle: https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle
 */
