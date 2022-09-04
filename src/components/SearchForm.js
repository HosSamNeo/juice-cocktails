import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  React.useEffect(() => {
    searchValue.current.focus();
  },[])
  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        
        <div className="form-control">
          <label htmlFor="name">Search Your favourite cocktail</label>
          <input type="text" id='name' ref={searchValue}  onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
