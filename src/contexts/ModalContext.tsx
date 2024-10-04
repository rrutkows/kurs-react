import React, { createContext, useContext, useReducer } from "react"

export type ModalContextStore = {
    isVisible: boolean,
    dispatch: React.Dispatch<Action>
}

export const ModalContext = createContext<ModalContextStore | null>(null);

type Action = {
    type: 'show'
} | {
    type: 'hide'
}

export const ModalContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [isVisible, dispatch] = useReducer((state: boolean, action: Action) => {
        switch (action.type){
            case 'show':
                return true;
            case 'hide':
                return false;
        }

        return state;
    }, false);

    return (
        <ModalContext.Provider value={{isVisible, dispatch}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw new Error("No context");
    }

    return ctx;
}