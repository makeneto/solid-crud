import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useLogin } from '../features/authentication/useLogin'

export default function Login({ isLoggedIn, setIsLoggedIn }) {
    const { register } = useForm();
    const [fullName, setFullName] = useState()
    const [emailGoogle, setEmailGoogle] = useState()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail("");
                    setPassword("");
                },
            }
        );
    }

    const clientId = "515764909201-8c54dulo1tcj5oslhdept4hlkgrv3tlo.apps.googleusercontent.com"

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://accounts.google.com/gsi/client"
        script.async = true
        script.defer = true
        script.onload = () => {
            window.google.accounts.id.initialize({
                client_id: clientId,
                callback: handleLogin,
            })
        }
        document.head.appendChild(script)
    })

    const handleLogin = (response) => {
        console.log('Resposta do Google', response)

        if (response && response.credential) {
            const decoded = jwtDecode(response.credential)

            console.log(decoded)

            const { email, name } = decoded

            setEmailGoogle(email)
            setFullName(name)
            setIsLoggedIn(true)

        }
    }

    const handleClick = () => {
        console.log("Botão de login clicado!")
        window.google.accounts.id.prompt()
    }


    return (
        <GoogleOAuthProvider clientId={clientId}>

            <form className="cadastro" id="signIn" onSubmit={handleSubmit}>
                {!isLoggedIn && <img src="/images/logo-dark.svg" alt="logo" className="cadastro__logo" />}

                <div className={isLoggedIn ? 'cadastro__first__block--avatar' : 'cadastro__first__block'}>
                    <h2>{isLoggedIn ?
                        'Informações do Usuário'
                        :
                        'Bem-vindo de Volta!'}
                    </h2>
                    <p className="small__text">{isLoggedIn ?
                        'Antes de prosseguirmos, revise as informações abaixo para garantir que estão corretas'
                        :
                        'Acesse sua conta para descobrir novos jogos e ofertas exclusivas!'}
                    </p>


                    <div className="cadastro__grid">
                        {isLoggedIn ? (
                            <div className='user'>
                                <img
                                    src={`https://robohash.org/${fullName}`}
                                    alt={`${fullName}'s Profile`}
                                    className='user__profile'
                                />
                                <p className='user__name'>{fullName}</p>
                                <p className='user__email'>
                                    <svg width="31px" height="31px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        fill="#000000" className="svg2">
                                        <g id="SVGRepo_bgCarrier"></g>
                                        <g id="SVGRepo_tracerCarrier"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>Google-color</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs> </defs>
                                            <g id="Icons" stroke="none" fill="none" fillRule="evenodd">
                                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                                        <path
                                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                            id="Fill-1" fill="#FBBC05"> </path>
                                                        <path
                                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                            id="Fill-2" fill="#EB4335"> </path>
                                                        <path
                                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                            id="Fill-3" fill="#34A853"> </path>
                                                        <path
                                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                            id="Fill-4" fill="#4285F4"> </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    {emailGoogle}
                                </p>
                            </div>
                        ) : (
                            <>
                                <label htmlFor="email">
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        name="iemail"
                                        id="email"
                                        placeholder="Digite seu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                        {...register("email", { required: "Este campo é obrigatório" })}
                                    />
                                </label>

                                <label htmlFor="senha">
                                    <p>Senha</p>
                                    <input
                                        type="password"
                                        name="isenha"
                                        id="senha"
                                        placeholder="Digite sua senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isLoading}
                                        {...register("senha", { required: "Este campo é obrigatório" })}
                                    />
                                </label>

                                <h4 className="cadastro__grid--forget">
                                    <a href="/src/pages/cadastro/forgot-password.html">Esqueceu a senha?</a>
                                </h4>
                            </>
                        )}
                        <button
                            to={isLoggedIn ? "/" : "/login"}
                            className="cadastro__grid--button cadastro__grid--submit"
                            type="submit"
                            disabled={isLoading}
                        >
                            {!isLoggedIn ? 'Entrar' : 'Confirmar'}
                        </button>
                    </div>
                </div>

                {!isLoggedIn &&
                    <p className="cadastro__divider">Ou entrar com</p>
                }
            </form>



            {!isLoggedIn &&
                <>
                    <div className="cadastro__second__block">
                        <button onClick={handleClick} className="google__button">
                            {/* Continuar com Google */}
                            <svg width="31px" height="31px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                fill="#000000" className="svg2">
                                <g id="SVGRepo_bgCarrier"></g>
                                <g id="SVGRepo_tracerCarrier"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>Google-color</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs> </defs>
                                    <g id="Icons" stroke="none" fill="none" fillRule="evenodd">
                                        <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                            <g id="Google" transform="translate(401.000000, 860.000000)">
                                                <path
                                                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                    id="Fill-1" fill="#FBBC05"> </path>
                                                <path
                                                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                    id="Fill-2" fill="#EB4335"> </path>
                                                <path
                                                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                    id="Fill-3" fill="#34A853"> </path>
                                                <path
                                                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                    id="Fill-4" fill="#4285F4"> </path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            Google
                        </button>
                    </div>

                    <p className="cadastro__first__block--link">
                        Não tens uma conta?
                        <Link to="/signup"> Cadastrar-se</Link>
                    </p>
                </>
            }
            <p className="cadastro__first__block--version small__text">Solid v1.2.1</p>
        </GoogleOAuthProvider>
    )
}