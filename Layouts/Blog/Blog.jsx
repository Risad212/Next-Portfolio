import React from 'react';
import blog from 'blog.module.css';

const Blog = () => {
    return (
        <div className={blog.blog}>
           <div className="container">
               <div className={portfolio.title}>
                    <span>portfolio</span>
                    <h1>My Latest Projects</h1>
                </div>
            </div>  
        </div>
    );
};

export default Blog;