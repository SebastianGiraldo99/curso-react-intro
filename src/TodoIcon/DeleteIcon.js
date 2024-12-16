import React from "react";
import { IoIosRemoveCircle, IoIosRemoveCircleOutline } from "react-icons/io";

function DeleteIcon ({done, onClick, className}){
    const iconReturn = done?  <IoIosRemoveCircle fill="grey" />:<IoIosRemoveCircleOutline /> ;
    return (
    <>
    <span className={className} onClick={onClick}>
        {iconReturn}
    </span>
    

    </>
    );
}

export { DeleteIcon };