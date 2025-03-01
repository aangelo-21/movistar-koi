import "./Banner.css"

function Banner({ title }) {
  return (
    <div className="banner-container">
      <img className="banner-image" src="/movistar-koi/banner.webp" alt="Banner" />
      <h1 className="banner-title">{title}</h1>
    </div>
  )
}

export default Banner
