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
: It is a React Component, an it can be used of Lifecycle and any React APIs.

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
- [[ReactJS]강좌:함수형 컴포넌트(Functional Component)](https://velopert.com/2994)