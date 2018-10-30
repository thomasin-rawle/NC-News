import axios from 'axios';

const BASE_URL = 'https://nc-news-tommy.herokuapp.com/api';
export const getArticlesByTopic = (topicSlug) => {
    const url = `${BASE_URL}/topics/${topicSlug}/articles`
    return (
        axios.get(url)
        .then(({data}) => data.articles)
    )
}