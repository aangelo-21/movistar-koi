import "./Header.css"
import HeaderButtons from "../header-buttons/HeaderButtons"
import Logo from '../logo/Logo'

function Header() {
  return (
    <>
      <div className="header-container">
        <Logo />
        <HeaderButtons />
      </div>
    </>
  )
}

export default Header
