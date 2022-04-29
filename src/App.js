import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import { AuthContextProvider } from './context/AuthContextProvider';
import Dashboard from './layout/Dashboard';
import PrivateRoute from './common/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
