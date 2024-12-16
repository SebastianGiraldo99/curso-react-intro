import React from "react";
import { TbRosetteDiscountCheck, TbRosetteDiscountCheckFilled } from "react-icons/tb";

function CompleteIcon({done, onClick}){
    const iconSelected = done?   <TbRosetteDiscountCheckFilled fill="green" />:<TbRosetteDiscountCheck />;
    return (
        <>
        <span className={done? 'span-icon-done': 'span-icon-uncompleted'}
        onClick={onClick}
        >{iconSelected}</span>
        </>


    );
}

export {CompleteIcon};