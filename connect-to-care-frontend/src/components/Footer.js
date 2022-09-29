import { NavLink } from 'react-router-dom';
const Footer = () => {

    return (
        <footer className="page-footer fixed-bottom bg-primary text-light">
            <div className='container'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink className="nav-link active mt-0 pb-0 pt-0" to="/ConnectToCare">Terms of service</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link mt-0 pb-0 pt-1" to="/about">Privacy policies</NavLink></li>
                </ul>
            </div>
            <div className="container-fluid ">
                <p className="text-center">Copyright &copy;2022 Connect-To-Care.com</p>
            </div>
        </footer>
    )
}
export default Footer