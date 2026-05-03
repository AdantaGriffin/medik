import styles from './cart.module.scss';
import { useApi } from '../api/api';

function Cart(){
    const {shoppingCart} = useApi();

    return(
        <>
            <div className={shoppingCart ? styles.cart : styles.showCart}>
                <div className={styles.cartHeading}>
                    <p>Cart:</p>
                    <p>(item count)</p>
                </div>
                <div className={styles.cartBody}>
                    <ul className={styles.cartList}>
                        <li className={styles.cartItem}>
                            <img src="null" alt="cart image"/>
                            <div className={styles.itemDetail}>
                                <p>item name</p>
                                <p>size</p>
                            </div>
                            <div className={styles.itemPrice}>price</div>
                        </li>
                    </ul>
                </div>
                <div>totals</div>
            </div>
        </>
    )
};

export default Cart