import api from '../../Services/api.js';
import Config from './../../config.json';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button
} from '@mui/material';

function RecoveryPass(){
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[loadding, setLoadding] = useState(false);

    async function reset(){
        setLoadding(true);
        await api.post(`/recuperasenha/recovery-pass?email=` + email + "&tipo=CrudForms")
            .then((response) => {
                if(response.data.success){
                    toast.success('Você receberá um email com as instruções para recuperação da senha!');
                }
                else{
                    toast.error('Usuário não encontrado!');
                }
                setLoadding(false);
                navigate('/', {replace: true});
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
              <Typography variant="h5" mb={2}>Login</Typography>
              <TextField type="email" label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Button variant="contained" onClick={reset}>Resetar a senha</Button>
            </Paper>
          </Container>
      )
}

export default RecoveryPass;