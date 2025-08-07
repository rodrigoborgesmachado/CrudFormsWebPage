import api from '../../Services/api.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from './../../config.json';
import {
  Container,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from '@mui/material';

function Users(){
    const[loadding, setLoadding] = useState(true);
    const[lista, setLista] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function BuscarUsuarios(){
            await api.get('/UsuariosCrudForms/users')
            .then((response) => {
                if(response.data.success){
                    setLista(response.data.object);
                }
                setLoadding(false);
            }).catch(() => {
                navigate('/', {replace: true});
                return;
            });
        }

        BuscarUsuarios();
    }, [])

    if(localStorage.getItem(Config.LOGADO) == null || localStorage.getItem(Config.LOGADO) === '0'){
        navigate('/', {replace: true});
    }

    function AbreEdicao(user){
        navigate('/editar/' + user, {replace: true});
    }

    function AdicionarUsuario(){
        navigate('/criarUsuario', {replace: true});
    }

    if(loadding){
      return(
          <Container sx={{ display:'flex', justifyContent:'center', mt:4 }}>
              <img src={require('../../Assets/hug.gif')} alt="Loading..." />
          </Container>
      )
    }

      return(
          <Container maxWidth="md" sx={{ mt:4 }}>
            <Paper sx={{ p:2 }}>
              <Button variant="contained" onClick={AdicionarUsuario} sx={{ mb:2 }}>
                Adicionar usuário
              </Button>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><Typography variant="h6">Login</Typography></TableCell>
                    <TableCell><Typography variant="h6">Administrador</Typography></TableCell>
                    <TableCell><Typography variant="h6">Desenvolvedor</Typography></TableCell>
                    <TableCell><Typography variant="h6">Email</Typography></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lista?.map((item) => (
                    <TableRow key={item.codigo}>
                      <TableCell>{item.login}</TableCell>
                      <TableCell>{item.administrador === '1' ? 'Sim' : 'Não'}</TableCell>
                      <TableCell>{item.desenvolvedor === '1' ? 'Sim' : 'Não'}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>
                        <Button variant="outlined" onClick={() => AbreEdicao(item.codigo)}>Editar</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Container>
      )
}

export default Users;