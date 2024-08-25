import { Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext';

import './App.css'
import SignIn from './module/auth/pages/signin'
import SignUp from './module/auth/pages/signup'
import Landing from './global_components/landing/landing'
import Home from './global_components/home/home'
import NotFound from './global_components/not_found/not_found';
import BlogDetails from './module/blogs/pages/blog_details';
import Author from './module/blogs/pages/authors'
import AuthorBlogs from './module/blogs/pages/author_blogs'
import CategoryBlogs from './module/blogs/pages/category_blogs'
import Profile from './module/user/pages/profile'
import AddBlog from './module/blogs/pages/add_blog'
import UpdateBlog from './module/blogs/pages/update_blog'
import Dashboard from './module/dashboard/pages/Dashboard'
import CategoryPage from './module/blogs/pages/category_page';
import { BlogDataProvider } from './context/Blog_Context';

function App() {

  const location = useLocation();
  
  let path = location.pathname ;

  console.log(path);
  
  return (
    <BlogDataProvider>
      <div className="App">

        <Routes>
        <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/' element={<Landing />}>
            <Route index element={<Home />} />
            <Route path='blog/:blog_id' element={<BlogDetails />} />
            <Route path='blogs/author/:author_id' element={<AuthorBlogs />} />
            <Route path='blogs/cat/:category' element={<CategoryBlogs />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='authors' element={<Author />} />
            <Route path='profile' element={<Profile />} />
            <Route path='create_blog' element={<AddBlog />} />
            <Route path='update_blog/:id' element={<UpdateBlog />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>

      </div >
    </BlogDataProvider>
  )
}

export default App