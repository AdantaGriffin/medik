import styles from './header.module.scss';
import Navigation from '../navigation/navigation';

function Header(){
    return(
        <>
            <header className={styles.header}>
                <img className={styles.headerImg} alt="logoIcon" src="/images/paraIconLarge.avif"/>
                <div className={styles.scrollingBanner}>
                    <p className={styles.bannerBrand}>FREE SHIPPING ON ORDERS $75+</p>
                </div>
                
                <div className={styles.headerNav}>
                    <Navigation/>
                </div>
            </header>
        </>
    )
};

export default Header;