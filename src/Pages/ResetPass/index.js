import api from '../../Services/api.js';
import Config from './../../config.json';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button
} from '@mui/material';

function ResetPass(){
    const navigate = useNavigate();
    const[senha, setSenha] = useState('');
    const{guid} = useParams();
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

    async function reset(){
        setLoadding(true);
        await api.post(`/recuperasenha/reset-pass?guid=` + guid + '&pass=' + stringToHash(senha) + "&tipo=CrudForms")
            .then((response) => {
                setLoadding(false);
                if(response.data.success){
                    toast.success('Login liberado com a nova senha!');
                    navigate('/login', {replace: true});
                }
                else{
                    toast.error('Usuário não encontrado!');
                    navigate('/', {replace: true});
                }
            }).catch(() => {
                setLoadding(false);
                toast.error('Usuário não encontrado!');
                return;
            });
    }

    if(localStorage.getItem(Config.LOGADO) == 1){
        navigate('/', {replace: true});
    }

      if(loadding){
          return(
              <Container sx={{ display:'flex', justifyContent:'center', mt:4 }}>
                  <img src={require('../../Assets/hug.gif')} alt="Loading..." />
              </Container>
          )
      }

      return (
          <Container maxWidth="sm" sx={{ mt:4 }}>
            <Paper sx={{ p:3 }}>
              <Typography variant="h5" mb={2}>Nova senha</Typography>
              <TextField type="password" fullWidth margin="normal" value={senha} onChange={(e) => setSenha(e.target.value)} required />
              <Button variant="contained" onClick={reset}>Resetar a senha</Button>
            </Paper>
          </Container>
      )
}

export default ResetPass;