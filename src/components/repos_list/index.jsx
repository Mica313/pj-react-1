import { useEffect, useState } from "react";

const Repos_list = () => {
    const {repos, setRepos} = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Mica313/repos')
        .then(res => res.json())
        .then(resjson => {
            setRepos(resjson);
        })
    }, [])
    return (
        <ul>
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Nome:</b>{repositorio.name}
                    <b>Linguagem:</b>{repositorio.language}
                    <a target="_blank" href={repositorio.html_url}></a>
                </li>
                
            ))}
            <li>Repositorio</li>
        </ul>
    )
}
export default Repos_list;