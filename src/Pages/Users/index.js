import './index.css';
import api from '../../Services/api.js';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Config from './../../config.json';

function Users(){
    const[loadding, setLoadding] = useState(true);
    const[lista, setLista] = useState({});
    const[usuarioLogado] = useState(parseInt(sessionStorage.getItem(Config.CodigoUsuario) ? sessionStorage.getItem(Config.CodigoUsuario) : -1));
    const navigate = useNavigate();

    useEffect(() => {

        async function BuscarRanking(){
            await api.get('/BuscarUsuarios.php?codigoUsuarioPai=' + sessionStorage.getItem(Config.CodigoUsuario))
            .then((response) => {
                if(response.data.Sucesso){
                    setLista(response.data.Lista);
                }
                setLoadding(false);
            }).catch(() => {
                navigate('/', {replace: true});
                return;
            });
        }

        BuscarRanking();
    }, [])

    if(sessionStorage.getItem(Config.LOGADO) == null || sessionStorage.getItem(Config.LOGADO) === '0'){
        navigate('/', {replace: true});
    }

function AdicionarUsuario(){
    navigate('/criarUsuario', {replace: true});
}

    if(loadding){
        return(
            <div className='loaddingDiv'>
                <img src={require('../../Assets/hug.gif')} alt="Loading..." />
            </div>
        )
    }

    return(
        <div className="containerpage">
            <div className='tabelaUsers'>
            <button onClick={AdicionarUsuario}>Adicionar usuário</button>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <h3>
                            Login
                            </h3>
                        </th>
                        <th>
                            <h3>
                            Administrador
                            </h3>
                        </th>
                        <th>
                            <h3>
                            Desenvolvedor
                            </h3>
                        </th>
                        <th>
                            <h3>
                            Email
                            </h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista?.map((item) => {
                            return(
                                <tr key={item.Codigo}>
                                    <td>
                                        <h4>
                                            {item.Login}
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                        {item.Administrador === '1' ? 'Sim' : 'Não'}
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                        {item.Desenvolvedor === '1' ? 'Sim' : 'Não'}
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                            {item.Email}
                                        </h4>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Users;