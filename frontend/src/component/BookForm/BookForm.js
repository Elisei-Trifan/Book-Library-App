import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addBook, fetchBook } from '../../redux/slices/booksSlice'
import { addError } from '../../redux/slices/errorSlice'

import booksData from '../../data/books.json'
import createBookWithId from '../../utils/createBookWithID'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    const randomBookId = createBookWithId(randomBook, 'random')

    dispatch(addBook(randomBookId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const book = createBookWithId({ title, author }, 'manual')
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(addError('Введите автора и название книги'))
    }
  }

  const handleRandomBookViaAPI = async () => {
    try {
      setIsLoading(true)
      await dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleRandomBook}>
          Add Random Book
        </button>
        <button
          type="button"
          onClick={handleRandomBookViaAPI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Book via API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
