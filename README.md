# Northcoders News

Northcoders News is a news feed app in the style of Reddit, twitter etc. This repo contains the front-end of the app which has been made using React. 

[Click this link to view my live version of Northcoders News](https://tommy-s-nc-news.netlify.com/)

It builds on the back-end API that I created previously. This API is hosted on Heroku and was set up using Express.js and a mongoDB database.

[Back-end live link](https://nc-news-tommy.herokuapp.com/api)  
[Back-end repo](https://github.com/tommyrawle/BE2-northcoders-news)  

## User Stories

* Users can login with just their username
* Users can logout
* Users can view the homepage that contains snippets of all articles sorted by most recent first
* Users can post a new article
* Users can click on an article snippet on the homepage to view the full article
* Users can view all comments made on an article
* Users can post a comment on an article
* Users can delete a comment they have made on an article
* Users can 'like' an article or comment
* Users can see how many articles and comments they have made on their profile page
* Users can see a history of the articles and comments they have made on their profile page and navigate to them
* Users can view the profile page of others and see their article and comment count and history
* Users will receive error messages in the following circumstances:
    * They have entered a non-existent username when logging in 
    * They have entered a non-existent username when navigating to user profile page
    * They have entered a non-existent or invalid article id
    * They have entered a non-existent or invalid topic slug
    * They have not entered all required fields when posting an article
    * They have not entered all required fields when posting a comment

## Getting Started

### Installing

1. Fork this repository to your own GitHub account
2. Clone it to your local machine and `cd` into it

```
$ git clone <your fork's url>
$ cd NC-News
```

3. Install all package dependencies
```
$ npm install
```
The dependencies that will install are:
* @reach/router: ^1.2.1
* axios: ^0.18.0
* react: ^16.6.0
* react-bootstrap: ^0.32.4
* react-dom: ^16.6.0
* react-scripts: 2.0.5

### Development

Once everything is installed, you can run the app locally 

```
$ npm start
```

This will start up the development server and it will open a new browser tab for you with the app running on localhost:3000

As there is currently no way to register a user or see a list of available users, there is a working username and password hard-coded into the login fields for your convenience. All you need to do to get started viewing the app is press 'Login'.

### Routes

The following URL paths are available straight away:

```
PATH /
# Homepage that displays previews of all the available articles (the first 60 words of each article)
```

```
PATH topics/:topic_slug
# Returns all the articles for a certain topic
# e.g: `topics/football`
```

```
PATH article/:article_id
# Gets an individual article, displays it and it's comments
# e.g: `/article/5be879dd2f038d23e73d0806`
```

```
PATH users/:username
# Displays a user's profile page containing their comment and article history
# e.g: `users/jessjelly`
```

## Deployment

My live Northcoders News app has been deployed using [Netlify](https://www.netlify.com/). 

I recommend using this service too for easy, free deployment.

[Follow this tutorial to find out how](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)

## Authors

Thomasin Rawle 

## Acknowledgements

All the tutors at Northcoders for all the great feedback!
