import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Config from './../../config.json';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const pages = ['Home', 'Módulos', 'Instaladores'];
const settings = ['Olá ' + localStorage.getItem(Config.NOMEUSER), 'Usuários', 'Sair'];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function SelecionaOpcao(page) {
    handleCloseNavMenu();
    if (page === pages[0]) {
      navigate('/Home', { replace: true });
    } else if (page === pages[1]) {
      navigate('/modulos/1', { replace: true });
    } else if (page === pages[2]) {
      navigate('/instaladores', { replace: true });
    }
  }

  function SelecionaOpcaoUsuario(setting) {
    handleCloseUserMenu();
    if (setting === settings[1]) {
      navigate('/usuarios', { replace: true });
    } else if (setting === settings[2]) {
      sair();
    }
  }

  function sair() {
    localStorage.setItem(Config.LOGADO, 0);
    localStorage.setItem(Config.USUARIO, '');
    localStorage.setItem(Config.NOMEUSER, '');
    localStorage.setItem(Config.TOKEN, '');
    localStorage.removeItem(Config.LOGADO);
    localStorage.removeItem(Config.USUARIO);
    localStorage.removeItem(Config.NOMEUSER);
    localStorage.removeItem(Config.TOKEN);

    toast.success('Volte sempre!');
    navigate('/', { replace: true });
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        mb: 2,
        background: 'linear-gradient(90deg, #1a73e8 0%, #1976d2 100%)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BatteryChargingFullIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              background: 'linear-gradient(90deg, #ffffff, #dfe9f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
            }}
          >
            CrudForms
          </Typography>

          {/* Menu Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => SelecionaOpcao(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <BatteryChargingFullIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              background: 'linear-gradient(90deg, #ffffff, #dfe9f3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
            }}
          >
            CrudForms
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => SelecionaOpcao(page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  px: 2,
                  borderRadius: '8px',
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Login / Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            {localStorage.getItem(Config.LOGADO) == null || localStorage.getItem(Config.LOGADO) === '0' ? (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                }}
              >
                Login
              </Button>
            ) : (
              <>
                <Tooltip title="Opções">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Usuário" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => SelecionaOpcaoUsuario(setting)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
