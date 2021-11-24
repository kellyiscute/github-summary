import { Octokit } from "octokit";
import { RepoContributionsType } from "./models/repo-contrib";
import { wait } from "./utils";

if (!process.env.GITHUB_PAT) {
  throw new Error("No GitHub Token configured");
}
if (!process.env.GITHUB_USERNAME) {
  throw new Error("No GitHub Username configured");
}
const octokit = new Octokit({ auth: process.env.GITHUB_PAT });
const username = process.env.GITHUB_USERNAME;

async function getData() {
  const repos = await octokit.request("GET /users/{username}/repos", {
    username,
    per_page: 100,
  });

  const totalChanges = {
    additions: 0,
    deletions: 0,
    commits: 0,
  };

  let counter = 0;
  for (const repo of repos.data) {
    counter += 1;
    try {
      const repoData = await octokit.request(
        "GET /repos/{owner}/{repo}/stats/contributors",
        {
          owner: username,
          repo: repo.name,
        }
      );
      console.log(
        `processing repo: ${repo.name}, ${counter}/${repos.data.length}`
      );
      const data = repoData.data as any as RepoContributionsType;
      for (const repoContrib of data) {
        // exclude other's repos
        if (repoContrib.author.login !== username) {
          continue;
        }
        const reduced = repoContrib.weeks.reduce(
          (prev, curr) => {
            return {
              a: prev.a + curr.a,
              d: prev.d + curr.d,
              c: prev.c + curr.c,
            };
          },
          { a: 0, d: 0, c: 0 }
        );

        totalChanges.additions += reduced.a;
        totalChanges.deletions += reduced.d;
        totalChanges.commits += reduced.c;
      }
    } catch (error) {
      console.warn(`get repo detail failed, skipping... repo: ${repo.name}`);
    }

    // wait for 500ms to avoid triggering rate limit
    await wait(500);
    console.log(totalChanges);
  }

  console.log("---------------result-------------------");
  console.log(totalChanges);
}

try {
  getData();
} catch (error) {
  console.error(error);
  process.exit(-1);
}
