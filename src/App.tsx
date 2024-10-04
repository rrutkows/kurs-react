import * as style from '@/style.module.css';
import AcrylicDiv from './components/AcrylicDiv/AcrylicDiv';
import Welcome from './components/Welcome/Welcome';
import Post, { PostType } from './components/Post/Post';
import Header from './components/Header/Header';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Modal from './components/Modal/Modal';
import NewPost from './components/NewPost/NewPost';
import { usePostContext } from './contexts/PostContext';
import { useModalContext } from './contexts/ModalContext';

const App = () => {
    const {posts, dispatch} = usePostContext();
    const {isVisible: isModalVisible, dispatch: modalDispatch} = useModalContext();

    useEffect(() => {
        const gimedata = async () => {
            const data = await fetch('DEMO_DATA.json');
            const json = await data.json();

            dispatch({type: 'init', payload: json})
        }

        gimedata();
    }, []);

    const saveNewPost = useCallback((post: PostType) => {
        console.log(post);
        dispatch({type: 'add', payload: post});
        modalDispatch({type: 'hide'});
    }, [])

    const content = useMemo(() => posts.map(post => (
        <Post
            id={post.id}
            description={post.description}
            title={post.title}
            key={post.id}
        />
    )), [posts]);

    return (
        <main className={style.main}>
            {isModalVisible &&
                <Modal>
                    <NewPost onSaveClick={saveNewPost} onCancelClick={() => modalDispatch({type: 'hide'})}/>
                </Modal>
            }
            <AcrylicDiv className={style.acrylicMain} style={{width: '90%', height: '90%'}}>
                <Header />
                <div className='posts_container'>
                    {content}
                </div>
            </AcrylicDiv>
        </main>
    )
}
export default App;