import {NavLink} from "react-router-dom";

function Header()
{
    return(
        <>
        <div className="navbar navbar-expand-md bg-light navbar-light">
            <span className="navbar-brand">CRUD</span>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navcollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcollapse">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item mx-3"><NavLink exact to="/" className="nav-link headertext " activeClassName="headerlink">Users</NavLink></li>
                    <li className="nav-item mx-3"><NavLink to="/createuser" activeClassName="headerlink  " className="nav-link headertext">Create User</NavLink></li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Header;