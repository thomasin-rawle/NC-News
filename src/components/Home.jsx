import React, { Component } from 'react';
import Articles from './Articles'

class Home extends Component {

    state = {
        articles: [{"_id":"5bc236cf1b920d6065a80c8a","votes":0,"title":"Running a Node App","created_by":{"_id":"5bc236ce1b920d6065a80c89","username":"jessjelly","name":"Jess Jelly","avatar_url":"https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg","__v":0},"body":"This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.","created_at":"2016-08-18T12:07:52.389Z","belongs_to":"coding","__v":0,"comment_count":8}]
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Articles articles={this.state.articles} />
            </div>
        );
    }
}

export default Home;