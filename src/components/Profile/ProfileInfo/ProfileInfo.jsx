import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-307.jpg?size=626&ext=jpg" alt="background"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                ava + description
            </div>
        </div>

    );
};

export default ProfileInfo;