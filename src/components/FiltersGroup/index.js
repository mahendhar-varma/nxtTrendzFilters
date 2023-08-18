import './index.css'
import CategoryItem from '../CategoryItem'
import RatingItem from '../RatingItem'

const FiltersGroup = props => {
  const {
    titleSearch,
    category,
    rating,
    ratingsList,
    categoryOptions,
    changeSearch,
    keyDownEvent,
    changeRating,
    changeCategory,
    clearFilters,
  } = props

  const onChangeSearchInput = event => {
    changeSearch(event.target.value)
  }

  const onKeyChangeEvent = event => {
    keyDownEvent(event.keyCode)
  }

  const onCategoryClick = categoryId => {
    console.log(categoryId)
    changeCategory(categoryId)
  }

  const onRatingClick = ratingId => {
    changeRating(ratingId)
  }

  const onClickClearFilter = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="input"
        placeholder="search"
        value={titleSearch}
        onChange={onChangeSearchInput}
        onKeyDown={onKeyChangeEvent}
      />
      <h1 className="heading">Category</h1>
      <div className="category-container">
        {categoryOptions.map(categoryItem => (
          <CategoryItem
            key={categoryItem.categoryId}
            categoryDetails={categoryItem}
            onCategoryClick={onCategoryClick}
            isActive={category === categoryItem.categoryId}
          />
        ))}
      </div>
      <h1 className="heading">Rating</h1>
      <div className="rating-container">
        {ratingsList.map(ratingItem => (
          <RatingItem
            key={ratingItem.ratingId}
            ratingDetails={ratingItem}
            onRatingClick={onRatingClick}
            isActive={rating === ratingItem.ratingId}
          />
        ))}
      </div>
      <button className="filter-btn" type="button" onClick={onClickClearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
