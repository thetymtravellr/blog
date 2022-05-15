import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
         axios.get('https://hasan-blog-app.herokuapp.com/blogs')
         .then(res => setBlogs(res.data))
    },[blogs])
    
    return (
        <section className='mt-24'>
            <div className='flex flex-col space-y-2 mx-2'>
               {
                   blogs.map(blog =>  <BlogCard key={blog._id} blog={blog}></BlogCard>)
               }
            </div>
        </section>
    );
};

export default Blogs;