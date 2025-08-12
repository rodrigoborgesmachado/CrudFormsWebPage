import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DownloadIcon from '@mui/icons-material/Download';

function Home() {
  const features = [
    {
      icon: <StorageIcon sx={{ fontSize: 50, color: '#1a73e8' }} />,
      title: 'Conexão com Bancos de Dados',
      text: 'Conecte-se aos principais bancos de dados relacionais para criar, consultar, atualizar e excluir registros de forma simples e rápida.',
    },
    {
      icon: <DescriptionIcon sx={{ fontSize: 50, color: '#1a73e8' }} />,
      title: 'Geração Automática de Formulários',
      text: 'Crie formulários automaticamente para gerenciar seus dados sem precisar programar nada.',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 50, color: '#1a73e8' }} />,
      title: 'Relatórios e Evidências',
      text: 'Exiba resultados em tabelas práticas e gere relatórios e evidências com apenas alguns cliques.',
    },
    {
      icon: <DownloadIcon sx={{ fontSize: 50, color: '#1a73e8' }} />,
      title: 'Instalação Fácil',
      text: 'Instale o aplicativo, crie seu usuário e comece a usar agora mesmo. Nenhuma informação do seu banco é armazenada em nossos servidores.',
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Bem-vindo ao CrudForms
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
          Uma ferramenta criada para facilitar o dia a dia de profissionais de tecnologia.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                borderRadius: '12px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              {feature.icon}
              <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
