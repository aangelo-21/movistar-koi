import "./HeaderButtons.css"

function HeaderButtons() {

  const handleNavigate = (page) => {
    window.location.href = `/${page}`;
  }

  return (
    <>
      <div className="header-buttons-container">
        <b className="header-button" onClick={() => handleNavigate('home')}>Inicio</b>
        <b className="header-button" onClick={() => handleNavigate('teams')}>Equipos</b>
        <b className="header-button" onClick={() => handleNavigate('calendar')}>Calendario</b>
        <b className="header-button" onClick={() => handleNavigate('about-us')}>Sobre nosotros</b>
      </div>
    </>
  )
}

export default HeaderButtons