import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Whyus } from './components/whyussection'
import { TwitterCard } from './components/twittercard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-h-[700vh]'>
        <Whyus/>
        <TwitterCard></TwitterCard>
      </div>
     
    </>
  )
}

export default App
