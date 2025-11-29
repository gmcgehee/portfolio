import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import getCards from './scripts/getCards';
import { type repoList } from './scripts/getCards';
import { templateRepoList } from './components/templateRepoList';


export default function App() {

  // fun fact: App() is called an indefinite number of times, use useEffect to actually get logging info
  useEffect(() => {
      const currTime = new Date()
  console.log("Loaded page at " + currTime.getTime())
  })


  //const [lifeSection, setLifeSection] = useState(0) // we want three sections: projects, professional experience, hobbies (?) it would be cool for these to wrap around
  const [repos, setRepos] = useState<repoList>([])
  const [cards, setCards] = useState<React.ReactNode[]>([])

  useEffect(() => { // this allows me to get cards and set them to an actual global value
    async function load() {

      console.log('Fetching repos from GitHub API...'); // this is running like twice every time the site boots. that's not good news for me
      //const currRepos = await getRepos("gmcgehee"); // waits for the repos to respond
      const currRepos = templateRepoList;
      const cards = currRepos === undefined ? null : getCards(currRepos); // is it best practice to just say that it's null if it's undefined?

      if (currRepos !== null) {
        setRepos(currRepos)
        repos; // quiet the error
      }

      setCards(cards); // uses the data I have and puts it to my global value, thanks!


    }
    load();


  }, [])


  return (
    
    // <div id="full-screen" className="grid grid-row col-span-full grid-flow grid-cols-2 w-[100vw] h-[100vh] gap-0">
    <div id="full-screen" className="flex flex-row w-[100vw] h-[100vh]">
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet"/>
      {/* Page Title */}
      <div id="left" className="drop-shadow-lg/30 bg-(--left-bg) h-[100vh] box-border p-[5%] text-right text-(--left-text) align-center content-center font-serif">
        <h1 className='text-[2em] font-bold'>Geist McGehee</h1>
        <h2 className='text-[1em]'>Projects, passions, and professional experience</h2>

      </div>
      <div id="right" className='h-[100%] bg-(--right-bg) box-border font-mono'>
        <div id="cards" className="grid grid-col gap-[60%] h-[100%] pt-[20%] pb-[20%] overflow-scroll align-center">

          {cards}

        </div>
      </div>

    </div>

  )
}
