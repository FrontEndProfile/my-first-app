import { Link } from "react-router-dom";
import About from "./About";


const Home = () => {
    return (
        <>
            {/* HEADER */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to='/'>PIZZA~BAR</Link>
                    <button className="navbar-toggler border-0 border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link" to='Home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='Products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='Cart'>
                                    <div className="add_btn">
                                    <span className="count">0</span>

                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Home;