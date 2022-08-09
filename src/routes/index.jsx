import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import NavBar from '../components/navbar';

export default function AppRoutes(){
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/post' element={<h1>Post</h1>}/>
        </Routes>
        </BrowserRouter>
    );
}