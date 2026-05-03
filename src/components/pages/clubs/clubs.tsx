import styles from './clubs.module.scss';

function Clubs(){
    return(
        <>
            <section className={styles.kings}>
                <div className={styles.kingsone}>
                    <img src="/images/kingone.jpg" alt="kingsimage"/>
                    <button className={styles.button}>Clubs</button>
                </div>
                <div className={styles.kingstwo}>
                    <p>"Dont be a pawn, when you're meant to be the king."</p>
                </div>
                <div className={styles.kingsthree}>
                    <img src="/images/kingthree.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfour}>
                    <img src="/images/kingfour.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsfive}>
                    <img src="/images/kingfive.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingssix}>
                    <img src="/images/kingsix.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsseven}>
                    <img src="/images/kingseven.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingseight}>
                    <img src="/images/kingeight.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsnine}>
                    <img src="/images/kingnine.jpg" alt="kingsimage"/>
                </div>
                <div className={styles.kingsten}>
                    <img src="/images/kingten.jpg" alt="kingsimage"/>
                </div>
            </section>
        </>
    )
};

export default Clubs;