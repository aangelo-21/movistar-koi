import InteractiveMap from "../../components/interactive-map/InteractiveMap"
import Banner from "../../components/banner/Banner"
import './AboutUs.css'

function AboutUs() {
  return (
    <>
      <Banner title={"Sobre Nosotros"} />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1 className="about-us-title">Movistar Esport Center</h1>
          <p className="about-us-description">Situado estratégicamente en las instalaciones de Matadero Madrid, nuestro centro es un testimonio del compromiso de Movistar con los eSports. Con un diseño vanguardista que combina funcionalidad y estética, el Movistar eSports Center refleja la innovación que caracteriza a nuestra organización.</p>
          <p className="about-us-description">Nuestras salas de entrenamiento están equipadas con la última tecnología en gaming. Cada estación cuenta con equipos de alto rendimiento, monitores de baja latencia y periféricos profesionales, asegurando que nuestros jugadores tengan las herramientas necesarias para alcanzar su máximo potencial.</p>
          <p className="about-us-description">El corazón palpitante del centro es nuestro stage principal. Es aquí donde la magia sucede, donde se han vivido los momentos más emocionantes de nuestra historia. Con capacidad para albergar competiciones en vivo, este espacio emula las condiciones de los grandes torneos internacionales.</p>
          <p className="about-us-description">Gracias a nuestra asociación con Movistar, contamos con una infraestructura de red inigualable. Nuestra conexión de fibra óptica de alta velocidad garantiza que nuestros jugadores puedan entrenar y competir sin limitaciones técnicas.</p>
        </div>
        <InteractiveMap />
      </div>
    </>
  )
}

export default AboutUs