import styles from './shop.module.scss';
import { useApi } from '../../api/api';

function Shop(){
    const{dropCat, setDropCat, dropPrice, setDropPrice, dropSize, setDropSize, dropStone, setDropStone, dropZodiac, setDropZodiac} = useApi();
    return(
        <>
            <section className={styles.shop}>
                <section className={styles.shopHeader}>
                    <ul className={styles.shopHeaderList}>
                        <li>
                            <h2>Filter by:</h2>
                            <ul className={styles.shopHeaderCategories}>
                                <li
                                onMouseLeave={() => setDropCat(false)}
                                onMouseEnter={() => {setDropCat(true)}} className={styles.dropDownCat}>
                                    <h3>category</h3>
                                    <div className={dropCat ? styles.dropContentShop : styles.noDrop}>
                                        <label htmlFor="all">
                                            <input name="all" type="checkbox"/>
                                            all
                                        </label>
                                        <label htmlFor="clubs collection">
                                            <input name="clubs collection" type="checkbox"/>
                                            clubs collection
                                        </label>
                                        <label htmlFor="hearts collection">
                                            <input name="hearts collection" type="checkbox"/>
                                            hearts collection
                                        </label>
                                        <label htmlFor="PD x HCR collection">
                                            <input name="PD x HCR collection" type="checkbox"/>
                                            PD x HCR collection
                                        </label>
                                        <label htmlFor="zodiac">
                                            <input name="zodiac" type="checkbox"/>
                                            zodiac
                                        </label>
                                        <label htmlFor="spades colllection">
                                            <input name="spades colllection" type="checkbox"/>
                                            spades colllection
                                        </label>
                                        <label htmlFor="PD colllection">
                                            <input name="PD colllection" type="checkbox"/>
                                            PD colllection
                                        </label>
                                        <label htmlFor="essentials colllection">
                                            <input name="essentials colllection" type="checkbox"/>
                                            essentials colllection
                                        </label>
                                        <label htmlFor="kings colllection">
                                            <input name="kings colllection" type="checkbox"/>
                                            kings colllection
                                        </label>
                                    </div>
                                </li>
                                <li
                                onMouseLeave={() => setDropPrice(false)}
                                onMouseEnter={() => {setDropPrice(true)}} className={styles.dropDownPrice}>
                                    <h3>price</h3>
                                    <div className={dropPrice ? styles.dropContentShop : styles.noDrop}>
                                        <label htmlFor="25">
                                            <input name="25" type="checkbox"/>
                                            under 25
                                        </label>
                                        <label htmlFor="50">
                                            <input name="50" type="checkbox"/>
                                            under 50
                                        </label>
                                        <label htmlFor="75">
                                            <input name="75" type="checkbox"/>
                                            under 75
                                        </label>
                                        <label htmlFor="100">
                                            <input name="100" type="checkbox"/>
                                            over 100
                                        </label>
                                    </div>
                                </li>
                                <li
                                onMouseLeave={() => setDropSize(false)}
                                onMouseEnter={() => {setDropSize(true)}} className={styles.dropDownSize}>
                                    <h3>size</h3>
                                    <div className={dropSize ? styles.dropContentShop : styles.noDrop}>
                                        <label htmlFor="s">
                                            <input name="s" type="checkbox"/>
                                            sm
                                        </label>
                                        <label htmlFor="m">
                                            <input name="m" type="checkbox"/>
                                            m
                                        </label>
                                        <label htmlFor="l">
                                            <input name="l" type="checkbox"/>
                                            l
                                        </label>
                                        <label htmlFor="xl">
                                            <input name="xl" type="checkbox"/>
                                            xl
                                        </label>
                                        <label htmlFor="xxl">
                                            <input name="xxl" type="checkbox"/>
                                            xxl
                                        </label>
                                        <label htmlFor="one">
                                            <input name="one" type="checkbox"/>
                                            one
                                        </label>
                                    </div>
                                </li>
                                <li
                                onMouseLeave={() => setDropStone(false)}
                                onMouseEnter={() => {setDropStone(true)}} className={styles.dropDownStone}>
                                    <h3>stone</h3>
                                    <div className={dropStone ? styles.dropContentShop : styles.noDrop}>
                                        <label htmlFor="amazonite">
                                            <input name="amazonite" type="checkbox"/>
                                            amazonite
                                        </label>
                                        <label htmlFor="amethyst">
                                            <input name="amethyst" type="checkbox"/>
                                            amethyst
                                        </label>
                                        <label htmlFor="aquamarine">
                                            <input name="aquamarine" type="checkbox"/>
                                            aquamarine
                                        </label>
                                        <label htmlFor="blue topaz">
                                            <input name="blue topaz" type="checkbox"/>
                                            blue topaz
                                        </label>
                                        <label htmlFor="citrine">
                                            <input name="citrine" type="checkbox"/>
                                            citrine
                                        </label>
                                        <label htmlFor="crystal quartz">
                                            <input name="crystal quartz" type="checkbox"/>
                                            crystal quartz
                                        </label>
                                    </div>
                                </li>
                                <li
                                onMouseLeave={() => setDropZodiac(false)}
                                onMouseEnter={() => {setDropZodiac(true)}} className={styles.dropDownZodiac}>
                                    <h3>zodiac</h3>
                                    <div className={dropZodiac ? styles.dropContentShop : styles.noDrop}>
                                        <label htmlFor="aquarius">
                                            <input name="aquarius" type="checkbox"/>
                                            aquarius
                                        </label>
                                        <label htmlFor="aries">
                                            <input name="aries" type="checkbox"/>
                                            aries
                                        </label>
                                        <label htmlFor="cancer">
                                            <input name="cancer" type="checkbox"/>
                                            cancer
                                        </label>
                                        <label htmlFor="capricorn">
                                            <input name="capricorn" type="checkbox"/>
                                            capricorn
                                        </label>
                                        <label htmlFor="gemini">
                                            <input name="gemini" type="checkbox"/>
                                            gemini
                                        </label>
                                        <label htmlFor="leo">
                                            <input name="leo" type="checkbox"/>
                                            leo
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className={styles.shopHeaderSort}>
                                <select>
                                    <option>sort by:</option>
                                </select>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section className={styles.shopBody}>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                    <div className={styles.item}>item</div>
                </section>
            </section>
        </>
    )
};

export default Shop;