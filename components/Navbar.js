import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link legacyBehavior href="/">
            <a className="navbar-brand" >Simple portfolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link legacyBehavior href="/blog">
                        <a className="nav-link" >BLogs</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href="/github">
                        <a className="nav-link" >GitHub</a>
                        </Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Navbar;