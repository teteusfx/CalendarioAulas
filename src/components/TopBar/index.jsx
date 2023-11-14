import { Link } from 'react-router-dom'
import styles from './TopBar.module.css'

function TopBar() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Sandra Alves</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default TopBar
