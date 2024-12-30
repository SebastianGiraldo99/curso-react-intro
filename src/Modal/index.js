import React from "react";
import ReactDOM from "react-dom";
import './ModalBack.css';
function Modal({children}){
    return ReactDOM.createPortal(
        <div className="modal-overlay show"> 
            <div className="modal-back">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal}