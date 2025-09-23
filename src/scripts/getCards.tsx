import React from "react";


/* 

0: Object { id: 906462802, node_id: "R_kgDONgeGUg", name: "ChessEngine", … }
​​
allow_forking: true
​​
archive_url: "https://api.github.com/repos/gmcgehee/ChessEngine/{archive_format}{/ref}"
​​
archived: false
​​
assignees_url: "https://api.github.com/repos/gmcgehee/ChessEngine/assignees{/user}"
​​
blobs_url: "https://api.github.com/repos/gmcgehee/ChessEngine/git/blobs{/sha}"
​​
branches_url: "https://api.github.com/repos/gmcgehee/ChessEngine/branches{/branch}"
​​
clone_url: "https://github.com/gmcgehee/ChessEngine.git"
​​
collaborators_url: "https://api.github.com/repos/gmcgehee/ChessEngine/collaborators{/collaborator}"
​​
comments_url: "https://api.github.com/repos/gmcgehee/ChessEngine/comments{/number}"
​​
commits_url: "https://api.github.com/repos/gmcgehee/ChessEngine/commits{/sha}"
​​
compare_url: "https://api.github.com/repos/gmcgehee/ChessEngine/compare/{base}...{head}"
​​
contents_url: "https://api.github.com/repos/gmcgehee/ChessEngine/contents/{+path}"
​​
contributors_url: "https://api.github.com/repos/gmcgehee/ChessEngine/contributors"
​​
created_at: "2024-12-21T01:16:22Z"
​​
default_branch: "main"
​​
deployments_url: "https://api.github.com/repos/gmcgehee/ChessEngine/deployments"
​​
description: "Two college students attempt to make a chess engine that can beat them in chess. Or, really, play at all."
​​
disabled: false
​​
downloads_url: "https://api.github.com/repos/gmcgehee/ChessEngine/downloads"
​​
events_url: "https://api.github.com/repos/gmcgehee/ChessEngine/events"
​​
fork: false
​​
forks: 0
​​
forks_count: 0
​​
forks_url: "https://api.github.com/repos/gmcgehee/ChessEngine/forks"
​​
full_name: "gmcgehee/ChessEngine"
​​
git_commits_url: "https://api.github.com/repos/gmcgehee/ChessEngine/git/commits{/sha}"
​​
git_refs_url: "https://api.github.com/repos/gmcgehee/ChessEngine/git/refs{/sha}"
​​
git_tags_url: "https://api.github.com/repos/gmcgehee/ChessEngine/git/tags{/sha}"
​​
git_url: "git://github.com/gmcgehee/ChessEngine.git"
​​
has_discussions: false
​​
has_downloads: true
​​
has_issues: true
​​
has_pages: false
​​
has_projects: true
​​
has_wiki: true
​​
homepage: null
​​
hooks_url: "https://api.github.com/repos/gmcgehee/ChessEngine/hooks"
​​
html_url: "https://github.com/gmcgehee/ChessEngine"
​​
id: 906462802
​​
is_template: false
​​
issue_comment_url: "https://api.github.com/repos/gmcgehee/ChessEngine/issues/comments{/number}"
​​
issue_events_url: "https://api.github.com/repos/gmcgehee/ChessEngine/issues/events{/number}"
​​
issues_url: "https://api.github.com/repos/gmcgehee/ChessEngine/issues{/number}"
​​
keys_url: "https://api.github.com/repos/gmcgehee/ChessEngine/keys{/key_id}"
​​
labels_url: "https://api.github.com/repos/gmcgehee/ChessEngine/labels{/name}"
​​
language: "C#"
​​
languages_url: "https://api.github.com/repos/gmcgehee/ChessEngine/languages"
​​
license: null
​​
merges_url: "https://api.github.com/repos/gmcgehee/ChessEngine/merges"
​​
milestones_url: "https://api.github.com/repos/gmcgehee/ChessEngine/milestones{/number}"
​​
mirror_url: null
​​
name: "ChessEngine"
​​
node_id: "R_kgDONgeGUg"
​​
notifications_url: "https://api.github.com/repos/gmcgehee/ChessEngine/notifications{?since,all,participating}"
​​
open_issues: 0
​​
open_issues_count: 0
​​
owner: Object { login: "gmcgehee", id: 159468057, node_id: "U_kgDOCYFKGQ", … }
​​
private: false
​​
pulls_url: "https://api.github.com/repos/gmcgehee/ChessEngine/pulls{/number}"
​​
pushed_at: "2024-12-21T07:43:48Z"
​​
releases_url: "https://api.github.com/repos/gmcgehee/ChessEngine/releases{/id}"
​​
size: 5
​​
ssh_url: "git@github.com:gmcgehee/ChessEngine.git"
​​
stargazers_count: 0
​​
stargazers_url: "https://api.github.com/repos/gmcgehee/ChessEngine/stargazers"
​​
statuses_url: "https://api.github.com/repos/gmcgehee/ChessEngine/statuses/{sha}"
​​
subscribers_url: "https://api.github.com/repos/gmcgehee/ChessEngine/subscribers"
​​
subscription_url: "https://api.github.com/repos/gmcgehee/ChessEngine/subscription"
​​
svn_url: "https://github.com/gmcgehee/ChessEngine"
​​
tags_url: "https://api.github.com/repos/gmcgehee/ChessEngine/tags"
​​
teams_url: "https://api.github.com/repos/gmcgehee/ChessEngine/teams"
​​
topics: Array []
​​
trees_url: "https://api.github.com/repos/gmcgehee/ChessEngine/git/trees{/sha}"
​​
updated_at: "2024-12-21T07:43:52Z"
​​
url: "https://api.github.com/repos/gmcgehee/ChessEngine"
​​
visibility: "public"
​​
watchers: 0
​​
watchers_count: 0
​​
web_commit_signoff_required: false
​​
<prototype>: Object { … }
​
1: Object { id: 1055263139, node_id: "R_kgDOPuYJow", name: "portfolio", … }
​
2: Object { id: 963698238, node_id: "R_kgDOOXDePg", name: "shooter", … }
​
3: Object { id: 1046646535, node_id: "R_kgDOPmKPBw", name: "web-design", … }
​
length: 4
​
<prototype>: Array []

*/

export default async function getRepos(username: string) {
    // the goal for this function is that it pings my github and turns all my repos into cards

    const githubRepoLink: string = `https://api.github.com/users/${username}/repos`;
    let repos: [{[key: string]: any}] = [{}]; // declaring outside to provide continual access

    try {
        repos = await fetch(githubRepoLink)
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

    repos.forEach((repo: {[key: string]: any}) => { // typescript typing is just insane brother
        console.log(`Name: ${repo["name"]} Description: ${repo["description"]}`);
    });
    

}
