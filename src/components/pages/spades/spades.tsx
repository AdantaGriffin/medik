import styles from './spades.module.scss';

function Spades(){
    return(
        <>
            <section className={styles.kings}>
                <div className={styles.kingsone}>
                    <button className={styles.button}>Spades</button>
                </div>
                <div className={styles.kingstwo}>
                    <p>"Let your ankles do the talking!"</p>
                </div>
                <div className={styles.kingsthree}>
                    <img src="/images/spadesthree.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfour}>
                    <img src="/images/spadesfour.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfive}>
                    <img src="/images/spadesseven.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingssix}>
                    <img src="/images/spadessix.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsseven}>
                    <img src="/images/spadeseleven.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingseight}>
                    <img src="/images/spadeseight.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsnine}>
                    <img src="/images/spadesnine.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsten}>
                    <img src="/images/spadesten.jpg" alt="kingsimage"/>
                </div>
            </section>
        </>
    )
};

export default Spades;