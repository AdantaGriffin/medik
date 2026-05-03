import styles from './stones.module.scss';

function Stones(){
    return(
        <>
            <section className={styles.stones}>
                <div className={styles.header}>
                    <div>
                        <h2>Stones</h2>
                        <p>Stones & Meanings</p>
                        <button>Shop</button>
                    </div>
                </div>
                <div className={styles.stonesList}>
                    <ul className={styles.list}>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Stones;