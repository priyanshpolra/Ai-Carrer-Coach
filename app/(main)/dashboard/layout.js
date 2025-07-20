import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const layout = ({children}) => {
    return (
        <div className='px-5'>
            <div className='flex items-center justify-between mb-'>
                <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent ">Industry Insights</h1>
            </div>
            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='gray' />}>
                {children}
            </Suspense>
        
        </div>
    )
}

export default layout
