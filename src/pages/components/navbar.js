import '../shared/reset.css';
import '../shared/sharedStyles.css';

const descargarGatito = () => {
    fetch("https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "GatitoFeliz.jpg";
        link.click();
      })
      .catch((error) => {
        console.error("Error al descargar la imagen:", error);
      });
  };

export default function Navbar() {
    return (
        <>
            <header>
                <div className="box">
                    <a href="../landing"> <img src="/logoSoundwave.png" className="logo-soundwave"/></a>
                    <nav>
                        <ul>
                            <li><a href="../signup">Premium</a></li>
                            <li><a href="../help">Ayuda</a></li>
                            <li><a href="#" onClick={descargarGatito}>Descargar</a></li>
                            <li className="navegation"><a href="../signup">Registrarse</a></li>
                            <li>
                                <button className="login_btn" onClick={() => {window.location.href='../login'}}>
                                    <img className="img1" src="/login.png" width="30px"/>
                                    <img className="img2" src="/login2.png" width="30px"/>
                                    <span className="login_txt">Ingresar</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}