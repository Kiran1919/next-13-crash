import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/Kiran1919/repos");
  const repos = await response.json();
  return repos;
}

async function ReposPage() {
  const data = await fetchRepos();
  //   console.log(data);
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {data &&
          data.map((repo) => (
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar />
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                  <span>
                    <FaEye />
                    {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ReposPage;
