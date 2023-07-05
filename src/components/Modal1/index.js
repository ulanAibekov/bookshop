import React from 'react';
import './index.scss'
import {AiFillCheckCircle, AiOutlineCloseCircle} from "react-icons/ai";

const Modal1 = ({ isOpen, onClose, children }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal" style={{
            width:"100%"
        }}>
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal-content" style={{
                width:"40%",
                height:"50%",
                borderRadius:"30px",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <div className="modal-header" style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:'column',
                }}>
                    <button style={{
                        margin:"0 120% 70px 0",
                        fontSize:'35px',
                        color:"black"
                    }} className="close" onClick={onClose}>
                        <AiOutlineCloseCircle/>
                    </button>
                    <AiFillCheckCircle style={{
                        fontSize:"30px",
                        color:'green',
                    }}/>
                    <h1 style={{
                        marginTop:"10px",
                        color:"green",
                        marginBottom:"25%"
                    }}>You have made a successful purchase</h1>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal1;