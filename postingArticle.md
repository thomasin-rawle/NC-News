* make an rcc (PostArticle) and add it into home + topics pages
add postArticle func as a prop
```
form > label > input * 2, button
input id='title'
input id='body'
```

```js
state = {
    body: '',
    title:''
}

handleChange = (e) => {
    const {id, value} = e.target;
    this.setState({
        [id]: value
    })
}

handleSubmit = e => {
    e.preventDefault();
    this.props.postArticle(body, title)
    //lives in articles component
    api.postArticle('<topicSlug>', {this.state.body, this.state.title})
    .then(postedArticle => {
        this.setState({
            articles= [postedArticle, ...this.state.articles]
        })
    })
}
```

```js

const postArticle = (topic, articleToPost) => {
    axios.post(url, )
}

```

// In app add state for user

```js
    state = {
        user:{}
    }

    login = () => {
        api.login(username) // get request for user info
        this.setState ({
            user
        })
    }
```

// Login component (add it to app.js and pass user and login func as props)


* Make rcc Login component
* Give it a login form - username input, password(fake/anything), button
* handle submit func - prevent default
* handle change func - setState - username

```js
state = {
    username: ''
}
    if (this.props.user.username) return this.props.children
    return(
        //form stuff
    )
```
