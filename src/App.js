import React from 'react'
import { BrowserRouter as Router ,Routes,Route  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CreatePost from './components/posts/CreatePost';
import DeletePost from './components/posts/DeletePost';
import Posts from './components/posts/Posts';
import UpdatePosts from './components/posts/UpdatePosts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:id" element={<UpdatePosts />} />
        <Route path="/delete-post/:id" element={<DeletePost />} />
      </Routes>
    </Router>
  );
}

export default App