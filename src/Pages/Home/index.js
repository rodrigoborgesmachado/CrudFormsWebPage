import { Container, Paper, Typography } from '@mui/material';

function Home(){
    return(
        <Container className='containerpage'>
            <Paper elevation={0} sx={{ p: 2 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Crud Forms
                </Typography>
                <Typography variant="body1" component="div">
                    Bem-vindo ao CrudForms, uma ferramenta criada para facilitar o dia a dia de profissionais de tecnologia.
                    <br/>
                    <br/>
                    Conecte-se aos principais bancos de dados relacionais e gere automaticamente formulários para criar, consultar, atualizar e excluir registros.
                    <br/>
                    <br/>
                    Os resultados das consultas são exibidos em tabelas práticas e você pode gerar relatórios e evidências com apenas alguns cliques.
                    <br/>
                    <br/>
                    Comece instalando o aplicativo em sua máquina e criando um usuário aqui no site. Nenhuma informação do seu banco de dados é armazenada em nossos servidores.
                    <br/>
                    <br/>
                    Explore a seção "Módulos" para conhecer todos os recursos ou acesse "Instaladores" para baixar a aplicação e iniciar agora mesmo!
                </Typography>
            </Paper>
        </Container>
    )
}

export default Home;
