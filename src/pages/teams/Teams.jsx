import Banner from "../../components/banner/Banner"
import Team from "../../components/team/Team";
import "./Teams.css"

function Teams() {
  const teamsData = [
    {
      description: "En la LEC, la máxima liga europea de League of Legends, medimos nuestra calidad enfrentándonos a los mejores equipos de EMEA en tres splits (Invierno, Primavera y Verano). Cada fase es clave para seguir construyendo nuestra historia y abrirnos camino hacia torneos internacionales como el First Stand y el Mid‐Season Invitational.",
      image: "/teams/lec.webp"
    },
    {
      description: "Representamos lo mejor del talento español en la Superliga, la competición local donde también participa nuestro equipo academia, Movistar KOI Fénix. Aquí pulimos nuestro juego y forjamos el futuro de nuestros jugadores.",
      image: "/teams/superliga.webp"
    },
    {
      description: "En la Equal Esports Cup, nuestro equipo femenino (KOI Amethyst) se enfrenta a retos en un entorno inclusivo y competitivo, reafirmando nuestro compromiso con la diversidad y la excelencia en League of Legends.",
      image: "/teams/equal-esports.webp"
    },
    {
      description: "Nuestro equipo de Valorant compite en el Valorant Champions Tour EMEA, donde medimos nuestro rendimiento contra los mejores de la región en un circuito de alto nivel y con emociones intensas en cada partida",
      image: "/teams/vct-emea.webp"
    },
    {
      description: "Además, participamos en la liga nacional de Valorant, Valorant Spain: Rising, en la que definimos quiénes son los equipos locales que marcarán la pauta en el circuito español.",
      image: "/teams/vlr-rising.webp"
    },
    {
      description: "En TFT demostramos nuestra capacidad estratégica en torneos que requieren de optimizar sinergias y tomar decisiones en tiempo real. Es un reto diferente que pone a prueba nuestra creatividad y adaptabilidad.",
      image: "/teams/tft.webp"
    },
    {
      description: "Llevamos nuestra pasión al mundo del fútbol virtual, compitiendo en EA Sports FC 24, donde el juego y la estrategia se fusionan para demostrar quién es el mejor en el simulador de fútbol.",
      image: "/teams/ea-fc25.webp"
    },
    {
      description: "Con orgullo, dos de nuestros jugadores se enfrentan a entrenadores de todo el mundo en el Pokémon World Championships, mostrando la calidad y el ingenio que nos caracteriza en las batallas estratégicas.",
      image: "/teams/pokemon-vgc.webp"
    }
  ];

  return (
    <>
      <Banner title={"Nuestros equipos"} />
      <div className="team-container">
        {teamsData.map((team, index) => (
          <Team 
            key={index}
            teamDescription={team.description}
            teamImage={team.image}
          />
        ))}
      </div>
    </>
  )
}

export default Teams
