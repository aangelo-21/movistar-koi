import './Footer.css'
import FooterContent from "../footer-content/FooterContent"
import FooterLogo from "../footer-log/FooterLogo"

function Footer() {

  return (

    <>
      <div className='footer-container'>
        <FooterLogo />
        <FooterContent />
      </div>
    </>

  )

}

export default Footer