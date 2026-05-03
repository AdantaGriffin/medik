import styles from './harlemXpd.module.scss';
import { Link } from 'react-router-dom';

function HarlemXPd(){
    return(
        <>
            <section className={styles.harlemPD}>
                <section className={styles.harlemPDGallery}>
                    <div id={styles.one}>
                        <div className={styles.details}>
                            <h2>PD x Harlem Cigar Room</h2>
                            <p>Discover the exciting collaboration between Paramedik Designs and Harlem Cigar Room, where fashion meets cigars in a fusion of style and sophistication.</p>
                            <Link to="/kings">shop</Link>
                        </div>
                    </div>
                    <img id={styles.two} className={styles.galleryImage} src="/images/two.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.three} className={styles.galleryImage} src="/images/three.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.four} className={styles.galleryImage} src="/images/four.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.five} className={styles.galleryImage} src="/images/five.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.six} className={styles.galleryImage} src="/images/six.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.seven} className={styles.galleryImage} src="/images/seven.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.eight} className={styles.galleryImage} src="/images/eight.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.nine} className={styles.galleryImage} src="/images/twelve.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.ten} className={styles.galleryImage} src="/images/ten.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.eleven} className={styles.galleryImage} src="/images/eleven.jpg" alt="harlemPdGalleryImage"/>
                    <img id={styles.twelve} className={styles.galleryImage} src="/images/nine.jpg" alt="harlemPdGalleryImage"/>
                </section>
            </section>
        </>
    )
};

export default HarlemXPd;