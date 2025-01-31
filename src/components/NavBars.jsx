import { useState } from "react"
import { Link } from "react-router-dom"

export default function NavBars({ isLoggedIn, setIsLoggedIn }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('sb-zbkmswrabygspfhtwloq-auth-token');
        setIsLoggedIn(false);
    };

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    const disableLink = "#"

    return (
        <>
            <nav id="main__nav">
                <div className="nav__logo">
                    <img src="images/logo-dark.svg" alt="" className="logo" />
                </div>
                <div className="menu-links">
                    <p>
                        <a href={disableLink} target="_self" className="page__link">Home</a>
                    </p>
                    <ul>
                        <li className="stores">
                            <a href={disableLink} target="_self" className="page__link">Loja</a>
                        </li>
                    </ul>
                    <p>
                        <a href={disableLink} target="_self" className="page__link">Blogs</a>
                    </p>
                    <p>
                        <a href={disableLink} target="_self" className="page__link">Recursos</a>
                    </p>
                    <p>
                        <a href={disableLink} target="_self" className="page__link">Suporte</a>
                    </p>
                </div>
                <div className="nav__others">
                    <Link
                        to="/login"
                        onClick={handleLogout}
                        target="_self"
                        id='logOut'
                    >
                        Terminar sessão
                    </Link>
                </div>
            </nav>


            {/* NavBar Mobile */}
            <article className="intro__header">
                <img src="./images/logo-dark.svg" alt="" className="logo__tablet" />
            </article>

            <nav className="nav">
                <ul className="nav__list">
                    <li>
                        <a href={disableLink} className="nav__link">
                            <i className="ri-home-smile-2-line"></i>
                        </a>
                    </li>

                    <li>
                        <a href={disableLink} className="nav__link">
                            <i className="ri-store-line"></i>
                        </a>
                    </li>

                    <li>
                        <button
                            className="nav__expand"
                            id="nav-expand"
                            onClick={handleClick}
                        >
                            <i className={`ri-add-line nav__expand-icon ${isExpanded ? 'rotate-icon' : ''}`}></i>
                        </button>

                        <ul className={`nav__expand-list ${isExpanded ? 'show-list' : ''}`}>
                            <li>
                                <a href={disableLink} className="nav__expand-link">
                                    <i className="ri-customer-service-2-line"></i>
                                    <span>Suporte</span>
                                </a>
                            </li>
                            <li>
                                <a href={disableLink} className="nav__expand-link">
                                    <i className="ri-news-line"></i>
                                    <span>Blogs</span>
                                </a>
                            </li>
                            <li>
                                <Link
                                    to='/login'
                                    className="nav__expand-link"
                                    onClick={handleLogout}
                                >
                                    <i className="ri-logout-box-r-line"></i>
                                    <span>Sair</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href={disableLink} className="nav__link">
                            <i className="ri-gamepad-line"></i>
                        </a>
                    </li>

                    <li>
                        <Link to="/" className="nav__link active-link">
                            <i className="ri-search-line"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
