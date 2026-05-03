import styles from './custom.module.scss';

function Custom(){
    return(
        <>
            <section className={styles.custom}>
                <img alt="customImage" src="/images/customs.avif" height="100%" width="100%"/>
                <div className={styles.formContainer}>
                    <div className={styles.formText}>
                        <h2>Contact Us</h2>
                        <p>Looking for the perfect Paramedik Bracelet to celebrate an upcoming occasion? Let us know what ideas you have and we will make your imagination become reality. Here at Paramedik Designs we are more than happy to help.</p>
                        <br></br>
                        <p>**All customized bracelets start at $45.00 and all customized Anklets start at $25.00 depending on the types of stones used, prices will vary**</p>
                    </div>
                    <form className={styles.form}>
                        <input required type="text" placeholder="Name"/>
                        <input required type="text" placeholder="Enter your address"/>
                        <input required type="email" placeholder="Email"/>
                        <input required type="number" placeholder="Quantity"/>
                        <input required type="" placeholder="Wrist size in inches / cm"/>
                        <input required className={styles.description} type="text" placeholder="Detailed description of bracelet here"/>
                        <div className={styles.checkboxContainer}>
                            <label htmlFor="lapisLazuli">
                                <p>Lapis Lazuli</p>
                                <input name="lapisLazuli" type="checkbox"/>
                            </label>

                            <label htmlFor="rosequartz">
                                <p>Rose Quartz</p>
                                <input name="rosequartz" type="checkbox"/>
                            </label>

                            <label htmlFor="coral">
                                <p>Coral</p>
                                <input name="coral" type="checkbox"/>
                            </label>

                            <label htmlFor="blueTigerEye">
                                <p>Blue Tiger Eye</p>
                                <input name="blueTigerEye" type="checkbox"/>
                            </label>

                            <label htmlFor="jasper">
                                <p>Jasper</p>
                                <input name="jasper" type="checkbox"/>
                            </label>
                        </div>

                        <input className={styles.submit} type="submit"/>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Custom;