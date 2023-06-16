import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import './App.css';

function App() {
    return (
        <>
            <SearchHeader/>
            <Outlet/>
        </>
    );
}

export default App;
