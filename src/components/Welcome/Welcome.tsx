import AcrylicDiv from '../AcrylicDiv/AcrylicDiv';
import * as style from './style.module.css';

const Welcome = () => {
    return (
        <AcrylicDiv id="welcome" className={style.section} subContainerClassName={style.flex}>
            <div className={style.reactIcon}></div>
            <div className={style.title}>Kurs React (Basics)</div>
        </AcrylicDiv>
    )
}

export default Welcome;