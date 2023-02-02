import React, { useState, useEffect } from 'react'

const SearchMenu = () => {
  /* search for menu on specified criteria*/
    const [query, setQuery] = useState( '' )
    const [state, setState] = useState( {
        query: '',
        list:[]
    })

    const handleChange = ( e ) =>
    {
        const results = menus.filter( menu =>
        {
            if ( e.target.value === '' ) return menus
            return menu.entre.toLowerCase().includes( e.target.value.toLowerCase() )
            setState( {
                query: e.target.value,
                list: results
            })
      })
    setQuery(e.target.value)
  }
  return (
    <form>
      <input
        type='search'
        value='query'
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchMenu
