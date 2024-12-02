
import React from "react";
import './../styles/App.css';

const App = () => {
  const [userId, setUserId] = useState(1);
  const handleChangeUserId=(e)=>{
    setUserId(Number.(e.target.value));
  };
  return (
    <div>
      <h1>Post Fetcher App</h1>
      <input 
        type="number" 
        value={userId} 
        onChange={handleChangeUserId} 
        placeholder="Enter User ID"
      />
      <PostFetcher userId={userId} />
    </div>
  );
}

export default App
