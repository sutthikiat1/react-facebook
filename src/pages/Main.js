import React, { useState } from "react";
import Navbar from "components/Navbar";
import Input from "components/Input";
import Post from "components/Post";

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatePost = posts.filter((post) => post.id !== id);
    setPosts(updatePost);
  }

  return (
    <div className='App'>
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => {
        const { id, title } = post;
        return <Post key={id} id={id} title={title} deletePost={deletePost} />;
      })}
    </div>
  );
}

export default App;
