make stateless Notfound component and add it into router on app.js
add word 'default' to it
put some error message inside

^^ handles going to a path the doesn't exist

```js
<NotFound default />
<NotFound path='/error'/>

```

to handle other errors

* import {navigate} from @reachrouter

in catch block, call navigate

```js
.catch(err => {
    navigate('/error', {replace: true, state: {
        code: err.code
    }});
});

```

*NotFound component 
```js
const NotFound = (props) => {
        
        return (
            <div>
                <h1>{props.location.state.code}Error</h1>
            </div>
        );
};
```
