// Componente que cria e configura o componente de toggle que quando ativo, mostra os jogos Demos
export default function ToggleDemo({ toggleDemo, setToggleDemo }) {
    return (
        <div className='toggle__container'>
            <div className="checkbox-con">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={toggleDemo}
                    onChange={(e) => setToggleDemo(e.target.checked)}
                />
            </div>

            <p className='small__text--nogray'>Explore uma seleção de jogos gratuitos e divirta-se sem gastar nada!</p>
        </div>
    )
} 