import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const favoriteFilter = useSelector(selectFavoriteFilter)
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilters())
  }

  const handleAuthorFilter = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleFavoriteFilter = () => {
    dispatch(setFavoriteFilter())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={handleFilter}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            onChange={handleAuthorFilter}
            type="text"
            placeholder="Filter by author..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={favoriteFilter}
              onChange={handleFavoriteFilter}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilter}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
