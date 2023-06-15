import './index.css';
import api from '../../Services/api.js';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { toast } from 'react-toastify';

function Installers(){
    const[loadding, setLoadding] = useState(true);
    const[lista, setLista] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        async function BuscarInstaladores(){
            await api.get('/CrudFormsInstalador')
            .then((response) => {
                if(response.data.success){
                    setLista(response.data.object);
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
                                            {item.versao}
                                        </h4>
                                    </td>
                                    <td>
                                        <h4>
                                        <a className='botaoBaixarArquivo' onClick={() => Baixar(item.diretorio)}><CloudDownloadIcon/> Baixar versão {item.Versao}</a>
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