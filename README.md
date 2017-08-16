# Conding Convention
## React.Component
```
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                MyComponent
            </div>
        )
    }
}
````

## Not arrow functions, if you don't have state or refs.
```
// bad
class MyComponent extends React.Component {
    render() {
        return (
            <div>
                MyComponent
            </div>
        )

    }
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
    <div>
        {hello}
    </div>
)

// good
function Listing({ hello }) {
    return (
        <div>
        {hello}
        </div>
    )
}
```

