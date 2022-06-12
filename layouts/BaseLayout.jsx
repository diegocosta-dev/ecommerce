import React from 'react'
import Head from "next/Head"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BaseLayout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Headphone Store</title>
      </Head>
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