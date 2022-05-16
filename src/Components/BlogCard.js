import { EyeIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, reactions }) => {

  const { article, author, email, tag, title, _id } = blog;
  const shortenArticle = article.slice(0, 500);

  const increaseCount = () => {
    console.log(reactions + 1);
  }

  return (
    <div className="max-w-lg w-full border mx-auto p-4">
      <div>
        <Link to="/" className="hover:text-amber-400 duration-200 ease-in-out">
          <h1 onClick={increaseCount} className="w-fit text-3xl font-medium mb-2">{title}</h1>
        </Link>
        <Link to='/' className="hover:text-blue-400 duration-200 ease-in-out">
        <p className="font-medium w-fit flex items-center space-x-2">
          <span><PencilIcon className="w-5 text-slate-400"/></span> <small>{author}</small>
        </p>
        </Link>
      </div>
      <div className="mt-4 mb-2">
        <p className="text-justify text-slate-500">{shortenArticle}</p>
      </div>
      <div>
        <div className="flex items-center space-x-2  w-fit">
            <div><EyeIcon className="w-5 text-slate-300"/></div>
          <div><p className="text-lg text-slate-300 font-poppins">{reactions}</p></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
