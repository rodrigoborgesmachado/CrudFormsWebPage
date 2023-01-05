import './index.css';
import api from '../../Services/api.js';
import Config from './../../config.json';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();

    const[login, setlogin] = useState('');
    const[senha, setSenha] = useState('');
    const[loadding, setLoadding] = useState(false);

    function stringToHash(string) {
                  
        let hash = 0;
          
        if (string.length === 0) return hash;
          
        for (let i = 0; i < string.length; i++) {
            let char = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
          
        return hash;
    }

    async function logar(){
        setLoadding(true);
        await api.get(`/Logar.php?login=${login}&senha=${stringToHash(senha)}`)
            .then((response) => {
                setLoadding(false);
                if(response.data.Sucesso){
                    sessionStorage.setItem(Config.LOGADO, 1);
                    sessionStorage.setItem(Config.USUARIO, response.data.Objeto.Email);
                    sessionStorage.setItem(Config.CodigoUsuario, response.data.Objeto.Codigo);
                    toast.success('Bem vindo!');

                    navigate('/', {replace: true});
                }
                else{
                    toast.error('Login ou senha incorretos');
                }
            }).catch(() => {
                setLoadding(false);
                toast.error('Erro ao logar');
                return;
            });
    }

    function criarUsuario(){
        navigate('/criarUsuario', {replace: true});
    }

    if(sessionStorage.getItem(Config.LOGADO) != null && sessionStorage.getItem(Config.LOGADO) === '1'){
        navigate('/', {replace: true});
    }

    if(loadding){
        return(
            <div className='loaddingDiv'>
                <img src={require('../../Assets/hug.gif')} alt="Loading..." />
            </div>
        )
    }

    return (
        <div className="containerpage">
            <div className='login'>
                <h2>
                    Login
                </h2>
                <input type="text" name='login' id='login' value={login} onChange={(e) => setlogin(e.target.value)} required={true}></input>
                <h2>
                    Senha
                </h2>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required={true}></input>
                <button onClick={logar}>Logar</button>
                <button onClick={criarUsuario}>Criar usuário</button>
            </div>
        </div>
    )
}

export default Login;