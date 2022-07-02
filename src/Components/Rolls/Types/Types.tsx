import React from 'react';
import style from './Types.module.css';
import {NavLink} from "react-router-dom";


type rollType = {
    src: string,
    name: string
}

let rolls_type: Array<rollType> = [
    {
        src: 'cold',
        name: 'Холодные'
    },
    {
        src: 'hot',
        name: 'Горячие'
    },
    {
        src: 'baked',
        name: 'Запечённые'
    }
]

const Types = (props: any) => {
    return (
       <div className={style.types}>
            <ul>
                {
                    rolls_type.map((roll: rollType) => {
                        return  <li>
                                    <NavLink to={roll.src} className={style.type}>
                                        {roll.name}
                                    </NavLink>
                                </li>
                    })
                }
            </ul>
       </div>
    );
}

export default Types;
