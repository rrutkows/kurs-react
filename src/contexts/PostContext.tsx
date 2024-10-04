import React, { createContext, useContext, useReducer } from "react"
import { PostType } from "../components/Post/Post"

export type PostContextStore = {
    posts: ReadonlyArray<PostType>,
    dispatch: React.Dispatch<Action>
}

export const PostContext = createContext<PostContextStore | null>(null);

type Action = {
    type: 'add',
    payload: PostType
} | {
    type: 'remove',
    payload: string
} | {
    type: 'init',
    payload: PostType[]
}

export const PostContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [posts, dispatch] = useReducer((state: PostType[], action: Action) => {
        switch (action.type) {
            case 'add':
                return [action.payload, ...state];
            case 'remove':
                return state.filter(p => p.id !== action.payload);
            case 'init':
                return action.payload;
        }

        return state;
    }, []);

    return (
        <PostContext.Provider value={{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePostContext = () => {
    const ctx = useContext(PostContext);
    if (!ctx) {
        throw new Error("No context");
    }

    return ctx;
}