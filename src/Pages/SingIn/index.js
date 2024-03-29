import './index.css';
import { useState } from 'react';
import Config from '../../config.json';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../Services/api';
import Checkbox from '@mui/material/Checkbox';

function CriarUsuario(){
    const navigate = useNavigate();

    const[login, setLogin] = useState('');
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[administrador, setAdministrador] = useState(true);
    const[desenvolvedor, setDesenvolvedor] = useState(true);
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

    async function confirmaFormulario(){
        setLoadding(true);
        let logado = localStorage.getItem(Config.LOGADO) != null && localStorage.getItem(Config.LOGADO) === '1';

        await api.post(`/UsuariosCrudForms`, 
        {
            login: login,
            email: email,
            senha:stringToHash(senha) + '',
            nome: nome,
            administrador: administrador ? '1' : '0',
            desenvolvedor: desenvolvedor ? '1' : '0',
            usuarioPai: localStorage.getItem(Config.LOGADO) == '0' ? -1 : null 
        }
        )
            .then((response) => {
                setLoadding(false);
                if(response.data.success && !logado){
                    toast.success('Usuário criado com sucesso! Login Liberado!');
                    navigate('/login', {replace: true});
                }
                else if (response.data.success && logado){
                    toast.success('Usuário criado com sucesso! Seu novo usuário já pode usar o CrudForms!');
                    navigate('/usuarios', {replace: true});
                }
                else{
                    toast.error('Erro ao criar o usuário');
                }
            }).catch(() => {
                setLoadding(false);
                toast.error('Erro ao criar usuário');
                return;
            });
    }

    if(loadding){
        return(
            <div className='loaddingDiv'>
                <img src={require('../../Assets/hug.gif')} alt="Loading..." />
            </div>
        )
    }

    return(
        <div className="containerpage">
            <div className='criarUsuario'>
                <h2>
                    Login
                </h2>
                <input type='text' value={login} onChange={(e) => setLogin(e.target.value)}></input>
                <h2>
                    Senha
                </h2>
                <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                <h2>
                    Email
                </h2>
                <input type='email' value={email} name='email' id='email' onChange={(e) => setEmail(e.target.value)}></input>
                <h2>
                    Nome
                </h2>
                <input type='text' value={nome} name='nome' id='nome' onChange={(e) => setNome(e.target.value)}></input>
                <br/>
                <div className='checkboxdiv'>
                <Checkbox label="Administrador" checked={administrador} color="secondary" border-color="white" onChange={(e) => setAdministrador(e.target.checked)}/>
                <span onClick={() => setAdministrador(!administrador)}>
                <h3>Administrador</h3>
                </span>
                </div>
                <div className='checkboxdiv'>
                <Checkbox label="Desenvolvedor" checked={desenvolvedor} color="secondary" onChange={(e) => setDesenvolvedor(e.target.checked)}/>
                <span onClick={() => setDesenvolvedor(!desenvolvedor)}>
                <h3>Desenvolvedor</h3>
                </span>
                </div>
                <button onClick={confirmaFormulario}>Confirma</button>
            </div>
        </div>
    )
}

export default CriarUsuario;