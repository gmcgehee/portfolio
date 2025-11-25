import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import getCards from './scripts/getCards';
import { getRepos } from './scripts/getCards';
import { type repoList } from './scripts/getCards';


export default function App() {

  //const [lifeSection, setLifeSection] = useState(0) // we want three sections: projects, professional experience, hobbies (?) it would be cool for these to wrap around
  const [repos, setRepos] = useState<repoList>([])
  const [cards, setCards] = useState<React.ReactNode[]>([])

  useEffect(() => { // this allows me to get cards and set them to an actual global value

    // let currRepos; // why am I doing this at the function-level cope

    try {

      // this needs to 1) check if repos is in localStorage, 2) if it is, set repos to that and then set cards to that 3) if it is not, do *NOTHING*

      const currRepos = localStorage.getItem('repos');


      if (currRepos != null) {

        if (currRepos.length > 2) {   // somewhat arbitrary value, just want to make sure it's not "[]" or some random other unforseeable value
          const currReposJson = JSON.parse(currRepos)
          setRepos(currReposJson)
          const localCards = getCards(repos)
          setCards(localCards)
        }

      }


    }

    catch (error) {
      console.log(error);
    }
                  
    async function load() {

      console.log('Fetching repos from GitHub API...'); // this is running like twice every time the site boots. that's not good news for me
      const currRepos = await getRepos("gmcgehee"); // waits for the repos to respond
      const cards = currRepos === undefined ? null : getCards(currRepos); // is it best practice to just say that it's null if it's undefined?

      if (currRepos !== null) {
        setRepos(currRepos)
      }
      setCards(cards); // uses the data I have and puts it to my global value, thanks!

     // localStorage.setItem('repos', )


    }

    if (repos?.length == 0) {
      load();
    }

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
