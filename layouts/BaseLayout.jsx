import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BaseLayout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <title>
          <a href="./">Headphone Store</a>
        </title>
      </header>
      <header>
        <Navbar></Navbar>
      </header>

      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BaseLayout