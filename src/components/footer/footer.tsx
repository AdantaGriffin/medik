import styles from './footer.module.scss';

function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <h4>
                    ©2022 by Paramedik Designs - <code>Made by <span style={{color: "red"}}>Adanta</span> Ahmed <span style={{color: "blue"}}>Griffin</span></code>
                </h4>
            </footer>
        </>
    )
};

export default Footer;