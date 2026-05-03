import styles from './essential.module.scss';

function Essential(){
    return(
        <>
            <section className={styles.kings}>
                <div className={styles.kingsone}>
                    <button className={styles.button}>Essentials</button>
                </div>
                <div className={styles.kingstwo}>
                    <p>"Summer time is here. Why not treat yourself with some PD essentials?"</p>
                </div>
                <div className={styles.kingsthree}>
                    <img src="/images/essentialthree.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfour}>
                    <img src="/images/essentialfour.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfive}>
                    <img src="/images/essentialfive.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingssix}>
                    <img src="/images/essentialsix.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsseven}>
                    <img src="/images/essentialseven.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingseight}>
                    <img src="/images/essentialeight.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsnine}>
                    <img src="/images/essentialnine.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsten}>
                    <img src="/images/essentialten.jpg" alt="kingsimage"/>
                </div>
            </section>
        </>
    )
};

export default Essential;