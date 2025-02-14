import './Header.css'
import HeaderLogo from "../header-logo/HeaderLogo"
import HeaderButtons from "../header-buttons/HeaderButtons"

function Header () {

  return (

    <>
    <div className="header-container">
      <HeaderLogo/>
      <HeaderButtons/>
    </div>
    </>

  )

}

export default Header