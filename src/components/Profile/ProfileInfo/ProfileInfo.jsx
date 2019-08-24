import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-307.jpg?size=626&ext=jpg" alt="background"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
};

export default ProfileInfo;