import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
  return (
    <header>
        <Link to="/">Fast Pizze Co.</Link>
        <SearchOrder />
        <p>Waleed</p>
    </header>
  )
}

export default Header