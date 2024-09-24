import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  resetFilters,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleResetFilter = () => {
    dispatch(resetFilters())
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
        <button type="button" onClick={handleResetFilter}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Filter
