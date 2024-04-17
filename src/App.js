import logo from './logo.svg';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Load from './Components/Load';
import Contentdesc from './Components/HomeContent';
import Sorting from './Components/Sorting';
import Bubblesort from './Components/Bubblesort';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Load />} />
          <Route path='/' element={<Contentdesc />} />
          <Route path='/sorting' element={<Sorting />} />
          <Route path='/bubblesort' element={<Bubblesort />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
