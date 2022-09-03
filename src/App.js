import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import FormPage from './pages/FormPage';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Navbar/>

     <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/form" element={<FormPage/>} />
    </Routes>
    </div>
  );
}

export default App;
