import '../shared/reset.css';
import '../shared/sharedStyles.css';
import './../shared/tailwind.css';
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";

export default function LoginPage() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gradient-to-t from-azulElectrico to-black">
            <div className="flex shadow-md">
                <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white custom-shadow" style={{ width: '24rem', height: '32rem' }}>
                <div className="w-72">
                    <h1 className="text-xl font-bold font-Anton">¡Bienvenido de vuelta!</h1>
                    <small className="text-gray-400 font-Montserrat">¿Estás listo? Por favor, ingresa tus datos</small>
                    <form className="mt-4">
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-bold font-Montserrat">Correo electrónico</label>
                        <input type="email" placeholder="Ingresa tu correo" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500 font-Montserrat" />
                    </div>
                    <div className="mb-3">
                        <label className="mb-2 block text-xs font-bold font-Montserrat">Contraseña</label>
                        <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500 font-Montserrat" />
                    </div>
                    <div className="mb-3 flex flex-wrap content-center">
                        <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> <label htmlFor="remember" className="mr-auto text-xs font-bold font-Montserrat">Recordar por 30 días</label>
                        <a href="#" className="text-xs font-bold text-vinotinto font-Montserrat">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="mb-3">
                        <button className="mb-1.5 block w-full text-center text-white bg-vinotinto hover:bg-vinotinto2 px-2 py-1.5 rounded-md font-Montserrat">Ingresar</button>
                        <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md font-Montserrat">
                        <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
                        Ingresar con Google
                        </button>
                    </div>
                    </form>
                    <div className="text-center">
                    <span className="text-xs text-gray-400 font-bold font-Montserrat">¿No tienes una cuenta?</span>
                    <a href="../signup" className="text-xs font-bold text-vinotinto font-Montserrat">Registrate</a>
                    </div>
                </div>
                </div>
                <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
                <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md custom-shadow" src="/loginimage.jpg"/>
                </div>
            </div>
            </div>
            <FooterPage />
        </>
    );
}
