import { useModalContext } from "@/contexts/ModalContext";

const Header = () => {
    const { dispatch } = useModalContext();
    return (
        <div className = "header">
            <div className = "title">
                REACT
            </div>
            <button className = "addPostBtn" onClick={() => dispatch({type: 'show'})}>
                Add Post
            </button>
        </div>
    )
}

export default Header;