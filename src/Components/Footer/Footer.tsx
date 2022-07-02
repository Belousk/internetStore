import React from "react";
import style from "./Footer.module.css"

import { faPizzaSlice, faPercent, faEllipsis, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return (
        <footer>

            <div className={style.footer}>
                <div className="wrapper">
                    <div className={style.footer_content}>
                        <div className={style.connection_with_us}>
                            <ul>
                                <li>реклама, сотрудничество и для коммерческих целей:</li>
                                <li>
                                    <a href="tel: 88432255530"><span
                                        className={style.phone_number}>8 (843) 22-555-30</span></a>
                                </li>
                            </ul>
                            <br/>
                                <a href="#" className={style.red}>Политика конфиденциальности</a>
                        </div>
                        <div className={style.our_payments}>
                            <p>Мы принимаем:</p>
                            <div className={style.payable_card}>
                                <img src={`${process.env.PUBLIC_URL}/assets/arrows/mastercard-classic.svg`} alt=""/>
                                <img src={`${process.env.PUBLIC_URL}/assets/arrows/visa-classic.svg`} alt=""/>
                                <img src={`${process.env.PUBLIC_URL}/assets/arrows/maestro.svg`} alt=""/>
                            </div>
                        </div>
                        <div className={style.our_app}>
                            <p>Скачайте наше приложение</p>
                            <div className={style.icons}>
                                <a href="#">
                                    <img src={`${process.env.PUBLIC_URL}/assets/arrows/appstore.png`} alt=""/>
                                </a>
                                <a href="#">
                                    <img src={`${process.env.PUBLIC_URL}/assets/arrows/google_play.png`} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.fixed_footer} id='footer'>
                <div className="wrapper">
                    <ul className={style.desktop}>
                        <li>
                            <a href='#'>Условия доставки
                            </a>
                        </li>
                        <li>
                            <a href='#'>О нас</a>
                        </li>
                        <li>
                            <a href='#'>Оставить отзыв</a>
                        </li>
                        <li>
                            <a href='#'>Оплата</a>
                        </li>
                        <li>
                            <a href='#promotion'>Акции</a>
                        </li>
                        <a href="#"><i className="fas fa-chevron-up"></i></a>
                    </ul>
                    <ul className={style.mobile}>
                        <li>
                            <a href='#' className="tabs" id='tab_set'>
                                <FontAwesomeIcon icon={faPizzaSlice} />
                                    <p>Меню</p>
                            </a>
                        </li>
                        <li>
                            <a href='#promotion'>
                                <FontAwesomeIcon icon={faPercent}/>

                                    <p>Акции</p>
                            </a>
                        </li>
                        <li>
                            <a href="#popup_cart" className="popup_link">
                                <FontAwesomeIcon icon={faShoppingBasket}/>
                                    <span id="items_quantity">0</span>
                                    <p>Корзина</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="ellipsis">

                                <FontAwesomeIcon icon={faEllipsis}/>

                                    <p>Прочее</p>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
            <ul className="hidden_ellipsis">
                <li>
                    <a href='#'>Условия доставки
                    </a>
                </li>
                <li>
                    <a href='#'>О нас</a>
                </li>
                <li>
                    <a href='#'>Оставить отзыв</a>
                </li>
                <li>
                    <a href='#'>Оплата</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;

