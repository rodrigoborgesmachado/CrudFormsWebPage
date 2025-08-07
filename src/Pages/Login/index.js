import api from '../../Services/api.js';
import Config from './../../config.json';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Paper, Typography, TextField, Button, Link, CircularProgress, Box } from '@mui/material';

function Login(){
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [loadding, setLoadding] = useState(false);

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
        await api.post(`/Token/crudforms`, {username: login, password: stringToHash(senha)+''})
            .then((response) => {
                setLoadding(false);
                localStorage.setItem(Config.LOGADO, 1);
                localStorage.setItem(Config.USUARIO, response.data.username);
                localStorage.setItem(Config.NOMEUSER, response.data.nome);
                localStorage.setItem(Config.TOKEN, response.data.token);
                toast.success('Bem vindo ' + response.data.nome + '!');
                navigate('/', {replace: true});
            }).catch(() => {
                setLoadding(false);
                toast.error('Login ou senha incorretos');
                return;
            });
    }

    function criarUsuario(){
        navigate('/criarUsuario', {replace: true});
    }

    if(localStorage.getItem(Config.LOGADO) != null && localStorage.getItem(Config.LOGADO) === '1'){
        navigate('/', {replace: true});
    }

    if(loadding){
        return(
            <Box className='loaddingDiv'>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Container className="containerpage" maxWidth="sm">
            <Paper elevation={0} sx={{ p: 4, width: '100%' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Login
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Login" value={login} onChange={(e) => setLogin(e.target.value)} required />
                    <TextField label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <Link component={RouterLink} to={`/recoverypass`} sx={{ alignSelf: 'flex-start' }}>
                        Esqueci minha senha
                    </Link>
                    <Button variant="contained" onClick={logar}>Logar</Button>
                    <Button variant="outlined" onClick={criarUsuario}>Criar usuário</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Login;
