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
  Button,
  Box
} from '@mui/material';

function Users() {
  const [loadding, setLoadding] = useState(true);
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function BuscarUsuarios() {
      try {
        const response = await api.get('/UsuariosCrudForms/users');
        if (response.data.success) {
          setLista(response.data.object);
        }
      } catch {
        navigate('/', { replace: true });
      } finally {
        setLoadding(false);
      }
    }

    BuscarUsuarios();
  }, []);

  if (
    localStorage.getItem(Config.LOGADO) == null ||
    localStorage.getItem(Config.LOGADO) === '0'
  ) {
    navigate('/', { replace: true });
  }

  const AbreEdicao = (user) => {
    navigate('/editar/' + user, { replace: true });
  };

  const AdicionarUsuario = () => {
    navigate('/criarUsuario', { replace: true });
  };

  if (loadding) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <img src={require('../../Assets/hug.gif')} alt="Loading..." />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        {/* Cabeçalho */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5" fontWeight="bold">
            Lista de Usuários
          </Typography>
          <Button
            variant="contained"
            onClick={AdicionarUsuario}
            sx={{
              background: 'linear-gradient(to right, #1976d2, #42a5f5)',
              fontWeight: 'bold',
              borderRadius: 2,
              px: 2
            }}
          >
            + Adicionar Usuário
          </Button>
        </Box>

        {/* Tabela */}
        <Table sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><Typography fontWeight="bold">Login</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Administrador</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Desenvolvedor</Typography></TableCell>
              <TableCell><Typography fontWeight="bold">Email</Typography></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lista.length > 0 ? (
              lista.map((item) => (
                <TableRow
                  key={item.codigo}
                  hover
                  sx={{ transition: '0.3s', '&:hover': { backgroundColor: '#f0f7ff' } }}
                >
                  <TableCell>{item.login}</TableCell>
                  <TableCell>
                    {item.administrador === '1' ? '✅ Sim' : '❌ Não'}
                  </TableCell>
                  <TableCell>
                    {item.desenvolvedor === '1' ? '💻 Sim' : '❌ Não'}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => AbreEdicao(item.codigo)}
                      sx={{ borderRadius: 2 }}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 3, color: 'gray' }}>
                  Nenhum usuário encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Users;
