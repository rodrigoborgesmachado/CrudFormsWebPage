import api from '../../Services/api.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { toast } from 'react-toastify';
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

function Installers(){
    const[loadding, setLoadding] = useState(true);
    const[lista, setLista] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function BuscarInstaladores(){
            await api.get('/CrudFormsInstalador')
            .then((response) => {
                if(response.data.success){
                    setLista(response.data.object.reverse());
                }
                setLoadding(false);
            }).catch(() => {
                toast.error('Erro ao buscar');
                navigate('/', {replace: true});
                return;
            });
        }

        BuscarInstaladores();
    }, [])

    function Baixar(diretorio){
        const link = document.createElement('a');

        link.href = diretorio;
        // Append to html link element page
        document.body.appendChild(link);
        // Start download
        link.click();
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
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><Typography variant="h6">Versão</Typography></TableCell>
                    <TableCell><Typography variant="h6">Link</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lista?.map((item) => (
                    <TableRow key={item.Codigo}>
                      <TableCell>{item.versao}</TableCell>
                      <TableCell>
                        <Button startIcon={<CloudDownloadIcon />} onClick={() => Baixar(item.diretorio)}>
                          Baixar versão {item.Versao}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Container>
      )
}

export default Installers;