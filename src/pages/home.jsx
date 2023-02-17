import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen bg-green-800">
        <div className='flex justify-center items-center h-full'>
            <a href='/surah' className='text-lg font-semibold text-white border border-white px-3 py-2 rounded-md hover:bg-white hover:text-green-800'>
                Baca Quran
            </a>
        </div>
    </div>
  )
}

export default Home
