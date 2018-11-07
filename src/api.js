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
        .catch(console.log)
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
export const updateLikeCount = (target_id, direction, type) => {
    const url = type === 'comment' ? `${BASE_URL}/comments/${target_id}?vote=${direction}` : `${BASE_URL}/articles/${target_id}?vote=${direction}`
    return(
        axios.patch(url)
        .then(({data}) => data[type])
    )
}
export const getComments = (id) => {
    const url = `${BASE_URL}/articles/${id}/comments`
    return (
        axios.get(url)
        .then(({data}) => data.comments)
    )
}
export const deleteComment = (id) => {
    const url = `${BASE_URL}/comments/${id}`
    return (
        axios.delete(url)
        .then(({data}) => data.comments)
    )
}
export const postComment = (newComment, article_id) => {
    const url = `${BASE_URL}/articles/${article_id}/comments`
    return(
        axios.post(url, newComment)
        .then(({data}) => data.comment)
    )
}
export const getUserArticles = (user_id) => {
    const url = `${BASE_URL}/users/${user_id}/articles`
    return(
        axios.get(url)
        .then(({data}) => data.articles)
    )
}
export const getUserComments = (user_id) => {
    const url = `${BASE_URL}/users/${user_id}/comments`
    return(
        axios.get(url)
        .then(({data}) => data.comments)
    )
}