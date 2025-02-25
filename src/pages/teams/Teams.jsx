import Banner from "../../components/banner/Banner"
import Team from "../../components/team/Team";
import "./Teams.css"

function Teams() {
  return (

    <>
      <Banner title={"Nuestros equipos"} />
      <div className="team-container">
        <Team teamDescription={"En la LEC, la máxima liga europea de League of Legends, medimos nuestra calidad enfrentándonos a los mejores equipos de EMEA en tres splits (Invierno, Primavera y Verano). Cada fase es clave para seguir construyendo nuestra historia y abrirnos camino hacia torneos internacionales como el First Stand y el Mid‐Season Invitational."} teamImage={"/teams/lec.webp"} />
        <Team teamDescription={"Representamos lo mejor del talento español en la Superliga, la competición local donde también participa nuestro equipo academia, Movistar KOI Fénix. Aquí pulimos nuestro juego y forjamos el futuro de nuestros jugadores."} teamImage={"/teams/superliga.webp"} />
        <Team teamDescription={"En la Equal Esports Cup, nuestro equipo femenino (KOI Amethyst) se enfrenta a retos en un entorno inclusivo y competitivo, reafirmando nuestro compromiso con la diversidad y la excelencia en League of Legends."} teamImage={"/teams/equal-esports.webp"} />
        <Team teamDescription={"Nuestro equipo de Valorant compite en el Valorant Champions Tour EMEA, donde medimos nuestro rendimiento contra los mejores de la región en un circuito de alto nivel y con emociones intensas en cada partida"} teamImage={"/teams/vct-emea.webp"} />
        <Team teamDescription={"Además, participamos en la liga nacional de Valorant, Valorant Spain: Rising, en la que definimos quiénes son los equipos locales que marcarán la pauta en el circuito español."} teamImage={"/teams/vlr-rising.webp"} />
        <Team teamDescription={"En TFT demostramos nuestra capacidad estratégica en torneos que requieren de optimizar sinergias y tomar decisiones en tiempo real. Es un reto diferente que pone a prueba nuestra creatividad y adaptabilidad."} teamImage={"/teams/tft.webp"} />
        <Team teamDescription={"Llevamos nuestra pasión al mundo del fútbol virtual, compitiendo en EA Sports FC 24, donde el juego y la estrategia se fusionan para demostrar quién es el mejor en el simulador de fútbol."} teamImage={"/teams/ea-fc25.webp"} />
        <Team teamDescription={"Con orgullo, dos de nuestros jugadores se enfrentan a entrenadores de todo el mundo en el Pokémon World Championships, mostrando la calidad y el ingenio que nos caracteriza en las batallas estratégicas."} teamImage={"/teams/pokemon-vgc.webp"} />
      </div>
    </>
  )
}

export default Teams;