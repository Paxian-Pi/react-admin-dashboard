import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { AuthContextProvider } from './context/AuthContextProvider';
import Dashboard from './layout/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </AuthContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
