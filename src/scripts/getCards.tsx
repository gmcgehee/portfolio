import ProjectCard from "../components/card";

// This is a list of dictionaries object
export type repoList = Array<{
    [repoIndex: number]: {
        [key: string]: string | number
    }
}>

export async function getRepos(username: string) {
    // the goal for this function is that it pings my github and turns all my repos into cards

    // return;

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
        const imageUrl = "" // TODO: Look at the readme for the repo and find the image logo there. I also need to add logos to each thing.
        const id = repo['id']

        const card = ProjectCard(title, description, language, imageUrl, id)
        listOfCards.push(card)
    });



    return listOfCards;


}

