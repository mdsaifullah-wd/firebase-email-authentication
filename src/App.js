import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInForm from './components/LogInForm/LogInForm';

function App() {
  return (
    <div className=''>
      <div className='w-50 mx-auto mt-5 border border-1 border-info p-5 rounded-3'>
        <LogInForm></LogInForm>
      </div>
    </div>
  );
}

export default App;
