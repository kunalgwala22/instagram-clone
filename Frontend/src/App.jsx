
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import  Register from './pages/Register';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Chat from '../components/Chat';


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes><HomePage/></ProtectedRoutes>,
    children: [
      {
        path: '/',
        element: <ProtectedRoutes><HomePage/></ProtectedRoutes>
      },

  
    
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/chat',
    element: <Chat/>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
// import {BrowserRouter,Routes,Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Chat from '../components/Chat'



// function App() {
  
  
//   const browserRouter = createBrowserRouter([{ 
//     // path: "/",
//     // element:<MainLayout/>,  
//     children:[
//       {
//         path: "/",
//         element:<HomePage />
//       },
//       //    </BrowserRouter>
//       {
//         path: "/login",
//         element:<Login />
//       },
//       {
//         path: "/register",
//         element:<Register />
//       },
//       {
//         path: "/chat",
//         element:<Chat />
//       },
//       //   
      
//       ]
//     }
//   ]
//   )


//   return (
//     //   
//       <>
//      <RouterProvider router={browserRouter}/>
//      </>
//     // <>
//     //    <BrowserRouter>
//     //    <Routes>
//     //     <Route path='/'  element= {<ProtectedRoute><HomePage/> </ProtectedRoute> }/>
//     //     <Route path='/login' element={<Login/>}    />
//     //     <Route path='/register' element={<Register/>}    />
//     //     <Route path='/chat' element={<Chat/>}    />
//     //    </Routes>
//     //    </BrowserRouter>
//     // </>
//   )
// }

// export default App
