import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";

export default function SignUp() {
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    function onSubmit({ fullName, email, password }) {
        signup(
            { fullName, email, password },
            {
                onSettled: () => reset(),
            }
        );
    }

    return (
        <div>
            <form
                className="cadastro"
                id="signUp"
                onSubmit={handleSubmit(onSubmit)}
            >
                <img src="/images/logo-dark.svg" alt="logo" className="cadastro__logo" />

                <div className="cadastro__first__block">
                    <h2>Vamos Começar!</h2>
                    <p className="small__text">Cadastre-se e desbloqueie um mundo de jogos incríveis!</p>

                    <div className="cadastro__grid">
                        <label for="fullName">
                            <p>Nome completo</p>
                            <input
                                autoComplete='name'
                                type="text"
                                name="iuser"
                                id="fullName"
                                placeholder="Digite seu nome de usuário"
                                disabled={isLoading}
                                {...register("fullName", { required: "Este campo é obrigatório" })}
                            />
                            <span className="errorInput">{errors?.fullName?.message}</span>
                        </label>

                        <label for="email">
                            <p>Email</p>
                            <input
                                type="email"
                                name="iemail"
                                id="email"
                                placeholder="Digite seu email"
                                disabled={isLoading}
                                {...register("email", {
                                    required: "Este campo é obrigatório",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Por Favor, forneça um email válido",
                                    },
                                })}
                            />
                            <span className="errorInput">{errors?.email?.message}</span>
                        </label>

                        <label for="password">
                            <p>Password</p>
                            <input
                                type="password"
                                name="isenha"
                                id="password"
                                placeholder="Password (min 8 characters)"
                                {...register("password", {
                                    required: "Este campo é obrigatório",
                                    minLength: {
                                        value: 8,
                                        message: "Password needs a minimum of 8 characters",
                                    },
                                })}
                            />
                            <span className="errorInput">{errors?.password?.message}</span>
                        </label>

                        <label for="passwordConfirm">
                            <p>Confirmar password</p>
                            <input
                                type="password"
                                name="iconfirm"
                                id="passwordConfirm"
                                placeholder="Confirme sua senha"
                                disabled={isLoading}
                                {...register("passwordConfirm", {
                                    required: "Este campo é obrigatório",
                                    validate: (value) =>
                                        value === getValues().password || "As passwords precisam ser iguais",
                                })}
                            />
                            <span className="errorInput">{errors?.passwordConfirm?.message}</span>
                        </label>

                        <button
                            to="/login"
                            className="cadastro__grid--button cadastro__grid--submit"
                            type="submit"
                            disabled={isLoading}
                        >
                            Cadastrar-se
                        </button>
                    </div>
                </div>
            </form>

            <p className="cadastro__first__block--version small__text">Solid v1.2.1</p>
        </div>
    )
}
