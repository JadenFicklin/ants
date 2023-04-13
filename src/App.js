import './App.css';
import BasicWorker from './components/ants/BasicWorker';
import SugarCrumb from './components/food/SugarCrumb';
import BasicHill from './components/hill/BasicHill';

function App() {
    return (
        <>
            <BasicWorker />
            <SugarCrumb />
            <BasicHill />
        </>
    );
}

export default App;
