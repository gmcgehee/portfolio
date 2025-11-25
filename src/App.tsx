import { useEffect, useState } from 'react';
import ProjectCard from './components/card';
import './App.css';
import './index.css';
import getCards from './scripts/getCards';


export default function App() {

  const [lifeSection, setLifeSection] = useState(0) // we want three sections: projects, professional experience, 
  const [repos, setRepos] = useState<string[]>([])

  useEffect(() => { // this allows me to get cards and set them to an actual global value
    let currRepos;

    try {
      currRepos = localStorage.getItem('repos')

      const repoJson = currRepos === null ? '{}' : JSON.parse(currRepos)
      
      if (repoJson.length !== JSON.parse('{}')) {
        setRepos(repoJson)
        console.log(repoJson)
      }
    }

    catch (error) {
      console.log(error)
    }

    async function load() {
      const cards = await getCards("gmcgehee"); // waits for the repos to respond
      console.log('Fetching repos...')
      setRepos(cards) // uses the data I have and puts it to my global value, thanks!
    }

    if (repos?.length == 0) {
      load()
    }

  }, [])

  useEffect(() => {
    const storeRepos: string = JSON.stringify(repos)
    localStorage.setItem('repos', storeRepos)

  }, [repos])

  return (
    <div id="full-screen" className="flex flex-style-rows w-[100vw] h-[100vh]">
      {/* Page Title */}
      <div id="left" className="border w-[50%]">
        <h1>Portfolio</h1>

      </div>
      <div id="right" className='border w-[50%] h-[100%]'>
        <div id="cards" className="grid grid-col gap-[30vh] h-[100%] justify-center pt-[20%] pb-[20%] overflow-auto">

          {repos}

        </div>
      </div>

    </div>

  )
}
