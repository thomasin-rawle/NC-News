import React from 'react';

const Articles = ({articles}) => {
   
    return (
        <div>
            {articles.map(article => {
                  return <article key={article._id}>
                        <p>{article.belongs_to}</p>
                        <p>{article.created_by.name}</p>
                        <p>{article.created_at}</p>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                        <p>{article.comment_count}</p>
                        <p>{article.votes}</p>
                    </article>
                })}
        </div>
    );
};

export default Articles;