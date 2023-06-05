// import './../shared/tailwind.css';
import Navbar from "../components/navbar";
import FooterPage from "../components/footer";

export default function HelpPage() {
    const FormSubmit = (event) => {
        event.preventDefault();
        alert('Su formulario ha sido enviado. Le responderemos en la brevedad posible');
      };
    return (
        <>
            <Navbar />
            <section className="form-fondo">
                <div className="form-contacto">
                    <h2>¿Posees dudas sobre nuestro servicio? <br />¡CONTACTANOS!</h2>
                    <div className="container-form">
                        <form action="enviar.php" method="post" className="contacto" onSubmit={FormSubmit}>
                            <label htmlFor="nombreapellido">Nombre y Apellido</label><br />
                            <input type="text" id="nombreapellido" className="input-padron" required/><br />
                            <label htmlFor="correo">Correo electrónico</label><br />
                            <input type="email" id="correo" className="input-padron" placeholder="email@dominio.com" required/><br />
                            <label htmlFor="telefono">Teléfono</label><br />
                            <input type="tel" id="telefono" className="input-padron" placeholder="(xxx) xxxx xxxx" required/><br />
                            <label htmlFor="mensaje">Mensaje</label><br />
                            <textarea id="mensaje" className="input-padron" required></textarea><br />
                            <fieldset className="form-selectors">
                                <legend>¿Cómo le gustaría que lo contactemos?</legend>
                                <label htmlFor="radio-email"><input type="radio" name="contacto" value="email" id="radio-email"/>Email</label>              
                                <label htmlFor="radio-telefono"><input type="radio" name="contacto" value="telefono" id="radio-telefono"/>Teléfono</label>              
                                <label htmlFor="radio-whatsApp"><input type="radio" name="contacto" value="whatsApp" id="radio-whatsApp" checked={true}/>WhatsApp</label>         
                            </fieldset>
                            <label className="checkbox"><input type="checkbox" checked={true}/>¿Le gustaría recibir novedades sobre Soundwave?</label>
                            <input type="submit" value="Enviar" className="enviar"/>
                        </form>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7003683899356!2d-99.20785461114501!3d19.425348000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f72729f007%3A0x178597e77d964c04!2sSpotify%20Mexico!5e0!3m2!1ses!2sco!4v1684697245783!5m2!1ses!2sco" className="mapa" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            <FooterPage />
        </>
    )
};