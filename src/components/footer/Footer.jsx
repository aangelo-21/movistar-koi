import './Footer.css'
import FooterContent from "../footer-content/FooterContent"
import Logo from '../logo/Logo'

function Footer() {
  return (
    <>
      <div className='footer-container'>
        <Logo />
        <FooterContent />
      </div>
    </>
  )
}

export default Footer
