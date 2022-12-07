import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { PartOfSpeech } from './pages/PartOfSpeech';
import { parts } from './mocks/parts.mock';

function App() {
    const routes = Object.keys(parts).map((item, i) => {
        return <Route key={i} path={`/${item}`} element={<PartOfSpeech part={parts[item]} />} />;
    });
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                {routes}
            </Routes>
        </>
    );
}

export default App;
