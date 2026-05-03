import styles from './hearts.module.scss';

function Hearts(){
    return(
        <>
            <section className={styles.kings}>
                <div className={styles.kingsone}>
                    <button className={styles.button}>Hearts</button>
                </div>
                <div className={styles.kingstwo}>
                    <p>"Follow your heart."</p>
                </div>
                <div className={styles.kingsthree}>
                    <img src="/images/heartthree.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfour}>
                    <img src="/images/heartfour.avif" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfive}>
                    <img src="/images/heartsix.png" alt="kingsimage"/>
                </div>
                <div className={styles.kingssix}>
                    <img src="/images/heartsix.png" alt="kingsimage"/>
                </div>
                <div className={styles.kingsseven}>
                    <img src="/images/heartseven.avif" alt="kingsimage"/>
                </div>
                <div className={styles.kingseight}>
                    <img src="/images/hearteight.png" alt="kingsimage"/>
                </div>
                <div className={styles.kingsnine}>
                    <img src="/images/heartnine.png" alt="kingsimage"/>
                </div>
                <div className={styles.kingsten}>
                    <img src="/images/heartten.avif" alt="kingsimage"/>
                </div>
            </section>
        </>
    )
};

export default Hearts;