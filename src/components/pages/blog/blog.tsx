import styles from './blog.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../../api/api';

function Blog(){
    return(
        <>
            <section className={styles.clubs}>
                <h2>Blogs</h2>
                <section className={styles.clubsContainer}>
                    <article className={styles.clubsarticle}>
                        <img src="null" alt="article image"/>
                        <div className={styles.articleData}>
                            <p>poster/profile information/</p>
                            <h3>article title</h3>
                            <p>article short...</p>
                        </div>
                    </article>
                    <article className={styles.clubsarticle}>
                        <img src="null" alt="article image"/>
                        <div className={styles.articleData}>
                            <h3>article</h3>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
};

export default Blog;