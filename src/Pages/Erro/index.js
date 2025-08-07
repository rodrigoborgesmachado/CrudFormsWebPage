import { Link } from 'react-router-dom';
import { Container, Paper, Typography, Button } from '@mui/material';

function Erro(){
    return(
        <Container maxWidth="sm" sx={{ mt:4 }}>
            <Paper sx={{ p:3, textAlign:'center' }}>
                <Typography variant="h3">404</Typography>
                <Typography variant="h5" mb={2}>Página não encontrada</Typography>
                <Button variant="contained" component={Link} to="/">Home</Button>
            </Paper>
        </Container>
    )
}

export default Erro;