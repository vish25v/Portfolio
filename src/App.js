import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePost from "./Pages/SinglePost";
import Post from "./Pages/Post";
import Project from "./Pages/Projects";
import NavBar from "./Containers/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route element={<Home/>} path="/" exact/>
        <Route element={<About/>} path="/about"/>
        <Route element={<SinglePost/>} path="/post/:slug"/>
        <Route element={<Post/>} path="/post"/>
        <Route element={<Project/>} path="/project"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
