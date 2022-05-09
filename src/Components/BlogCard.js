import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

  const { article, author, email, react, tag, title, _id } = blog;
  const shortenArticle = article.slice(0, 500);

  return (
    <div className="max-w-lg w-full border mx-auto p-4">
      <div>
        <Link to="/" className="hover:text-amber-400 duration-200 ease-in-out">
          <h1 className="w-fit text-3xl font-medium mb-2">{title}</h1>
        </Link>
        <Link to='/' className="hover:text-blue-400 duration-200 ease-in-out">
        <p className="font-medium w-fit">
          <small>{author}</small>
        </p>
        </Link>
      </div>
      <div className="mt-4 mb-2">
        <p className="text-justify">{shortenArticle}</p>
      </div>
      <div></div>
    </div>
  );
};

export default BlogCard;
