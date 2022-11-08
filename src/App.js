import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Context/Router/Routes';
function App() {
  return (
    <div className='bg-black w-full h-full text-white'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
