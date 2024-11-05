import logo from './logo.svg';
import './App.css';
import LoginForm from './Page/LoginForm/LoginForm';
import Home from './Page/Home/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
