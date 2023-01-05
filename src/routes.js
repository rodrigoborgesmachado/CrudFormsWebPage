import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from "./Pages/Home";
import Installers from './Pages/Installers';
import Login from './Pages/Login';
import Modules from './Pages/Modules';
import CriarUsuario from './Pages/SingIn';
import Users from './Pages/Users';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/criarUsuario' element={<CriarUsuario/>}/>
                <Route path='/usuarios' element={<Users/>}/>
                <Route path='/modulos' element={<Modules/>}/>
                <Route path='/instaladores' element={<Installers/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;