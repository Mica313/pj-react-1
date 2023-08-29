import { useEffect, useState } from "react";
import styles from './Reposlist.module.css';

const Repos_list = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resjson => {
            setRepos(resjson);
        })
    }, [nomeUsuario])
    return (
    <div className="container">
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.ItemName}>
                        <b>Nome:</b>{repositorio.name}
                    </div>
                    <div className={styles.ItemLanguage}>
                        <b>Linguagem:</b>{repositorio.language}
                    </div>
                    <a className={styles.ItemLink} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
                
            ))}
            <li>Repositorio</li>
        </ul>
    </div>
    )
}
export default Repos_list;