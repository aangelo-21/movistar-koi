import Banner from "../../components/banner/Banner"
import Team from "../../components/team/Team";
import "./Teams.css"
import { teamsData } from '../../services/teamsData';

function Teams() {
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
