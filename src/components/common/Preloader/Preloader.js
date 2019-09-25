import s from "../../Users/Users.module.css";
import preloader from "../../../assets/images/loader.svg";
import React from "react";

let Preloader = (props) => {
    return <img className={s.preloader} src={preloader}/>
};

export default Preloader