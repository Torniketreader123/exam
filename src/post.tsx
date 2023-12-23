import React, { useState } from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  date: string; 
}

const Post: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAddPost = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter both title and description.');
      return;
    }

    const newPost: Post = {
      id: new Date().getTime(),
      title,
      description,
      date: new Date().toLocaleString(), 
    };

    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h1>Post Page</h1>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button onClick={handleAddPost}>Add Post</button>

      <div style={{ marginTop: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '400px' }}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Date: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;