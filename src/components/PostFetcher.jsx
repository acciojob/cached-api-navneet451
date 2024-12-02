import React, { useState, useEffect, useMemo } from 'react';

// The component that fetches and displays data
const PostFetcher = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useMemo hook to cache the fetched data
  const fetchPosts = useMemo(() => {
    return async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data); // Set the fetched data
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
  }, [userId]); // The fetch function is re-generated if the userId changes

  // useEffect hook to trigger the fetch when the component mounts or the userId changes
  useEffect(() => {
    fetchPosts(); // Fetch data when userId changes or component mounts
  }, [fetchPosts]); // Dependency array includes fetchPosts to re-run when userId changes

  // Rendering the component
  return (
    <div>
      <h1>Posts for User ID: {userId}</h1>
      
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostFetcher;

