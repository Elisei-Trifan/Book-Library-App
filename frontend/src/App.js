import BookForm from './component/BookForm/BookForm'
import BookList from './component/BookList/BookList'
import Filter from './component/Filter/Filter'
import Error from './component/Error/Error'

import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  )
}

export default App
