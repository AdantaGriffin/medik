import styles from './faq.module.scss';

function Faq(){
    return(
        <>
            <section className={styles.faq}>
                <section className={styles.faqOne}>
                    <h2>FAQ</h2>
                    <br></br>
                    <p>We want to make the experience of shopping with us as easy as possible, which is why we’ve taken the time to put together some of the most common questions our team gets asked. Still have questions? Let us know.</p>
                </section>

                <section className={styles.faqTwo}>
                    <h3>What size bracelet should I order?</h3>
                    <p>Please measure your wrist before selecting a bracelet size</p>

                    <p>Because each bracelet is made to order, it is crucial that you measure your wrist before purchasing. If you do not have fabric measuring tape, a thin piece or paper or string and a ruler will work just as well.</p>

                    <p>For the best fit please add an extra (1/2) inch/(1.3cm) to your wrist measurement to get the bracelet size.</p>

                    <p>Ex. Your wrist measurement was 6 inches/(15.2cm), the bracelet size you select is 6.5 inches/(16.5cm)</p>

                    <p>If wrist size is 6.5inches please select size 7 (Medium) bracelet at Check out.</p>

                    <ul>
                        <li>S - 6.5 inches – 16.50 cm
                        </li>
                        <li>M – 7 inches – 17.80 cm (Avg Women)</li>
                        <li>L – 7.5 inches – 19.00 cm (Avg Men)</li>
                        <li>XL – 8 inches – 20.30 cm</li>
                        <li>XXL – 8.5 inches – 21.60 cm</li>
                    </ul>
                </section>

                <section className={styles.faqThree}>
                    <h3>How can I order a custom bracelet or anklet ?</h3>
                    <p>SIMPLE!!</p>

                    <p>All custom orders require extra special attention, time and material sourcing. It may take longer than 7 days to create. Please go to the customize tab for custom orders.</p>

                    <p>All customized bracelets start at $45.00 and all      customized Anklets start at $25.00 depending on the types of stones used, prices will vary.</p>

                    <p>Let us know what you have in mind!</p>
                </section>

                <section className={styles.faqFour}>
                    <h3>How long will it take for my customized bracelet to be created?</h3>
                    <p>Please allow 2-4 weeks for personalization or longer due to demand. Once your order is placed, we can not refund due to the timeline.</p>

                    <p>Timeline is NOT a guarantee and can take shorter or longer than 2-4 weeks </p>

                    <p>NO REFUNDS can or will be given after order is placed due to the personalized nature of the order.</p>


                    <p>Once you place your order, you are agreeing to the timeline and understand it could be longer than 2 weeks</p>
                </section>

                <section className={styles.faqFive}>
                    <h3>What’s the best way to care for my Bracelet?</h3>
                    <p>The bracelet should be kept out of prolonged water. Take your bracelet off before showering, swimming, or washing the dishes. The elastic cord will wear down with long exposure to water, both hot and cold.</p> 

                    <p>Keep you bracelet away from harsh cleaning chemicals, extreme temperatures, lotions, perfumes, soaps, and anything that will react with the elastic.</p> 

                    <p>Wear your bracelets the proper way. Do not overstretch.</p>
                </section>

                <section className={styles.faqSix}>
                    <h3>Why are the spacers and number of beads on my Bracelet not the same as the picture?</h3>
                    <p>Every bracelet is made in different sizes, which mean the spacers will be different based on length as well as the number of beads.</p>
                </section>

                <section className={styles.faqSeven}>
                    <h3>Which payment methods do you accept?</h3>
                    <p>We accept Debit and Credit Cards when making payments</p>
                </section>

                <section className={styles.faqEight}>
                    <h3>Do you have a store?</h3>
                    <p>No, we currently have only an online store.</p>
                </section>

                <section className={styles.faqNine}>
                    <h3>Do you have a return policy?</h3>
                    <p>Should you receive a damaged item, please contact us to initiate return process. Items must be returned in original, resealable condition. Returns must be received within 14 days of delivery.</p>
                    <p>Paramedik Designs</p>

                    <p>300 Cadman Plaza West 12th Floor
                    Brooklyn Heights, NY 11201</p>

                    <p>Shipping is not refundable.</p>

                    <p>All refunds will be credited in the original form of payment for the original amount paid.  Please allow at least one billing cycle for the credit to post to your account.</p>
                </section>

                <section className={styles.faqTen}>
                    <h3>Do you ship packages internationally?</h3>
                    <p>Yes, but international shipping and handling charges will apply.</p>
                </section>

                <section className={styles.faqEleven}>
                    <h3>How can I stay connected with Paramedik Designs ?</h3>
                    <p>Join Paramedik Designs, our monthly e-newsletter that introduces you to new products, new trends, flash sales, discounts, style guide and more. You can also follow us on all of the major social media channels.</p>
                </section>

                <section className={styles.faqTweleve}>
                    <h3>My order said that it was delivered, but I do not see it. Where can it be ?</h3>
                    <p>Unfortunately, we have no control over the shipment once it leaves our fulfillment center. Please double check the address you provided at checkout is complete. Otherwise, you will have to file a claim with the USPS to locate your missing package.</p>
                </section>

                <section className={styles.faqThirteen}>
                    <h3>I have not received an order confirmation, why is that?</h3>
                    <p>Please double check that the email address provided at checkout is correct. Order Confirmations may take up to 24 hours to appear in your inbox.</p>
                </section>
                <p className={styles.somethingMissed}>Please double check that the email address provided at checkout is correct. Order Confirmations may take up to 24 hours to appear in your inbox.</p>
            </section>
        </>
    )
};

export default Faq;