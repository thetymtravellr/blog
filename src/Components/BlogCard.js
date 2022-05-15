import HeartIconActive from "@heroicons/react/outline/HeartIcon";
import { HeartIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

  const [liked, setLiked] = useState(false);

  const { article, author, email, reactions, tag, title, _id } = blog;
  const shortenArticle = article.slice(0, 500);
 
  const likeFunc = () => {
    setLiked(true)
    console.log('liked');
  }

  const disLikedFunc = () => {
    setLiked(false)
    console.log('disliked');
  }


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
      <div>
        <div className="flex items-center space-x-2  w-fit">
          {
            liked
            ?
            <button className="" onClick={disLikedFunc}><HeartIcon className="w-6 h-6 text-pink-500"/></button>
            :
            <button  className="" onClick={likeFunc}><HeartIconActive className="w-6 h-6"/></button>
          }
          <div><p className="text-lg text-gray-500 font-hindSiliguri">{reactions}</p></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
