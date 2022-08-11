import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import NavBar from '../components/navbar';
import PostList from '../components/post-list';
export default function AppRoutes(){
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
        </BrowserRouter>
    );
}