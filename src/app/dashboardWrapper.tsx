import React from 'react'

const DashBoardWrapper = ({children}:{children:React.ReactNode})=> {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* Sidebar */}
        <main className={`flex w-full flex-col bg-grey-50 dark:bg-gray-900 md:pl-64`}>
            {/* navbar */}
        {children}
        </main>
    </div>
  )
}

export default DashBoardWrapper