import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
