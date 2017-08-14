# Component

## 1. Functional Component and React Component
### Functional Component
: It is a pure function, and it is transpiled to React Element by React.createElement.

Advantages:
- Easy to create a component
- Good performance in the first mount rather than React Component over 7 times.
(Refrenced by https://github.com/missive/functional-components-benchmark)

Disadvatanges:
- It cannot be used of Lifecycle API: constructor, shouldComponentUpdate, etc. (It can be used of props)

Usage:
```
const FunctionalComponent () => (
    <div>
        Functional Component
    </div>
)
```

### React Component
: It is a React Component, and it can be used of Lifecycle and any React APIs.

Usage:
```
class ReactComponent extends React.Component {
    render() {
        return (
            <div>
                React Component
            </div>
        )
    }
}
```

Referenced:
- [functional-component-benchmark](https://github.com/missive/functional-components-benchmark)
- [Converting a Function to a Class](https://facebook.github.io/react/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
- [[ReactJS]강좌:함수형 컴포넌트(Functional Component)](https://velopert.com/2994)


## 2. Lifecycle
### kinds of Lifecycle API
__Mounting__
- [constructor()](#constructor)
- [componentWillMount()](#componentwillmount)
- [render()](#render)
- [componentDidMount()](#componentdidmount)

__Updating__
- [componentWillReceiveProps()](#componentwillreceivepropsnextprops)
- [shouldComponentUpdate()](#shouldcomponentupdatenextprops-nextstate)
- [componentWillUpdate()](#componentwillupdatenextprops-nextstate)
- [render()](#render)
- [componentDidUpdate()](#componentdidupdate)

__Unmounting__
- [componentWillUnmount()](#componentwillunmount)

### types of Lifecycle API
__Creating a Component - Mount__

constructor -> componentWillMount -> render -> componentDidMount

__Removing a Component - Mount__

componentWillUnmount _only_

__props updated - Props__

componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

__state updated - State__

shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

### Details of Lifecycle API
#### constructor()
It is invoked in creating a component.

#### componentWillMount()
It is invoked before DOM.

#### render()
Render a component.

#### componentDidMount()
It hooks runs after the component output has been rendered to the DOM.

#### componentWillReceiveProps(nextProps)
It is invoked when props is updated.
NOTE: this.setState() is nothing to do in the cycle.

#### shouldComponentUpdate(nextProps, nextState)
You can set whether rerender a component, or not when prop or state are updated.
Example
```
return nextProps.id !== this.props.id;
```
#### componentWillUpdate(nextProps, nextState)
It is invoked before update.
NOTE: Do __NOT__ use this.setState() in this cycle, it will be fall in infinite loop.

#### componentDidUpdate(prevProps, prevState)
It is invoked after render.

#### componentWillUnmount()
It is invoked after fade out of a component on DOM.



## Refenreced
- [The Component Lifecycle](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)