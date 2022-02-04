import React from 'react'

function Spinner() {
    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full z-10'>

            <div className='h-20 w-20   border-b-8 border-b-primary rounded-full animate-spin'>

            </div>
            
        </div>
    )
}

export default Spinner
