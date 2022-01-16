import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>ROGMovie</h1>
                    <a href="https://github.com/karlorms">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">
                                /karlorms
                            </p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar