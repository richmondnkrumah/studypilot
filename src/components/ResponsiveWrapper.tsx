import React, { ReactNode } from 'react'


const ResponsiveWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='xl:w-[1280px]'>
            <div className='min-w-[400px] max-w-[900px] w-full mx-auto flex flex-col gap-10'>
                {
                    children 
                }
            </div>
        </div>
    )
}

export default ResponsiveWrapper