import './Header.css'
import HeaderLogo from "../HeaderLogo/HeaderLogo"
import HeaderButtons from "../HeaderButtons/HeaderButtons"

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