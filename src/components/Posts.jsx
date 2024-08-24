import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';


const Posts = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then((data) => setPosts(data));
    }, []);
  
    return (
      <div>
        <div className="post-container">
          {posts.map((post) => (
            <NavLink
              className="post-titles"
              style={{ display: "block" }}
              to={`/post/${post.id}`}
            >
              {post.title}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  export default Posts;