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
    <div className="flex flex-rows items-center text-center min-h-screen p-8">
      {/* Page Title */}

      <h1 className="flex justify-center text-center items-center text-4xl font-bold m-auto w-1/2">Portfolio
      </h1>
      <div id="right" className='w-1/2'>
        <div id="cards" className="flex flex-col">

          <div className="flex flex-rows justify-center">
            <ProjectCard title="DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SdvR47ktRyvY0JgWjX1xbwHaFK%3Fr%3D0%26pid%3DApi&f=1&ipt=fba169ca1bab4151093cda0061a3ec469bf7cc3e9ff2de9d5708372b2a4e0e4a&ipo=images">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SdvR47ktRyvY0JgWjX1xbwHaFK%3Fr%3D0%26pid%3DApi&f=1&ipt=fba169ca1bab4151093cda0061a3ec469bf7cc3e9ff2de9d5708372b2a4e0e4a&ipo=images">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SdvR47ktRyvY0JgWjX1xbwHaFK%3Fr%3D0%26pid%3DApi&f=1&ipt=fba169ca1bab4151093cda0061a3ec469bf7cc3e9ff2de9d5708372b2a4e0e4a&ipo=images">
            </ProjectCard>

          </div>

          <div className='flex flex-rows justify-center'>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SdvR47ktRyvY0JgWjX1xbwHaFK%3Fr%3D0%26pid%3DApi&f=1&ipt=fba169ca1bab4151093cda0061a3ec469bf7cc3e9ff2de9d5708372b2a4e0e4a&ipo=images">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SdvR47ktRyvY0JgWjX1xbwHaFK%3Fr%3D0%26pid%3DApi&f=1&ipt=fba169ca1bab4151093cda0061a3ec469bf7cc3e9ff2de9d5708372b2a4e0e4a&ipo=images">
            </ProjectCard>
            <ProjectCard title="Triple DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.SdvR47ktRyvY0JgWjX1xbwHaFK%3Fr%3D0%26pid%3DApi&f=1&ipt=fba169ca1bab4151093cda0061a3ec469bf7cc3e9ff2de9d5708372b2a4e0e4a&ipo=images">
            </ProjectCard>
          </div>
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
