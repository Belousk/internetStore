import React from 'react';
import styles from './Header.module.css';
import logo from './HeaderImages/Favicon.jpg';
import instagram from './HeaderImages/social_media/instagram.svg';
import facebook from './HeaderImages/social_media/facebook.svg';
import { faSignIn, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'react-router-dom';
import Panel from "./Panel/Panel";




const Header = (props: any) => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.rows}>
                    <div className={styles.special_delivery}>
                        Доставка <br/> за 60 минут!
                    </div>
                    <div className={styles.logo}>
                        <NavLink to="./" className="tabs" id="tab_main">
                            <img className={styles.logoImg} src={logo} alt=""/>
                        </NavLink>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.social_media}>
                            <a href="https://www.instagram.com/sushixan.kzn/" target="_blank">

                                <img className={styles.social_media_img} src={instagram} alt=""/>
                            </a>
                            <a href="#">
                                <img className={styles.social_media_img} src={facebook} alt=""/>
                            </a>
                        </div>
                        <div>
                            <div className={styles.contacts}>
                                <a className={styles.phone_number_link} href="tel: 89872255530"><span className={styles.phone_number}>8 (987) 225-55-30</span></a>
                            </div>
                            <div className={styles.work_time}>
                                <span className={styles.time}>Ежедневно с 10:00 до 00:00</span>
                            </div>
                        </div>
                        <div className={styles.sushi_address}>Кул Гали 11б</div>
                    </div>
                    <div className={styles.sign_in}>
                        <FontAwesomeIcon icon={faSignIn}/>
                    </div>
                </div>
            </div>
            <Panel categories={props.categories} />
        </header>
    );
}

export default Header;
