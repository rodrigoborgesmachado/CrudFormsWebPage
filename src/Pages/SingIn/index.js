import { useState } from 'react';
import Config from '../../config.json';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api from '../../Services/api';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@mui/material';

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
              <Container sx={{ display:'flex', justifyContent:'center', mt:4 }}>
                  <img src={require('../../Assets/hug.gif')} alt="Loading..." />
              </Container>
          )
      }

      return(
          <Container maxWidth="sm" sx={{ mt:4 }}>
            <Paper sx={{ p:3 }}>
              <Typography variant="h5" mb={2}>Criar Usuário</Typography>
              <TextField label="Login" fullWidth margin="normal" value={login} onChange={(e) => setLogin(e.target.value)} />
              <TextField label="Senha" type="password" fullWidth margin="normal" value={senha} onChange={(e) => setSenha(e.target.value)} />
              <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Nome" fullWidth margin="normal" value={nome} onChange={(e) => setNome(e.target.value)} />
              <FormControlLabel control={<Checkbox checked={administrador} onChange={(e) => setAdministrador(e.target.checked)} />} label="Administrador" />
              <FormControlLabel control={<Checkbox checked={desenvolvedor} onChange={(e) => setDesenvolvedor(e.target.checked)} />} label="Desenvolvedor" />
              <Button variant="contained" sx={{ mt:2 }} onClick={confirmaFormulario}>Confirma</Button>
            </Paper>
          </Container>
      )
}

export default CriarUsuario;