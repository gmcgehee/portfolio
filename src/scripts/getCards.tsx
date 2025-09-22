import React from "react";

export default async function getCards(username: string) {
    // the goal for this function is that it pings my github and turns all my repos into cards

    const githubRepoLink: string = `https://api.github.com/users/${username}/repos`;

    try {
        const repos = await fetch(githubRepoLink)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error from github");
                } else {
                    
                    return response.json();
                }
            })
            .catch(err => console.log("The data was not successfully fetched."));

        console.log(repos);
    } catch (err) {
        console.log("Failed to work with github API.")
    }
}
