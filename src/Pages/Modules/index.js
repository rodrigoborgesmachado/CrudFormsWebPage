import './index.css';

function Modules() {
    return (
        <div className='containerpage'>

            <h3><b>INSTALAÇÃO: </b><br /><br /></h3>

            <h4>
                Para a instalção do sistema CrudForms, é necessário ir na aba "instaladores", na tela inicial do site.
                <br />
                Quando você clicar nesta aba aparcerá uma lista das versões do CrudForms, basta clicar em "baixar versão"
                <br />
                e o sistema já estará sendeo baixado na sua máquina. O sistema passa por atualizações, portanto baixe sempre
                <br />
                a ultima versão diponibilizada.
                <br />
            </h4>




            <h3><b>Conhecendo o CrudForms...</b><br /><br /></h3>

           
            <h4>
                Após a instalção do CrudForms e o mesmo estiver rodando em sua máquina, a seguinte imagem aparecerá no seu computador:
                <br />
                
        <div class="imagem">

          <img src={require('../../Assets/Images/telaInicial.png')} alt="" /> <br />
              
        </div> 

                Para logar basta preencher os campos de login e senha. O login e a senha do aplicativo são os mesmos que você criou para fazer
                login no site anteriormente.
                <br /><br />

                E depois de logar, essa será a tela que aparecerá para você:
                
                <br />
                <img src={require('../../Assets/Images/telaCrud.png')} alt="" /> <br /><br />

                E aqui podemos observar alguma coisas... <br />

                No canto superior esquerdo, temos um ícone de "Opções", ao clicar veremos o seguinte: <br />

                <img src={require('../../Assets/Images/opcoes.png')} alt="" /> <br /><br />




                <h3>Selecionar base:  </h3>

                <h4>

                    Essa opção seleciona o banco de dados que você deseja conectar para fazer consultas. Essa opção abre uma janela na qual é preenchido
                    <br />
                    a connectionstring e qual tipo do banco que está sendo conectado.
                    <br />

                    <img src={require('../../Assets/Images/telaConnectionstring.png')} alt="" /> <br /><br />


                </h4>

                <h3>Atualizar Tabelas: </h3>
                
                <h4>

                    Atualiza as tabelas 

                </h4>












            </h4>














        </div >
    )
}

export default Modules;