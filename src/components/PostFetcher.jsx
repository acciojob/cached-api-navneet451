import React, { useState } from "react";

const FetchedPosts = () => {
  const [userId, setUserId] = useState("");
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserId(Number(e.target.value));
  };
  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await response.json();
    setPost(data);
    setLoading(false);
    setUserId("");
  };
  return (
    <div>
      <input
        type="number"
        placeholder="enter userId"
        value={userId}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Get Posts</button>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {post.map((posts) => {
            return (
              <li key={posts.id}>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FetchedPosts;
