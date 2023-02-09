import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Signin from "./signin";

const RouterApp =()=>{
    return(
        <BrowserRouter>
        <nav>
            {/* <ul>
                <li><Link to="Login">login</Link>{""}</li>
                <li><Link to="Signin">Signin</Link>{""}</li>
                <li><Link to="Home">Home</Link>{""}</li>
            </ul> */}
        {/* <Login/> */}
        </nav>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="signin" element={<Signin/>}></Route>
            <Route path="home" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;