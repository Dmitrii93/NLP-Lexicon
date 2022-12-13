import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { RouteProvider } from './contexts/RouteContext';
import { Section } from './pages/Section';

function App() {
    const sections = ['Morphological Features', 'Morphological Dependencies', 'Morphological Rules'];
    const routes = sections.map((item) => {
        return <Route key={item} path={`/${item.split(' ')[1].toLocaleLowerCase()}/:part`} element={<Section />} />;
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
