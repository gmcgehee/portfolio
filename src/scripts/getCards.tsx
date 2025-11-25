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
        const imageUrl = "https://scontent.cdninstagram.com/v/t51.82787-15/567178776_18004274396819480_2607484807321244472_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=104&ig_cache_key=Mzc1MjY1MjYyODQ5Nzk0MTAxOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDl4MTY4NS5zZHIuQzMifQ%3D%3D&_nc_ohc=lRziJ4HldfMQ7kNvwGVToq3&_nc_oc=AdmX9htk6xZgRXOy32H3lekgd-8zdCeOANWAq4cte9pzWEFfu7lzlnLlYvaJVveYgHA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=j6v8MEsTLLHIhexnNvVKiw&oh=00_AfiesKS2amKpL5xDjSqYqPpRpb7LmbgG4TJMv_Ov_ssJFw&oe=692C09A2" // TODO: Look at the readme for the repo and find the image logo there. I also need to add logos to each thing.
        const id = repo['id']

        const card = ProjectCard(title, description, language, imageUrl, id)
        listOfCards.push(card)
    });



    return listOfCards;


}

