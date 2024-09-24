import { useDispatch } from 'react-redux'
import { setTitleFilter } from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          onChange={handleFilter}
          type="text"
          placeholder="Filter by title..."
        />
      </div>
    </div>
  )
}

export default Filter
