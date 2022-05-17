import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8080/article/${id}`)
        .then(res => setArticle(res.data))
    },[id])
    const { title, post, tag, author } = article;
    return (
        <div>
            <h1>{title}</h1>
            <p>{post}</p>
        </div>
    );
};

export default Article;