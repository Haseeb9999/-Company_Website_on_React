import './whole.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./Components/Pages/Home";
import Company from './Components/Pages/Company';
import Contact from './Components/Pages/Contact';
import Gallery from './Components/Pages/Gallery';
import Men from './Components/Pages/Men';
import Women from './Components/Pages/Women';
import Kids from './Components/Pages/Kids';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Home /></>
    },
    {
      path: '/Gallery',
      element: <><Gallery /></>
    },
    {
      path: '/Contact',
      element: <><Contact /></>
    },
    {
      path: '/Company',
      element: <><Company /></>
    },
    {
      path: '/Men',
      element: <><Men /></>
    },
    {
      path: '/Women',
      element: <><Women /></>
    },
    {
      path: '/Kids',
      element: <><Kids /></>
    },
    {
      path: '/All',
      element: <><Gallery /></>
    }
  ])
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App