
import {BrowserRouter,Routes,Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from '../components/MainLayout'

function App() {
  
  const browserRouter = createBrowserRouter([{  //    </BrowserRouter>
    path: "/",
    element:<MainLayout/>,  //    </BrowserRouter>
    children:[
      {
        path: "/",
        element:<HomePage />
      },
      //    </BrowserRouter>
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/register",
        element:<Register />
      }
      ]
    }
  ]
  )


  return (
    
      <>
     <RouterProvider router={browserRouter}/>
     </>
    // <>
    //    <BrowserRouter>
    //    <Routes>
    //     <Route path='/'  element= {<HomePage/> }/>
    //     <Route path='/login' element={<Login/>}    />
    //     <Route path='/register' element={<Register/>}    />
    //    </Routes>
    //    </BrowserRouter>
    // </>
  )
}

export default App
