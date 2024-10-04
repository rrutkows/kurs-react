import { useModalContext } from "@/contexts/ModalContext";
import React from "react";

const Modal = ({children}: React.PropsWithChildren) => {
    const { dispatch } = useModalContext();
    return (
        <div className="newModal">
            <div className="newModalContent">
                {children}
            </div>
            <div className="newModalBackdrop" onClick={() => dispatch({type: 'hide'})}></div>
        </div>
    )
}

export default Modal;