import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import React from 'react'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <>
      <header className='mt-10 mx-auto xl:flex xl:justify-center'>
        <Hero />
      </header>
      <main className='mt-10 mx-auto xl:flex xl:flex-col xl:items-center'>
        <Features />
        <Faq />
      </main>

    </>
  )
}

export default Homepage