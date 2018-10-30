import axios from 'axios';

const BASE_URL = 'https://nc-news-tommy.herokuapp.com/api';

export const getAllArticles = () => {
    const url = `${BASE_URL}/articles`
    return (
        axios.get(url)
        .then(({data}) => data.articles)
    )
}
export const getTopics = () => {
    const url = `${BASE_URL}/topics`
    return (
        axios.get(url)
        .then(({data}) => data.allTopics)
    )
}
export const getArticlesByTopic = (topicSlug) => {
    const url = `${BASE_URL}/topics/${topicSlug}/articles`
    return (
        axios.get(url)
        .then(({data}) => data.articlesInTopic)
    )
}
export const getArticle = (id) => {
    const url = `${BASE_URL}/articles/${id}`
    return (
        axios.get(url)
        .then(({data}) => data.article)
    )
}