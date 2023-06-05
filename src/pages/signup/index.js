import '../shared/reset.css';
import '../shared/sharedStyles.css';
import './../shared/tailwind.css';
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";

export default function SignUpPage() {
    return (
        <>
            <Navbar />
            <div className="bg-grey-lighter min-h-screen flex flex-col bg-gradient-to-t from-vinotinto to-black">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center font-Anton">Regístrate</h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 font-Montserrat"
                            name="fullname"
                            placeholder="Nombre completo" />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4 font-Montserrat"
                            name="email"
                            placeholder="Correo electrónico" />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 font-Montserrat"
                            name="password"
                            placeholder="Contraseña" />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4 font-Montserrat"
                            name="confirm_password"
                            placeholder="Confirmar contraseña" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-azulElectrico text-white hover:bg-azulElectrico2 focus:outline-none my-1 font-Anton"
                            >Crear cuenta</button>

                        <div className="text-center text-sm text-grey-dark mt-4 font-Montserrat">
                                Al registrarte, aceptas nuestros&nbsp;
                                <a className="no-underline border-b border-grey-dark text-grey-dark font-Montserrat hover:text-azulElectrico" href="#">
                                    Términos de servicio&nbsp;
                                </a> y&nbsp;
                                <a className="no-underline border-b border-grey-dark text-grey-dark font-Montserrat hover:text-azulElectrico" href="#">
                                    Política de privacidad
                                </a>
                        </div>
                    </div>

                    <div className="text-white mt-6 font-Montserrat">
                        ¿Ya posees una cuenta?&nbsp;
                        <a className="no-underline border-b border-blue text-white font-Montserrat hover:text-azulElectrico" href="../login/">
                        Ingresa
                        </a>.
                    </div>
                </div>
            </div>
            <FooterPage />
        </>
    ) }