import './App.css';
import { Form } from './components/Form';
import Showdata from './components/Showdata';
import { Todo } from './components/Todo';

function App() {
  return (
    <div >
    <h1 className='text-center font-bold text-[30px]'>Hello Start</h1>
   <Form/>
   <Showdata />
    </div>
  );
}

export default App;
