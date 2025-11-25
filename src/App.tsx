import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import getCards from './scripts/getCards';
import { getRepos } from './scripts/getCards';
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
      }
      setCards(cards); // uses the data I have and puts it to my global value, thanks!


    }
    load();


  }, [])

  return (
    <div id="full-screen" className="flex flex-style-rows w-[100vw] h-[100vh]">
      {/* Page Title */}
      <div id="left" className="drop-shadow-lg/30 w-[50%] bg-[#C0D684] box-border p-[5%] text-right align-center content-center">
        <h1 className='text-[2em]'>Portfolio</h1>
        <h2 className='text-[1em]'>A summary of my projects, passions, and professional experience</h2>

      </div>
      <div id="right" className='w-[50%] h-[100%] bg-[#CBEAA6] box-border'>
        <div id="cards" className="flex flex-col gap-[60%] h-[100%] pt-[20%] pb-[20%] overflow-scroll align-center">

          {cards}

        </div>
      </div>

    </div>

  )
}
