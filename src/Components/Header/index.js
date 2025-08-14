import './index.css';
import ResponsiveAppBar from '../Navbar';
import Toolbar from '@mui/material/Toolbar';

function Header(){
    return (
        <>
            <ResponsiveAppBar/>
            {/* Offset for fixed app bar */}
            <Toolbar />
        </>
    )
}

export default Header;