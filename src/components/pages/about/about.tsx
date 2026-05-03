import styles from './about.module.scss';

function About(){
    return(
        <>
            <section className={styles.about}>
                <div className={styles.aboutOne}>
                    <h2>About Us</h2>
                    <br></br>
                    <h3>Timeless Jewelry. Modern Luxury. Crafted in New York City</h3>
                    <br></br>
                    <p>Paramedik Designs was founded in 2020 and has been a valued online Jewelry Shop in New York ever since. Since we opened our doors, we have gained a reputation for being friendly, approachable, and affordable, which keeps our customers coming back to mark their special occasions with us.​Paramedik Designs was created to make sure that our customer's dreams become reality with custom-made bracelets from our team's vision or with ideas of your own! We value our customers by having that one to one communication and making your ideas come to life. With our team here at Paramedik Designs, we want to make sure you are satisfied with your bracelet or anklet.</p>
                </div>
                <div className={styles.aboutTwo}>
                    <div className={styles.aboutTwoTop}>
                        <div>
                            <p>Every detail matters to us here at Paramedik to ensure customer satisfaction. We want to build that confidence that each individual has.</p>
                            <br></br>
                            <p>The confidence that comes from feelings of well-being, acceptance of your body and mind (your self-esteem) and belief in your own ability, skills and experience from your interior to exterior. Think of us as your personal tailor. These anklets and bracelets are made just for you, single or stacked.</p>
                        </div>
                        <div>
                            <img src="/images/essentials.avif" alt="about image"/>
                        </div>
                    </div>
                    <div className={styles.aboutTwoBot}>
                        <div>
                            <img src="/images/multi.avif" alt="about image"/>
                        </div>
                        <div>
                            <p>We carry custom items created by our own bench jeweler as well as seasonal collections from some of the best stones and charms. Using the best strong elastic thread polyester string, we ensure superior quality. No matter what type of jewelry you are looking for, you will be able to find it at Paramedik Designs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;