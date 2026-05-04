import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { toTop } from '../api/api';
import { useApi } from '../api/api';

function Home(){
    const {shoppingCart} = useApi();
    return(
        <>
            <section className={shoppingCart ? styles.cart : styles.home}>
                <section className={styles.hero}>
                    <img alt="hero image" src="/images/medik-hero-2girls.avif"/>
                </section>

                <section className={styles.featuredCollection}>
                    <h2>Featured Collection</h2>
                    <p>Every piece we stock at Paramedik Designs has to pass our strict criteria. The result is a carefully curated jewelry collection that is both accessible and inspirational. Take a look at our latest additions.</p>
                </section>

                <section className={styles.collectionTypes}>
                    <div className={styles.type}>
                        <img alt="image" src="/images/essentials-collection.avif"/>
                        <div className={styles.typeBot}>
                            <h3>Essentials Collection</h3>
                            <Link onClick={toTop}  to="/essential">view collection</Link>
                        </div>
                    </div>
                    <div className={styles.type}>
                        <img alt="image" src="/images/hearts-collection.avif"/>
                        <div className={styles.typeBot}>
                            <h3>Heart Collection</h3>
                            <Link onClick={toTop}  to="/hearts">view collection</Link>
                        </div>
                    </div>
                    <div className={styles.type}>
                        <img alt="image" src="/images/kings-collection.avif"/>
                        <div className={styles.typeBot}>
                            <h3>Kings Collection</h3>
                            <Link onClick={toTop}  to="/kings">view collection</Link>
                        </div>
                    </div>
                    <div className={styles.type}>
                        <img alt="image" src="/images/spades-collection.avif"/>
                        <div className={styles.typeBot}>
                            <h3>Spades Collection</h3>
                            <Link onClick={toTop}  to="/spades">view collection</Link>
                        </div>
                    </div>
                </section>

                <section className={styles.quickView}>
                    <div className={styles.item}>
                        <img alt="image" src="null"/>
                        <div className={styles.itemDetails}>
                            <p>Indian Agate</p>
                            <hr></hr>
                            <p>20.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img alt="image" src="null"/>
                        <div className={styles.itemDetails}>
                            <p>Yellow Agate</p>
                            <hr></hr>
                            <p>20.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img alt="image" src="null"/>
                        <div className={styles.itemDetails}>
                            <p>Jasper</p>
                            <hr></hr>
                            <p>20.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img alt="image" src="null"/>
                        <div className={styles.itemDetails}>
                            <p>Lime Green Jade</p>
                            <hr></hr>
                            <p>20.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img alt="image" src="null"/>
                        <div className={styles.itemDetails}>
                            <p>Sodalite</p>
                            <hr></hr>
                            <p>20.00</p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img alt="image" src="null"/>
                        <div className={styles.itemDetails}>
                            <p>Obsidian</p>
                            <hr></hr>
                            <p>20.00</p>
                        </div>
                    </div>
                </section>

                <section className={styles.commonStones}>
                    <img alt="common stones" src="/images/commonStones.PNG"/>
                    <h2>Common Stones</h2>
                    <Link onClick={toTop} to="/stones">view collection</Link>
                </section>

                <section className={styles.kingsCollection}>
                    <img alt="kings collection" src="./images/4kings.avif"/>
                    <h2>Kings Collection</h2>
                    <Link onClick={toTop}  to="/kings">view collection</Link>
                </section>

                <section className={styles.essentials}>
                    <img alt="essentials" src="./images/essentials.avif"/>
                    <h2>Essentials Collection</h2>
                    <Link onClick={toTop}  to="/essential">view collection</Link>
                </section>

                 <section className={styles.harlemPD}>
                    <img alt="harlem x pd" src="./images/one.jpg"/>
                    <h2>Harlem x PD Collection</h2>
                    <Link onClick={toTop}  to="/harlemXpd">view collection</Link>
                </section>

                 <section className={styles.spades}>
                    <img alt="spades collection" src="./images/spades-collection.avif"/>
                    <h2>Spades Collection</h2>
                    <Link onClick={toTop}  to="/spades">view collection</Link>
                </section>

                 <section className={styles.hearts}>
                    <img alt="hearts collection" src="./images/hearts-collection.avif"/>
                    <h2>Hearts Collection</h2>
                    <Link onClick={toTop}  to="/hearts">view collection</Link>
                </section>

                 <section className={styles.customize}>
                    <img alt="custom collection" src="./images/selfie.png"/>
                </section>

                 <section className={styles.pdsociety}>
                    <img alt="pd society collection" src="./images/lol.jpg"/>
                    <h2>PD Collection </h2>
                    <h3>House of Cards</h3>
                    <p>Since 2020, Parademik Designs has been helping customers globally with our selection of exquisite and unique jewlery.</p>
                    <Link onClick={toTop}  to="null">view collection</Link>
                </section>

                 <section className={styles.customize}>
                    <img alt="custom collection" src="./images/ruler.jpg"/>
                    <h2>Custom Collection</h2>
                    <h3>Made Just For You</h3>
                    <p>A customized bracelet is designed with only its owner in mind.The process of creating it, however long- established, should be every bit as accomodationg.</p>
                    <p>Let us know what kind of bracelet you would like us to create.</p>
                    <Link onClick={toTop}  to="/custom">view collection</Link>
                </section>

                 <form className={styles.form}>
                    <h2>Contact Us</h2>
                    <section className={styles.formArea}>
                        <section className={styles.formContainer}>
                            <input name="name" placeholder="Name" type="text"/>
                            <input name="email" placeholder="Email" type="email"/>
                            <input name="subject" placeholder="Subject" type="text"/>
                            <input id={styles.message} name="message"  placeholder="Type your message here" type="text"/>
                            <input id={styles.id} type="submit"></input>
                        </section>
                        <img src="/images/contact.avif" alt="contactG"/>
                    </section>
                </form>

            </section>
        </>
    )
};

export default Home;