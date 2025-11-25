import React, { useEffect } from "react";
import ProjectCard from "../components/card";

export async function getRepos(username: string) {
    // the goal for this function is that it pings my github and turns all my repos into cards

    const githubRepoLink: string = `https://api.github.com/users/${username}/repos`;
    let repos: [{ [key: string]: any }] = [{}]; // declaring outside to provide continual access

    try {
        repos = await fetch(githubRepoLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error from github");
                } else {

                    return response.json();
                }
            })
            .catch(err => console.log("Repo data was not successfully fetched."));

        console.log(repos);
    } catch (err) {
        console.log("Failed to work with github API.")
    }

    return repos;

}


export default async function getCards(username: string) {

    
    const repos = await getRepos(username);
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



    return await listOfCards;


}

