import './index.css';
import { useParams, useNavigate } from 'react-router-dom';

function Modules() {
    const navigate = useNavigate();
    const{filtro} = useParams();

    function abreTela(tela){
        navigate('/modulos/' + tela, {replace: true});
    }

    return (
        <div className='containerpage'>
            <div className='menu'>
                <h3 onClick={() => abreTela(1)}>➡️ Introdução</h3>
                <h3 onClick={() => abreTela(17)}>➡️ Instalação</h3>
                <h3 onClick={() => abreTela(2)}>➡️ Tela de Login</h3>
                <h3 onClick={() => abreTela(3)}>➡️ Tela Principal</h3>
                <h3 onClick={() => abreTela(16)}>➡️ Tela GENÉRICA</h3>
                <h3 onClick={() => abreTela(4)}>➡️ Seleciona Base</h3>
                <h3 onClick={() => abreTela(5)}>➡️ Atualiza Tabelas</h3>
                <h3 onClick={() => abreTela(6)}>➡️ Configura quantidade de linhas da tabela</h3>
                <h3 onClick={() => abreTela(7)}>➡️ Opção filtrar na Abertura da tela</h3>
                <h3 onClick={() => abreTela(8)}>➡️ Opção abrir consulta genérica</h3>
                <h3 onClick={() => abreTela(9)}>➡️ Opção consultas salvas</h3>
                <h3 onClick={() => abreTela(10)}>➡️ Opção gerar DER</h3>
                <h3 onClick={() => abreTela(11)}>➡️ Opções Devtools</h3>
                <h3 onClick={() => abreTela(12)}>➡️ Opção enumera linhas das tabelas</h3>
                <h3 onClick={() => abreTela(13)}>➡️ Opção quantidade de dias para atualização</h3>
                <h3 onClick={() => abreTela(14)}>➡️ Opção gerenciar alarmes</h3>
                <h3 onClick={() => abreTela(15)}>➡️ Opção importar planilha CSV</h3>
            </div>
            {
                filtro === '17' ?
                <div className='texto'>
                    <h3><b>INSTALAÇÃO: </b><br /><br /></h3>
                    <h4>
                        Para efetuar a instalação do CrudForms em sua máquina é necessário primeiramente que esteja utilizando o Windows. Indo à página <a onClick={() => navigate('/instaladores', true)}><u>INSTALADORES</u></a>, é possível fazer o download da última versão.
                        <br/>
                        Após o download, é necessário executar o programa como administrador. Ao executa-lo irá aparecer a imagem:
                        <br/>
                        <img src={require('../../Assets/Images/1 - Instalador.png')} alt="" /><br/>
                        Basta ir em mais informações e executar o instalador.
                        <br/>
                        A primeira parte do instalador segue com opção de criar um atalho na Área de Trabalho ou não:
                        <br/>
                        <img src={require('../../Assets/Images/2 - Instalador.png')} alt="" /><br/>
                        Após prosseguir irá aparecer a descrição do que estará sendo feito:
                        <br/>
                        <img src={require('../../Assets/Images/3 - Instalador.png')} alt="" /><br/>
                        Basta clicar em instalar e aparecerá o final da instalação:
                        <br/>
                        <img src={require('../../Assets/Images/4 - Instalador.png')} alt="" /><br/>
                        Após instalador aparecerá a tela de confirmação de intalação, basta executar o novo aplicativo.
                        <br/>
                        <img src={require('../../Assets/Images/5 - Instalador.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '2' ?
                <div className='texto'>
                    <h3><b>LOGIN: </b><br /><br /></h3>
                    <h4>
                        O controle de usuário e senha são feitos diretamente pelo site, na opção Login. 
                        Você pode criar seu usuário e criar também usuários para o seu time, colocando as configurações desejadas de acesso.
                        <br/>
                        <img src={require('../../Assets/Images/6 - Login.png')} alt="" /><br/>
                        Com o usuário e senha irá abrir a tela principal do sistema.
                    </h4>
                </div>
                :
                filtro === '3' ?
                <div className='texto'>
                    <h3><b>TELA PRINCIPAL: </b><br /><br /></h3>
                    <h4>
                        A tela principal segue a seguir:
                        <br/>
                        <img src={require('../../Assets/Images/6 - Tela Principal.png')} alt="" /><br/>
                        Listado a baixo estão as opções disponíveis para o sistema:
                        <br/>
                        <img src={require('../../Assets/Images/7 - Tela Principal.png')} alt="" /><br/>
                        Cada opção está listada abaixo e ao lado:
                            <h3 onClick={() => abreTela(4)}>➡️ Seleciona Base</h3>
                            <h3 onClick={() => abreTela(5)}>➡️ Atualiza Tabelas</h3>
                            <h3 onClick={() => abreTela(6)}>➡️ Configura quantidade de linhas da tabela</h3>
                            <h3 onClick={() => abreTela(7)}>➡️ Opção filtrar na Abertura da tela</h3>
                            <h3 onClick={() => abreTela(8)}>➡️ Opção abrir consulta genérica</h3>
                            <h3 onClick={() => abreTela(9)}>➡️ Opção consultas salvas</h3>
                            <h3 onClick={() => abreTela(10)}>➡️ Opção gerar DER</h3>
                            <h3 onClick={() => abreTela(11)}>➡️ Opções Devtools</h3>
                            <h3 onClick={() => abreTela(12)}>➡️ Opção enumera linhas das tabelas</h3>
                            <h3 onClick={() => abreTela(13)}>➡️ Opção quantidade de dias para atualização</h3>
                            <h3 onClick={() => abreTela(14)}>➡️ Opção gerenciar alarmes</h3>
                            <h3 onClick={() => abreTela(15)}>➡️ Opção importar planilha CSV</h3>
                    </h4>
                </div>
                :
                filtro === '4' ?
                <div className='texto'>
                    <h3><b>SELECIONA A BASE </b><br /><br /></h3>
                    <h4>
                        A tela de configuração de conexão com o banco de dados segue asseguir. Nela é necessários colocar a ConnectionString para acessar a base, assim como selecionar qual o tipo de banco que deseja conectar. Esse dado não é salvo nos servidores, apenas na aplicação local, sendo assim, caso tenha mais usuários, deve ser compartilhado a ConnectionString com os demais.
                        <br/>
                        <img src={require('../../Assets/Images/8 - Configurando conexão.png')} alt="" /><br/>
                        Necessário selecionar o tipo do banco:
                        <br/>
                        <img src={require('../../Assets/Images/9 - Configurando conexão.png')} alt="" /><br/>
                        Configurar o nome da base (opcional) e a ConnectionString. No exemplo abaixo está sendo selecionado um banco SQLite de um sistema de Loja de Roupas (SunSale Pro):
                        <br/>
                        <img src={require('../../Assets/Images/10 - Configurando conexão.png')} alt="" /><br/>
                        Após confirmar a conexão aparece a mensagem de que foi possível conectar com a base:
                        <br/>
                        <img src={require('../../Assets/Images/11 - Configurando conexão.png')} alt="" /><br/>
                        Depois de confirmado é importado os dados do banco para a aplicação. Essa função busca apenas as tabelas e colunas do banco:
                        <br/>
                        <img src={require('../../Assets/Images/12 - Configurando conexão.png')} alt="" /><br/>
                        Depois de configurado será listado na tela principal todas as tabelas: 
                        <br/>
                        <img src={require('../../Assets/Images/13 - tela principal.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '5' ?
                <div className='texto'>
                    <h3><b>ATUALIZA TABELAS</b><br /><br /></h3>
                    <h4>
                        A opção de atualização de tabelas basicamente faz a conexão com o banco já configurado buscando alterações no esquema das tabelas e das colunas para atualizar o CrudForms.
                        <br/>
                        <img src={require('../../Assets/Images/7 - Tela Principal.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '6' ?
                <div className='texto'>
                    <h3><b>QUANTIDADE DE LINHAS DAS TABELAS</b><br /><br /></h3>
                    <h4>
                        A opção de "Quantidade de linhas das tabelas" possibilita confirar quantas linhas será limitada para ser apresentada na tela de cada tabela. A listagem dos itens da tabela respeitarã esse limite, assim como as opções de exportação, assim deve ser feito filtragem e ordenação conforme necessário para apresentação das informações. 
                        <br/>
                        <img src={require('../../Assets/Images/14 - quantidade linhas por tabela.png')} alt="" /><br/>
                        Ao selecionar a opção na tela principal é aberto a tela acima para configuração do valor.
                    </h4>
                </div>
                :
                filtro === '7' ?
                <div className='texto'>
                    <h3><b>FILTRAR NA ABERTURA DA TELA</b><br /><br /></h3>
                    <h4>
                        Essa opção refere se, ao abrir uma tabela, os itens serão listados automaticamente ou se será listado sem itens para que o usuário possa fazer os filtros ou limpar a filtragem para listagem das informações.
                        <br/>
                        <img src={require('../../Assets/Images/15 - filtrar na abertura da tela.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '8' ?
                <div className='texto'>
                    <h3><b>ABRIR CONSULTA GENÉRICA</b><br /><br /></h3>
                    <h4>
                        A aplicação permite que seja listado dados das tabelas de forma individual, então caso o usuário queira montar consultas com joins ou consultas complexas, há a possibilidade nessa opção para executar esses comando, desde que o mesmo retorne dados.
                        <br/>
                        <img src={require('../../Assets/Images/16 - abrir consulta genérica.png')} alt="" /><br/>
                        Como exemplo, essa querie irá fazer a contagem dos itens na tabela SSSCLIPED:
                        <br/>
                        <img src={require('../../Assets/Images/17 - abrir consulta genérica.png')} alt="" /><br/>
                        Após preenchido a consulta e clicado em confirmar, é listado os dados na seguinte tela:
                        <br/>
                        <img src={require('../../Assets/Images/18 - abrir consulta genérica.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '9' ?
                <div className='texto'>
                    <h3><b>CONSULTAS SALVAS</b><br /><br /></h3>
                    <h4>
                        A opção de consultas salvas serve para visualizar todas as consultas que foram salvas, afim de agrupar todas para facilitar caso o usuário tenha alguma consulta complexa que ele execute eventualmente.
                        <br/>
                        <img src={require('../../Assets/Images/54 - consultas salvas.png')} alt="" /><br/>
                        A tela segue a seguir:
                        <br/>
                        <img src={require('../../Assets/Images/55 - consultas salvas.png')} alt="" /><br/>
                        A tela dá a opção para edição da conulta se necessário, assim como exclusão e execução da consulta.
                    </h4>
                </div>
                :
                filtro === '10' ?
                <div className='texto'>
                    <h3><b>GERAR DER</b><br /><br /></h3>
                    <h4>
                        A opção de geração de DER gera um documento DER (Documento de Entidade Relacionais) com as informações da base de dados conectada.
                        <br/>
                        <img src={require('../../Assets/Images/19 - Abrir DER.png')} alt="" /><br/>
                        Após selecionado a opção é gerado o relatório:
                        <br/>
                        <img src={require('../../Assets/Images/20 - Abrir DER.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '11' ?
                <div className='texto'>
                    <h3><b>OPÇÕES DEVTOOLS</b><br /><br /></h3>
                    <h4>
                        As opções DevTools serve para disponibilizar funções interessantes para programadores, caso necessário, como Identar JSON ou <a onClick={() => navigate('/modulos/15', true)}><u>Importar Planilha CSV</u></a>:
                        <br/>
                        <img src={require('../../Assets/Images/21 - Devtools.png')} alt="" /><br/>
                        Indentar JSON abre a janela a seguir, com opção de colar o json a ser identado, assim como copiar a informação após a indentação.
                        <br/>
                        <img src={require('../../Assets/Images/22 - Identar Json.png')} alt="" /><br/>
                        Json a ser identado:
                        <br/>
                        <img src={require('../../Assets/Images/23 - Identar Json.png')} alt="" /><br/>
                        Após identação:
                        <br/>
                        <img src={require('../../Assets/Images/24 - Identar Json.png')} alt="" /><br/>
                        Você tem a opção de copiar pelo botão "Copiar" ou mesmo selecionando o texto.
                        <br/>
                        A opção de IMPORTAR PLANILHA CSV funciona buscando um arquivo csv e criando uma tabela para o mesmo na base do conectada, importando os dados da planilha para essa tabela. A tabela criada é com o mesmo nome a ser configurado, assim como as colunas são referente às primeiras colunas do arquivo CSV. Todas as colunas são criadas como VARCHAR (dependendo do tipo de base conectada).
                        <br/>
                        A primeira tela permite a seleção da planilha:
                        <br/>
                        <img src={require('../../Assets/Images/25 - importar planilha.png')} alt="" /><br/>
                        O arquivo a ser importado:
                        <br/>
                        <img src={require('../../Assets/Images/26 - importar planilha.png')} alt="" /><br/>
                        Preenchendo o formulário para importação:
                        <br/>
                        <img src={require('../../Assets/Images/27 - importar planilha.png.png')} alt="" /><br/>
                        Após importação:
                        <br/>
                        <img src={require('../../Assets/Images/28 - importar planilha.png')} alt="" /><br/>
                        O sistema atualiza as tabelas e lista a nova tabela importada:
                        <br/>
                        <img src={require('../../Assets/Images/29 - importar planilha.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '12' ?
                <div className='texto'>
                    <h3><b>ENUMERA LINHAS DA TABELA</b><br /><br /></h3>
                    <h4>
                        Essa opção permite que seja enumerado as linhas da tabela na tela de listagem dos dados. Se ativa, adiciona uma coluna com a enumeração da linha:
                        <br/>
                        <img src={require('../../Assets/Images/30 - Enumerar linhas da tabela.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '13' ?
                <div className='texto'>
                    <h3><b>QUANTIDADE DE DIAS PARA ATUALIZAÇÃO</b><br /><br /></h3>
                    <h4>
                        Essa opção permite configurar a quantidade de dias para atualizar os dados da base de dados de forma automática.
                        <br/>
                        <img src={require('../../Assets/Images/31 - Quantidade de dias para atualização.png')} alt="" /><br/>
                        Conforme configurado, a cada 30 dias o CrudForms irá buscar atualização da estrutura das tabelas na base configurada.
                        <br/>
                        <br/>
                        A opção Buscar Atualização a seguir é para verificar se há atualizações do CrudForms disponível. Essa opção é feita no momento de login também.
                        <br/>
                        <img src={require('../../Assets/Images/32 - Buscar atualização.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '14' ?
                <div className='texto'>
                    <h3><b>GERENCIAR ALARMES</b><br /><br /></h3>
                    <h4>
                        A opção de Alarmes no sistema possibilita cadastrar consultas a serem executadas em x minutos (a ser configurado) e enviar o resultado para o email (também configurado). O email é enviado sempre que há alteração no retorno dos dados da consulta salva. 
                        <br/>
                        <img src={require('../../Assets/Images/33 - Gerenciar alarmes.png')} alt="" /><br/>
                        Tela de alarmes:
                        <br/>
                        <img src={require('../../Assets/Images/34 - Gerenciar alarmes.png')} alt="" /><br/>
                        Para cadastrar o alarme basta preencher o formulário após clicar na opção Adicionar:
                        <br/>
                        <img src={require('../../Assets/Images/35 - Gerenciar alarmes.png')} alt="" /><br/>
                        Automaticamente será preenchido o email do usuário logado assim como intervalo de 5 minutos para execução da consulta (tempo mínimo de intervalo).
                        <br/>
                        A seguir será cadastrada uma consulta que conta a quantidade de vendas. Essa consulta será executada a cada 10 minutos, sempre que o resultado for diferente será enviado ao email configurado:
                        <br/>
                        <img src={require('../../Assets/Images/36 - Gerenciar alarmes.png')} alt="" /><br/>
                        Após cadastrado é executado a consulta do alarme:
                        <br/>
                        <img src={require('../../Assets/Images/37 - Gerenciar alarmes.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/38 - Gerenciar alarmes.png')} alt="" /><br/>
                        Ao final é enviado o primeiro email:
                        <br/>
                        <img src={require('../../Assets/Images/39 - Gerenciar alarmes.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '15' ?
                <div className='texto'>
                    <h3><b>IMPORTAR CSV</b><br /><br /></h3>
                    <h4>
                        A opção de IMPORTAR PLANILHA CSV funciona buscando um arquivo csv e criando uma tabela para o mesmo na base do conectada, importando os dados da planilha para essa tabela. A tabela criada é com o mesmo nome a ser configurado, assim como as colunas são referente às primeiras colunas do arquivo CSV. Todas as colunas são criadas como VARCHAR (dependendo do tipo de base conectada).
                        <br/>
                        A primeira tela permite a seleção da planilha:
                        <br/>
                        <img src={require('../../Assets/Images/25 - importar planilha.png')} alt="" /><br/>
                        O arquivo a ser importado:
                        <br/>
                        <img src={require('../../Assets/Images/26 - importar planilha.png')} alt="" /><br/>
                        Preenchendo o formulário para importação:
                        <br/>
                        <img src={require('../../Assets/Images/27 - importar planilha.png.png')} alt="" /><br/>
                        Após importação:
                        <br/>
                        <img src={require('../../Assets/Images/28 - importar planilha.png')} alt="" /><br/>
                        O sistema atualiza as tabelas e lista a nova tabela importada:
                        <br/>
                        <img src={require('../../Assets/Images/29 - importar planilha.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '16' ?
                <div className='texto'>
                    <h3><b>TELA GENÉRICA: </b><br /><br /></h3>
                    <h4>
                        Após selecionar qualquer tabela na listagem à esquerda, é aberta a tela genérica que lista as informações dessa tabela selecionada:
                        Listado a baixo estão as opções disponíveis para o sistema:
                        <br/>
                        <img src={require('../../Assets/Images/40 - Tela de tabela genérica.png')} alt="" /><br/>
                        Nessa tela há as opções completa de CRUD, além de opção de filtragem e ordenação. Nela ainda possui as opções para exportação, para salvar consulta e para configurar a ordem de apresentação das colunas em tela.
                        <br/>
                        <img src={require('../../Assets/Images/41 - Tela de tabela genérica.png')} alt="" /><br/>
                        <br/>
                        A exportação CSV gera o arquivo, após selecionado o diretório:
                        <br/>
                        <img src={require('../../Assets/Images/42 - eportar csv.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/43 - eportar csv.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/44 - eportar csv.png')} alt="" /><br/>
                        <br/>
                        A exportação JSON gera o arquivo, após selecionado o diretório:
                        <br/>
                        <img src={require('../../Assets/Images/45 - eportar csv.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/46 - eportar csv.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/47 - eportar csv.png')} alt="" /><br/>
                        <br/>
                        A exportação XML gera o arquivo, após selecionado o diretório:
                        <br/>
                        <img src={require('../../Assets/Images/48 - exportar xml.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/49 - exportar xml.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        A opção para salvar a consulta abre o fomulário de salvar a consulta, onde é possível configurar o nome da consulta. Para acessar as consultas salvas basta ir em opções na tela principal.
                        <br/>
                        <img src={require('../../Assets/Images/51 - salvar consulta.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/52 - salvar consulta.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/53 - salvar consulta.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/54 - consultas salvas.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/55 - consultas salvas.png')} alt="" /><br/>
                        Depois de salvo a consulta, é possível ainda adiciona-la ao alarme:
                        <br/>
                        <img src={require('../../Assets/Images/56 - adicionando alarme consulta salva.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/57 - adicionando alarme consulta salva.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/58 - adicionando alarme consulta salva.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        A opção de configuração das colunas possibilita ordenação e até mesmo inibição das mesmas:
                        <br/>
                        <img src={require('../../Assets/Images/59 - configurando colunas.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/60 - configurando colunas.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/61 - configurando colunas.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/62 - configurando colunas.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        A opção para filtrar os dados na tela genérica possibilita que seja filtrado por palavra, essa busca não busca se contém exatamente a palavra, mas se parte do valor contém o conteúdo filtrado:
                        <br/>
                        <img src={require('../../Assets/Images/63 - Filtrar.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/64 - Filtrar.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        A função de ordenação possibilita escolher o campo a ser ordenado e qual o tipo de ordenação a ser feito:
                        <br/>
                        <img src={require('../../Assets/Images/65 - Order by.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/66 - Order by.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        A opção para visualizar apresenta os dados da linha selecionada, apenas com opção de visualizar as informações e copialar par a área de transferência. Por essa tela pode-se se abrir a tela de edição:
                        <br/>
                        <img src={require('../../Assets/Images/67 - visualizar.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        A tela de edição permite alterar o campo, apenas os campos alterados serão atualizados na base. Essa opção é apenas para usuários administradores, conforme cadastro no site do CrudForms. Se não houver pk não há como editar.
                        <br/>
                        <img src={require('../../Assets/Images/68 - editar.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/69 - editar.png')} alt="" /><br/>
                        <img src={require('../../Assets/Images/70 - editar.png')} alt="" /><br/>
                        <br/>
                        <br/>
                        Assim como a opção de edição, a opção EXCLUIR é apenas para usuários administradores, conforme cadastro no site do CrudForms. Ela exclui o item a partir de sua PK. Se não houver pk não há como excluir.
                        <br/>
                        <img src={require('../../Assets/Images/71 - excluir.png')} alt="" /><br/>
                    </h4>
                </div>
                :
                filtro === '1' ?
                <div className='texto'>
                    <h3><b>INTRODUÇÃO: </b><br /><br /></h3>
                    <h4>
                        O CrudForms é um sistema desktop desenvolvido em C# que tem como objetivo auxiliar programadores, analistas e testers no seu dia a dia, facilitando a forma de comunicação com banco e adicionando uma interface a mais entre o trabalhador e a base de dados.
                        <br/>
                        Com esse sistema é possível todo o CRUD com qualquer banco de dados, além de geração de relatórios e uma tela de maior facilidade para trabalhar com os dados do sistema. Com ele é possível entender toda a estrutura do banco e suas tabelas, afim de facilitar o trabalho principalmente em sistemas que nunca teve acesso.
                        <br/>
                        Nele é possível editar os dados sem montar o comando UPDATE, assim como fazer DELETE e INSERT.
                    </h4>
                </div>
                :
                <div className='texto'>
                </div>
            }
        </div >
    )
}

export default Modules;
