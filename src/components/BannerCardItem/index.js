const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className}`}>
      <div>
        <h1 className="main-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="custom-btn">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
