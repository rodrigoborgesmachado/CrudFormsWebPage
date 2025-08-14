import api from '../../Services/api.js';
import Config from './../../config.json';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
  CircularProgress,
  Box,
  InputAdornment
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
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

  async function logar() {
    setLoadding(true);
    await api.post(`/Token/crudforms`, { username: login, password: stringToHash(senha) + '' })
      .then((response) => {
        setLoadding(false);
        localStorage.setItem(Config.LOGADO, 1);
        localStorage.setItem(Config.USUARIO, response.data.username);
        localStorage.setItem(Config.NOMEUSER, response.data.nome);
        localStorage.setItem(Config.TOKEN, response.data.token);
        toast.success('Bem vindo ' + response.data.nome + '!');
        navigate('/', { replace: true });
      }).catch(() => {
        setLoadding(false);
        toast.error('Login ou senha incorretos');
      });
  }

  function criarUsuario() {
    navigate('/criarUsuario', { replace: true });
  }

  if (localStorage.getItem(Config.LOGADO) === '1') {
    navigate('/', { replace: true });
  }

  if (loadding) {
    return (
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
      }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #1976d2, #2196f3)',
      p: 2
    }}>
      <Container maxWidth="xs">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
            Login
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
            <Link
              component={RouterLink}
              to="/recoverypass"
              underline="hover"
              sx={{ fontSize: 14, alignSelf: 'flex-start' }}
            >
              Esqueci minha senha
            </Link>
            <Button variant="contained" size="large" onClick={logar}>
              Logar
            </Button>
            <Button variant="outlined" size="large" onClick={criarUsuario}>
              Criar usuário
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
