import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
  setAuthorFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilters())
  }

  // мой инпут
  const handleAuthorFilter = (e) => {
    dispatch(setAuthorFilter(e.target.value))
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
        <button type="button" onClick={handleResetFilter}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
