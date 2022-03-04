import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
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

      <Services />
      <Member />
      <Footer />


    </>

  )
}

export default Home
