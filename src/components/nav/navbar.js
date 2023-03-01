import './navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div>LG</div>
            <div className="navbar-list-container">
                <ol type="i">
                    <li>About me</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ol>
            </div>
        </nav>
    )
}

export default Navbar