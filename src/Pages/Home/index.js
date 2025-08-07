import { Container, Paper, Typography } from '@mui/material';

function Home(){
    return(
        <Container className='containerpage'>
            <Paper elevation={0} sx={{ p: 2 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Crud Forms
                </Typography>
                <Typography variant="body1" component="div">
                    Bem-vindo ao mundo mágico do CrudForms! 🧙✨
                    <br/>
                    <br/>
                    Imagine um sistema incrível que é como um assistente tecnológico, pronto para ajudar profissionais como você com funções rápidas e prontas. O CrudForms é exatamente isso! Ele foi criado para simplificar a vida dos profissionais de tecnologia e transformar tarefas complexas em algo mágico e descomplicado. 🪄💻
                    <br/>
                    <br/>
                    Com o CrudForms, você pode se conectar à maioria dos bancos de dados relacionais do mercado. Ele lê todas as tabelas da sua base de dados e gera formulários para o CRUD básico (Create, Read, Update e Delete) de cada uma delas. Não é incrível? Você não precisa mais se preocupar em montar consultas complexas para acessar sua base de dados. Basta selecionar os filtros desejados e o resultado é apresentado em uma tabela mágica dentro do programa. ✨📊
                    <br/>
                    <br/>
                    E tem mais! Quando você precisa gerar evidências ou relatórios da sua base de dados, o CrudForms torna tudo prático e sem complicações. Você não precisa mais ficar anexando prints do banco de dados em documentos. Agora, você pode contar com uma ferramenta profissional que torna tudo mais mágico e encantador. 🧙📝
                    <br/>
                    <br/>
                    Acesso ao CrudForms é super fácil! Basta instalá-lo em sua máquina e criar um usuário aqui mesmo, no nosso site. Além disso, você pode cadastrar outros usuários que trabalham com você na base de dados e ter controle total sobre suas permissões. Não se preocupe, apenas seus dados de acesso são salvos. A conexão com o banco de dados e a estrutura das suas tabelas não ficam disponíveis em nossos servidores. Sua privacidade é nossa prioridade! 🔒✨
                    <br/>
                    <br/>
                    Para descobrir todas as funcionalidades mágicas do CrudForms, acesse a seção "Módulos". E se você já está ansioso para experimentar toda essa magia em sua máquina, acesse a seção "Instaladores" e faça o download agora mesmo! ✨💻
                    <br/>
                    <br/>
                    Bem-vindo ao mundo encantado do CrudForms, onde a magia encontra a tecnologia. Faça parte dessa jornada e transforme suas tarefas em algo simplesmente mágico! ✨🪄💻
                </Typography>
            </Paper>
        </Container>
    )
}

export default Home;
