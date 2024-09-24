import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  selectTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          value={titleFilter}
          onChange={handleFilter}
          type="text"
          placeholder="Filter by title..."
        />
      </div>
    </div>
  )
}

export default Filter
