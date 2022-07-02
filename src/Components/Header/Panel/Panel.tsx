import React from "react";
import styles from "./Panel.module.css";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


type categoryType = {
    category: string,
    link: string
};

const Panel = (props: any) => {
    return (
    <div className={styles.panel} id='panel'>
        <ul className={styles.panel_ul}>
            {
                props.categories.map((category: categoryType) => {
                    return <li className={styles.panel_ul_li}><NavLink
                        className={({isActive}) => (isActive ? `${styles.tab_active}` : '')} to={category.link}
                        id='tab_sets'>{category.category}</NavLink>
                    </li>;
                })
            }
        </ul>
        <div className={styles.cart}>
            <a href="#popup_cart" className="popup_link">
                <span>КОРЗИНА</span>
                <span className={styles.divider}></span>
                <span id="items_quantity">0</span>
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrow_icon}/>
            </a>
            <div className={styles.cart_description}>
                <ul className="cart-content__list"></ul>
                <div className="cart_sum">
                    Сумма заказа: <span id='items_end_price'>0</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Panel;