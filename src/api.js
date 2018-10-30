import axios from 'axios';

const BASE_URL = 'https://nc-news-tommy.herokuapp.com/api';

export const getArticles = (topic) => {
    const url = topic ? `${BASE_URL}/topics/${topic}/articles` : `${BASE_URL}/articles`
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
export const getArticle = (id) => {
    const url = `${BASE_URL}/articles/${id}`
    return (
        axios.get(url)
        .then(({data}) => data.article)
    )
}
export const getUser = (username) => {
    const url = `${BASE_URL}/users/${username}`
    return (
        axios.get(url)
        .then(({data}) => data.userProfile)
    )
}
export const postArticle = (newArticle, topic) => {
    const url = `${BASE_URL}/topics/${topic}/articles`
    return(
        axios.post(url, newArticle)
        .then(({data}) => data.article)
    )
}