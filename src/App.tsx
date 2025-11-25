import { useState } from 'react';
import ProjectCard from './components/card';
import './App.css';
import './index.css';
import getCards from './scripts/getCards';


export default function App() {
  const [lifeSection, setLifeSection] = useState(0) // we want three sections: projects, professional experience, 
  //const repos = //getCards("gmcgehee"); // comment out when not in use, rate-limited to 60 req/hour
  return (
    <div id="full-screen" className="flex flex-style-rows w-[100vw] h-[100vh]">
      {/* Page Title */}
    <div id="left" className="border w-[50%]">
      <h1>Portfolio</h1>

      </div>
      {/* max-h-screen overflow-y-auto */}
      <div id="right" className='border w-[50%] h-[100%]'>
        <div id="cards" className="grid grid-col gap-[30vh] h-[100%] justify-center pt-[20%] pb-[20%] overflow-auto">
          
            <ProjectCard title="DES Encryption" description="Low-level implementation of Triple DES including block cipher modes ECB, CBC, and OFB." imageUrl="https://www.kaspersky.com/content/en-global/images/repository/isc/2021/encryption-1.jpg">
            </ProjectCard>
             {/* etc. */}
          
        </div>
      </div>

    </div>

  )
}
