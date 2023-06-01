// header with material-ui
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import logo from '../assets/Pokédex_logo.png'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        <img src={logo} alt="logo" style={{ height: '40px' }} />
                    </Link>
                </Typography>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/favorites" style={{ color: 'white', textDecoration: 'none', marginLeft: '16px' }}>
                        My team
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header