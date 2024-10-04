import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { PostType } from "../Post/Post";
import { usePostContext } from "@/contexts/PostContext";
import * as style from './style.module.css';

export type NewPostPropsType = {
    onCancelClick: () => void,
    onSaveClick: (post: PostType) => void
};

let seq = 0;
const getId = () => "new-post-" + ++seq;

const NewPost = ({onSaveClick, onCancelClick}: NewPostPropsType) => {
    const {posts} = usePostContext();
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState<string | null>(null);
    const textRef = useRef<HTMLTextAreaElement>();
    const onSave = useCallback(() => {
        if (posts.some(p => p.title.toLowerCase() === title.toLowerCase())){
            return;
        }

        const description = textRef.current?.value || ''
        onSaveClick({title, description, id: getId()});
    }, [posts, title, textRef]);

    useEffect(() => {
        setTitleError(null);
        const validationId = setTimeout(() => {
            if (posts.some(p => p.title.toLowerCase() === title.toLowerCase())) {
                setTitleError("Title exists");
            }
        }, 1000);

        return () => {
            clearTimeout(validationId);
        }
    }, [title, posts])
    return (
        <>
            <section className="newModalTitle">
                Add New Post
            </section>
            <section className="newModalInputs">
                <label htmlFor="title">Title:</label>
                <input className={`${titleError && style.error}`} id="title" value={title} onChange={e => setTitle(e.target.value)}></input>
                <label htmlFor="description">Description:</label>
                <textarea ref={textRef as RefObject<HTMLTextAreaElement>} id="description"></textarea>
            </section>
            <section className="newModalButtonFooter">
                <button onClick={onCancelClick}>Close</button>
                <button onClick={onSave}>Save</button>
            </section>
        </>
    )
}

export default NewPost;