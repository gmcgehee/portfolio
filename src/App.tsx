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
      <div id="left" className="border w-[50%]">
        <h1>Portfolio</h1>

      </div>
      <div id="right" className='border w-[50%] h-[100%]'>
        <div id="cards" className="grid grid-col gap-[30vh] h-[100%] justify-center pt-[20%] pb-[20%] overflow-auto">

          {cards}

        </div>
      </div>

    </div>

  )
}
