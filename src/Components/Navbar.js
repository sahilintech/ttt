import logo from '../images/logo.svg';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="left-section">
                    <div className="logo"><img src={logo} alt="ttt" /></div>
                    <h1 className="heading">|STORIES</h1>
                </div>
                <div className="right-section">
                    <button className="navbar-button"><h3>Courses</h3></button>
                </div>
            </nav>
        </>
    )
}
export default Navbar