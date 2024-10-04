import * as style from '@/style.module.css';
import AcrylicDiv from './components/AcrylicDiv/AcrylicDiv';
import Welcome from './components/Welcome/Welcome';

const App = () => {
    return (
        <main className={style.main}>
            <Welcome />
            {/* <AcrylicDiv className={style.acrylicMain} style={{width: '90%', height: '90%'}}>
            </AcrylicDiv> */}
        </main>
    )
}
export default App;