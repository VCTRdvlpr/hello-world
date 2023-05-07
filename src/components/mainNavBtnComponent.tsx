import React from "react";

interface props{
    title: string;   
}

const MainNavBtnComponent: React.FC<props> = ({title}) =>{
    return(
        <button className="mainNavBtnStyle">{title}</button>
    );
}

export default MainNavBtnComponent;