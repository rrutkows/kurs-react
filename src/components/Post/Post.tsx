import { usePostContext } from '@/contexts/PostContext';
import * as style from './style.module.css';

export type PostType = {
    id: string,
    title: string,
    description: string
}

const Post = ({id, title, description}: PostType) => {
    const {dispatch} = usePostContext();

    return (
        <div className={style.container}>
            <div className={style.title}>
                <button onClick={() => dispatch({type:'remove', payload: id})}>X</button>
                {title}
            </div>
            <div className={style.description}>{description}</div>
        </div>
    )
}

export default Post;