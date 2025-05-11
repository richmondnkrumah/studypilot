import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <>
      <header className='mt-16 mx-3 sm:mx-6 flex justify-center'>
        <Hero />
      </header>
      <main className='my-16 mx-3 sm:mx-6 gap-16 flex flex-col xl:items-center'>
        <Features />
        <Faq />
      </main>
      <footer className='mx-3 sm:mx-6 mb-16 flex justify-center '>
        <Footer />
      </footer>
    </>
  )
}

export default Homepage