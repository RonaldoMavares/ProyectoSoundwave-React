"use client";
import '../shared/reset.css';
import '../shared/sharedStyles.css';
import './../shared/tailwind.css';
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";

export default function LandingPage() {
    const [datos, ponerDatos] = useState(null);

    useEffect(() => {
        async function llamarApi() {
        const peticion = await fetch("./musicalbum.json");
        const respuesta = await peticion.json();
        ponerDatos(respuesta.musicCards);
        }
    llamarApi();
    }, []);

    return(
        <>
            <Navbar />
            <main>
                <h1 className="imagen_principal">
                    <img src="/mainImage.png" className="imagen_principal" alt="Imagen persona escuchando música" />
                </h1>
                <section className="contenido-principal">
                    <h2>Música que amas,<br /> desde tu comodidad</h2>
                    <p>Disfruta sin anuncios, con música ilimitada, sin internet y más<br />por tan solo 25.000COP al mes. Puedes cancelar el<br />servicio cuando quieras</p>
                </section>
                <div>
                    <section className="grid place-items-center min-h-screen bg-gradient-to-t from-azulElectrico to-black p-5">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-7 font-Anton">¡Hecho para ti!</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {datos ? (
                                datos.map((datos) => {
                                    return <MusicAlbum datos={datos} />;
                                })
                                ) : (
                                <p>Cargando...</p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
                <section className="eslogan">
                    <h2>Descubre lo nuevo de la música,<br /> lo nuevo en <b>SOUNDWAVE</b></h2>
                    <p><b>¡Viaja a otro mundo con un solo Play!</b> Ponte al tanto de lo último de la música y consigue aquella melodía que combina con tu estilo.</p>
                    <button onClick={() => {window.location.href='../login'}}>Navegar</button>
                </section>
                <section className="suscripcion">
                    <h2>Escucha <b>GRATIS</b> o suscríbete con <b>SOUNDWAVE PREMIUM</b></h2>
                    <div className="containerPlanes">
                        <div className="suscripciongratis">
                            <h3>Te presentamos <br />SOUNDWAVE GRATIS</h3>
                            <ul>
                                <li>Reproducción aleatoria de cualquier artista o playlist en tu teléfono celular.</li>
                                <li>Escuchar música es posible gracias a los anuncios.</li>
                                <li>Puedes pasar 10 veces la música en tu celular.</li>
                                <li>Calidad de sonido estándar.</li>
                            </ul>
                            <button onClick={() => {window.location.href='../signup'}}>IR GRATIS</button>
                        </div>
                        <div className="suscripcionpremium">
                            <h3>Te presentamos <br />SOUNDWAVE PREMIUM</h3>
                            <ul>
                                <li>Escuchar la canción que desees al momento, sin aleatoriedad.</li>
                                <li>Escucha música sin internet.</li>
                                <li>Escuchar música sin anuncios.</li>
                                <li>Puedes saltar la música tantas veces como quieras.</li>
                                <li>Calidad de sonido mejorada.</li>
                                <li>Escucha música a través de tus altavoces.</li>
                            </ul>
                            <button onClick={() => {window.location.href='../signup'}}>IR PREMIUM</button>
                        </div>
                    </div>
                </section>
            </main>
            <FooterPage />
        </>
    )
}

function MusicAlbum(props) {
    return (
        <>
                {props.datos ? (
                            <div className="bg-gray-900 shadow-lg rounded p-3">
                                <div className="group relative">
                                    <img className="w-full md:w-72 block rounded" src={props.datos.albumCover} alt="" />
                                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                        </button>
                                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                        </svg>
                                        </button>
                                        <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-white text-lg font-Montserrat">{props.datos.nombreAlbum}</h3>
                                    <p className="text-gray-400 font-Montserrat">{props.datos.albumCantante}</p>
                                </div>
                            </div>
                        ) : (
                    <p>Cargando...</p>
                  )}
            </>         
        );
    }