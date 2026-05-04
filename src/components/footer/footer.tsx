import styles from './footer.module.scss';

function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <h4>
                    ©2022 by Paramedik Designs - <code><span style={{color: "blue"}}>A</span>A<span style={{color: "red"}}>G</span></code>
                </h4>
            </footer>
        </>
    )
};

export default Footer;