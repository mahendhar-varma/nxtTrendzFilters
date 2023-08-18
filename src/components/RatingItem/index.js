import './index.css'

const RatingItem = props => {
  const {ratingDetails, onRatingClick, isActive} = props
  const {imageUrl, ratingId} = ratingDetails

  const ratingClick = () => {
    onRatingClick(ratingId)
  }

  const activeClass = isActive ? 'active-class' : ''

  return (
    <div className="rating-item">
      <button className="btn" type="button" onClick={ratingClick}>
        <img
          src={imageUrl}
          alt={`rating ${ratingId}`}
          className={`rating-icon ${activeClass}`}
        />
      </button>
      <p className="rating">& up</p>
    </div>
  )
}

export default RatingItem
