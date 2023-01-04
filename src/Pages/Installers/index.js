import './index.css';
import api from '../../Services/api.js';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Config from './../../config.json';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Installers(){
    const[loadding, setLoadding] = useState(true);
    const[lista, setLista] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        async function BuscarRanking(){
            await api.get('/BuscarInstaladores.php')
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
            <div className='loaddingDiv'>
                <img src={require('../../Assets/hug.gif')} alt="Loading..." />
            </div>
        )
    }

    return(
        <div className="containerpage">
            <div className='tabelaInstaladores'>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <h3>
                            Versão
                            </h3>
                        </th>
                        <th>
                            <h3>
                            Link
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
                                            {item.Versao}
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                        <a className='botaoBaixarArquivo' onClick={() => Baixar(item.Diretorio)}><CloudDownloadIcon/> Baixar versão {item.Versao}</a>
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

export default Installers;