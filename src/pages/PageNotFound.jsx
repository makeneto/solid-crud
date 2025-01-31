import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <div className="notFound">
            <div className="notFound__card">
                <div className="notFound__card__icons">
                    <img src="images/shape-01.webp" alt="" className="notFound__card__icons--icon-1" />
                    <img src="images/shape-02.svg" alt="" className="notFound__card__icons--icon-2" />
                    <img src="images/shape-03.svg" alt="" className="notFound__card__icons--icon-3" />
                </div>
                <h1><span className="blue__word">404</span> - Página não encontrada</h1>
                <p>Desculpe, a página que você procurou não existe.</p>
                <Link to="/">
                    <button>Voltar para a página inicial</button>
                </Link>
            </div>
        </div>
    )
}
