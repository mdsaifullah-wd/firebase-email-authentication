import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInForm from './components/LogInForm/LogInForm';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LogInForm></LogInForm>}></Route>
        <Route
          path='/register'
          element={<RegistrationForm></RegistrationForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
