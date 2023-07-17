import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from "./Pages/Home";
import Erro from './Pages/Erro';
import Installers from './Pages/Installers';
import Login from './Pages/Login';
import Modules from './Pages/Modules';
import CriarUsuario from './Pages/SingIn';
import Users from './Pages/Users';
import EditarUsuario from './Pages/EditUser';
import RecoveryPass from './Pages/RecoveryPass';
import ResetPass from './Pages/ResetPass';

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
                <Route path='/modulos/:filtro' element={<Modules/>}/>
                <Route path='/instaladores' element={<Installers/>}/>
                <Route path='/editar/:filtro' element={<EditarUsuario/>}/>
                <Route path='/recoverypass' element={<RecoveryPass/>}/>
                <Route path='/resetpass/:guid' element={<ResetPass/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;