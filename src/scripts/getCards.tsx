import ProjectCard from "../components/card";

// This is a list of dictionaries object
export type repoList = Array<{

    [key: string]: string | any

}>

export async function getRepos(username: string) {

    const githubRepoLink: string = `https://api.github.com/users/${username}/repos`;
    let repos: repoList = []; // declaring outside to provide continual access

    try {
        repos = await fetch(githubRepoLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error from github");
                } else {

                    return response.json();
                }
            })
            .catch(() => console.log("Repo data was not successfully fetched."));

        console.log(repos);
    } catch (err) {
        console.log("Failed to work with github API.")
    }

    return repos;

}

// I feel that a better way to do this would be by passing the list of repos into getCards and just store the repos instead of storing the cards
export default function getCards(repos: repoList) {

    let listOfCards: any = [];

    repos.forEach((repo: { [key: string]: any }) => { // typescript typing is just insane brother
        const title = repo["name"]
        const description = repo["description"]
        const language = repo["language"]
        const imageUrl = `https://github.com/${repo['full_name']}/blob/main/images/logo.jpg?raw=true` // This relies on a very specific file structure. It would be good to have a fallback image just in case this isn't how it's structured
        const id = repo['id']
        const url = repo['svn_url']
        
        const card = ProjectCard(title, description, language, imageUrl, id, url)
        listOfCards.push(card)
    });



    return listOfCards;


}

