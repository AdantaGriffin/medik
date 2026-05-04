import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';
import { toTop } from '../api/api';

function Navigation(){
    const {shoppingCart, setShoppingCart, dropShop, setDropShop, dropSociety, setDropSociety} = useApi();
    console.log(shoppingCart)
    const alterCart = () => {
        setShoppingCart(prev => !prev);
    }
    return(
        <>
            <nav className={styles.navigation}>
                <section className={styles.navListContainer}>
                    <ul className={styles.navList}>
                        <li><Link to="/">Home</Link></li>
                        <li
                            onMouseLeave={() => setDropShop(false)}
                            onMouseEnter={() => {setDropShop(true)}} className={styles.dropDown}>
                            <Link to="/shop">Shop</Link>
                            <div 
                            className={dropShop ? styles.dropContent : styles.noDrop}>
                                <Link onClick={toTop}  to="/harlemXpd">PD x Harlem</Link>
                                <Link onClick={toTop}  to="/essential">Essentials</Link>
                                <Link onClick={toTop}  to="/spades">Spades</Link>
                                <Link onClick={toTop}  to="/kings">Kings</Link>
                                <Link onClick={toTop}  to="/hearts">Hearts</Link>
                                <Link onClick={toTop}  to="/clubs">Clubs</Link>
                            </div>
                        </li>
                        <li
                            onMouseLeave={() => setDropSociety(false)}
                            onMouseEnter={() => {setDropSociety(true)}} className={styles.dropDown}>
                            <Link onClick={toTop} to="/blog">Society</Link>
                            <div 
                            className={dropSociety ? styles.dropContent : styles.noDrop}>
                                <Link onClick={toTop}  to="/about">About Us</Link>
                                <Link onClick={toTop}  to="/stones">Stones</Link>
                                <Link onClick={toTop}  to="/visuals">Visulas</Link>
                            </div>
                            
                        </li>
                        <li><Link to="/faq">Faqs</Link></li>
                        <li><Link to="/custom">Customs</Link></li>
                    </ul>
                </section>
                <section className={styles.navLinksContainer}>
                    <button className={styles.cartButton} onClick={alterCart}>Links</button>
                    <ul className={styles.navLinks}>
                        <li><Link onClick={toTop}  to="https://www.facebook.com/paramedikdesigns" target="_blank"><img height="20px" width="20px" alt="icon" src="/images/facebook.png"/></Link></li>
                        <li><Link onClick={toTop}  to="https://www.instagram.com/paramedikdesigns/" target="_blank"><img height="20px" width="20px" alt="icon" src="/images/instagram.png"/></Link></li>
                        <li><Link onClick={toTop}  to="null" target="_blank"><img height="25px" width="25px" alt="icon" src="/images/user.png"/></Link></li>
                        <li>
                            <button
                            onClick={() => {setShoppingCart(prev => !prev), toTop}}>
                                <img height="20px" width="20px" alt="icon" src="/images/shopping-bag.png"/>
                            </button>
                        </li>
                    </ul>
                </section>
            </nav>
                
        </>
    )
};

export default Navigation;