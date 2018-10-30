import React from 'react';
import './Articles.css';
import { Link } from '@reach/router';

const Articles = ({articles}) => {
   
    return (
        <div>
            {articles.map(article => {
                  return (
                    <Link key={article._id} to={`/article/${article._id}`}>
                    <article className='article' >
                            <p>{article.belongs_to}</p>
                            <p>{article.created_by.name}</p>
                            <p>{article.created_at}</p>
                            <h2>{article.title}</h2>
                            <p>{article.body}</p>
                            <p>{article.comment_count}</p>
                            <p>{article.votes}</p>
                        </article>
                    </Link>
                  )
                })}
        </div>
    );
};

export default Articles;