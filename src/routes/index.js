import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1>Bom Dia</h1>}/>
        </Routes>
        </BrowserRouter>
    );
}