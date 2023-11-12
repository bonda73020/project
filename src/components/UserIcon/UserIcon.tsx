import React from 'react';

import img from '../../img/user.png'
import css from './UserIcon.module.css'
const UserIcon = () => {
    return (
        <div>
            <img className={css.img} src={img} alt=""/>
        </div>
    );
};

export {UserIcon};