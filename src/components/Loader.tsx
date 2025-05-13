import { div } from 'framer-motion/client'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
    return (
        <div className='flex gap-3 items-center'>
            <div className="loader " />
            <p className='text-lg font-semibold text-[#707070]'>Loading</p>
        </div>
    )
}

export default Loader