import Banner from "../../components/banner/Banner"
import "./Home.css"

function Home() {
  return (
    <>
      <Banner title={"Inicio"} />
      <div className="home-container">
        <div className="home-movistar-koi">
          <h1 className="home-title">Movistar KOI</h1>
          <p className="home-description">En Movistar KOI, no solo jugamos para ganar, sino para inspirar y unir a la comunidad de eSports. ¡Gracias por ser parte de nuestra historia! Juntos, vamos a hacer historia en el mundo del gaming competitivo. ¡Vamos Movistar KOI!</p>
          <img className="home-image" src="/movistar-koi/movistar-koi.webp" alt="" />
        </div>
        <div className="home-movistar-koi">
          <h1 className="home-title">Nuestra Historia</h1>
          <p className="home-description">Nacimos el 4 de enero de 2024, fruto de una fusión histórica que ha sacudido el mundo de los eSports. Somos el resultado de la unión de tres gigantes: Movistar Riders, KOI y MAD Lions. Esta alianza nos ha convertido en una de las organizaciones más potentes de España y con proyección internacional.</p>
          <img className="home-image" src="/movistar-koi/fusion.webp" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
