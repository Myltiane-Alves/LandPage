import type { NextPage } from 'next'
import Head from 'next/head'


import CardBlog from '../components/CardBlog'
import CardMenu from '../components/CardMenu'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Member from '../components/Member'
import Nav from '../components/Nav'
import Services from '../components/Services'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Land Page</title>
        <meta name="description" content="Land Page" />

      </Head>

      <Nav />
      <Header/>
      <CardMenu/>
      <CardBlog/>
      <Services />
      <Member />
      <Footer />


    </>

  )
}

export default Home
