import Hero from '@/components/Hero'
import React from 'react'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <>
      <header className='h-full mt-10'>
        <Hero />
      </header>
    </>
  )
}

export default Homepage