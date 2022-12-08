import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { PartOfSpeech } from './pages/PartOfSpeech';
import { parts } from './mocks/parts.mock';
import { RouteProvider } from './contexts/RouteContext';

function App() {
    const keys = Object.keys(parts);
    const routes = keys.map((item, i) => {
        return (
            <Route
                key={i}
                path={`/${item}`}
                element={<PartOfSpeech part={parts[item]} prev={keys[i - 1]} next={keys[i + 1]} />}
            />
        );
    });
    return (
        <RouteProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                {routes}
            </Routes>
        </RouteProvider>
    );
}

export default App;
