import React from "react";

interface Props{
    title: string;
    onClick: () => void;
}

const NavBtnComponent: React.FC<Props> = ({ title, onClick }) => {
    return (
        <button className="navBtnStyle" onClick={onClick}>{title}</button>
    );
}

export default NavBtnComponent;
