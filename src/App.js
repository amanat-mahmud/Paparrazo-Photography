import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router/Routes';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-black text-white'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
