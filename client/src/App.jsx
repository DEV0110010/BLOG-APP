import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/Home'
import Header from './components/Header'
import AddCategory from './pages/AddCategory'
import AddBlog from './pages/AddBlog'
import SingleBlog from './pages/SingleBlog'
import PrivateRoute from './Services/ProtectedRoutes'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>

      {/* Protectetd Routes */}
      <Route path="/" element ={<PrivateRoute/>}>
      <Route path="/" element ={<Home/>}/>
      <Route path="/add-blog" element ={<AddBlog/>}/>
      <Route path="/add-category" element ={<AddCategory/>}/>
      <Route path="/blog/:id" element ={<SingleBlog/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App