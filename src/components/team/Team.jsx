import "./Team.css"

function Team({ teamDescription, teamImage }) {
  return (
    <div className="team">
      <img src={teamImage} alt="Team" className="team-image" />
      <p className="team-description">{teamDescription}</p>
    </div>
  )
}

export default Team
