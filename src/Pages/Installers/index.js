import api from '../../Services/api.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { toast } from 'react-toastify';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
  Divider
} from '@mui/material';

function Installers(){
    const [loadding, setLoadding] = useState(true);
    const [lista, setLista] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function BuscarInstaladores(){
            try {
                const response = await api.get('/CrudFormsInstalador');
                if(response.data.success){
                    setLista(response.data.object.reverse());
                }
            } catch {
                toast.error('Erro ao buscar');
                navigate('/', {replace: true});
            } finally {
                setLoadding(false);
            }
        }
        BuscarInstaladores();
    }, []);

    function Baixar(diretorio){
        const link = document.createElement('a');
        link.href = diretorio;
        document.body.appendChild(link);
        link.click();
        link.remove();
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
          <Typography variant="h5" gutterBottom>
            Instaladores Disponíveis
          </Typography>
          {lista?.map((item, index) => (
            <Card 
              key={item.Codigo} 
              sx={{ mb:2, display:'flex', justifyContent:'space-between', alignItems:'center', p:2 }}
              elevation={3}
            >
              <CardContent sx={{ flex:1 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Versão
                </Typography>
                <Typography variant="h6">
                  {item.versao}
                </Typography>
              </CardContent>
              <Divider orientation="vertical" flexItem sx={{ mx:2 }} />
              <CardActions>
                <Button 
                  variant="contained" 
                  startIcon={<CloudDownloadIcon />} 
                  onClick={() => Baixar(item.diretorio)}
                >
                  Baixar
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>
    )
}

export default Installers;
