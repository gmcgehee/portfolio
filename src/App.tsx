import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProjectCard from './components/card'
import './App.css'
import './index.css';
import getCards from './scripts/get_cards'

export default function App() {
  const [count, setCount] = useState(0)
  // const repos = getCards("gmcgehee"); // comment out when not in use, rate-limited to 60 req/hour
  console.log("bonjour"); // say hello, no I wrote this myself BRADLEY
  return (
    <div id="fullScreen" className="flex flex-rows items-center text-center min-h-screen">
      {/* Page Title */}
    <div id="left" className="w-1/2 max-h-screen">
      <h1 className="flex items-center text-center">Portfolio
      </h1>

      </div>
      <div id="right" className='w-1/2 max-h-screen overflow-y-auto'>
        <div id="cards" className="flex flex-col items-center text-center">

            <ProjectCard title="DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>

            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>
        </div>
      </div>
      {/* Image Row 
      <div className="grid grid-cols-3 gap-6">
        <img
          src="https://via.placeholder.com/300"
          alt="Project 1"
          className="rounded shadow"
        />
        </div>
        */}

    </div>

  )
}
