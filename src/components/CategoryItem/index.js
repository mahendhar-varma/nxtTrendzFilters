import './index.css'

const CategoryItem = props => {
  const {categoryDetails, onCategoryClick, isActive} = props
  const {categoryId, name} = categoryDetails

  const categoryClick = () => {
    onCategoryClick(categoryId)
  }

  const activeClass = isActive ? 'active-class' : ''

  return (
    <button className="btn" type="button" onClick={categoryClick}>
      <p className={`category-item ${activeClass}`}>{name}</p>
    </button>
  )
}

export default CategoryItem
